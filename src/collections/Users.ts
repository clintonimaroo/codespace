import { checkIsCodespaceUser } from "@/lib/utils";
import type { CollectionConfig } from "payload";

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
        description: "Upload a profile picture (recommended size: 400x400 pixels)",
      },
    },
  ],
};
