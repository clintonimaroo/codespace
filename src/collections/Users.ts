import { sendAdminWelcomeEmail } from "@/lib/send-admin-welcome-email";
import { checkIsCodespaceUser } from "@/lib/utils";
import type {
  CollectionAfterChangeHook,
  CollectionConfig,
  PayloadRequest,
} from "payload";

const welcomeResetExpiration = 1000 * 60 * 60 * 48;

async function sendAdminWelcomeInvite({
  email,
  name,
  req,
  userID,
}: {
  email: string;
  name?: null | string;
  req: PayloadRequest;
  userID: number | string;
}) {
  const token = await req.payload.forgotPassword({
    collection: "users",
    data: {
      email,
    },
    disableEmail: true,
    expiration: welcomeResetExpiration,
    req,
  });

  if (!token) {
    req.payload.logger.warn({
      msg: "Could not generate welcome reset token for admin user.",
      userID,
    });
    return false;
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL || "https://www.codespaces.org";
  const resetUrl = `${baseUrl.replace(/\/$/, "")}/admin/reset/${token}`;

  await sendAdminWelcomeEmail({
    email,
    name: typeof name === "string" ? name : null,
    resetUrl,
  });

  return true;
}

const sendWelcomeEmailAfterCreate: CollectionAfterChangeHook = async ({
  doc,
  operation,
  req,
}) => {
  if (operation !== "create" || !doc.email) {
    return doc;
  }

  try {
    await sendAdminWelcomeInvite({
      email: doc.email,
      name: typeof doc.name === "string" ? doc.name : null,
      req,
      userID: doc.id,
    });
  } catch (error) {
    req.payload.logger.error({
      err: error,
      msg: "Failed to send welcome email for new admin user.",
      userID: doc.id,
    });
  }

  return doc;
};

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "name",
    hidden(args) {
      return !checkIsCodespaceUser(args.user);
    },
  },
  auth: true,
  access: {
    read: () => true,
    create: ({ req: { user } }) => checkIsCodespaceUser(user),
    update: ({ req: { user } }) => {
      if (checkIsCodespaceUser(user)) {
        return true;
      }
      return {
        id: {
          equals: user?.id,
        },
      };
    },
    delete: ({ req: { user } }) => checkIsCodespaceUser(user),
  },
  endpoints: [
    {
      path: "/:id/resend-welcome-email",
      method: "post",
      handler: async (req) => {
        if (!checkIsCodespaceUser(req.user)) {
          return Response.json({ message: "Unauthorized" }, { status: 401 });
        }

        const id = req.routeParams?.id;

        if (typeof id !== "string") {
          return Response.json(
            { message: "Missing user id." },
            { status: 400 },
          );
        }

        const user = await req.payload.findByID({
          collection: "users",
          id,
          req,
        });

        if (!user?.email) {
          return Response.json(
            { message: "This user does not have an email address." },
            { status: 400 },
          );
        }

        await sendAdminWelcomeInvite({
          email: user.email,
          name: typeof user.name === "string" ? user.name : null,
          req,
          userID: user.id,
        });

        return Response.json({
          message: `Invite email sent to ${user.email}.`,
        });
      },
    },
  ],
  hooks: {
    afterChange: [sendWelcomeEmailAfterCreate],
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "username",
      label: "Username",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "profilePicture",
      label: "Profile Picture",
      type: "upload",
      relationTo: "media",
      admin: {
        description:
          "Upload a profile picture (recommended size: 400x400 pixels)",
      },
    },
    {
      name: "resendWelcomeEmail",
      type: "ui",
      admin: {
        components: {
          Field: "@/components/admin/resend-email-field#ResendEmailField",
        },
      },
    },
  ],
};
