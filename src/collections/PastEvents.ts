import { checkIsCodespaceUser } from "@/lib/utils";
import { buildPastEventEmbedCode } from "@/lib/event-display";
import { CollectionConfig } from "payload";

export const PastEvents: CollectionConfig = {
  slug: "past-events",
  admin: {
    useAsTitle: "eventTitle",
    hidden(args) {
      return !checkIsCodespaceUser(args.user);
    },
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => checkIsCodespaceUser(user),
    update: ({ req: { user } }) => checkIsCodespaceUser(user),
    delete: ({ req: { user } }) => checkIsCodespaceUser(user),
  },
  hooks: {
    afterRead: [
      async ({ doc }) => {
        if (doc.id) {
          doc.embedCode = buildPastEventEmbedCode(doc.id);
        }
        return doc;
      },
    ],
  },
  fields: [
    {
      name: "eventTitle",
      label: "Event Title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      required: true,
    },
    {
      name: "coverImage",
      label: "Event Cover Image",
      type: "upload",
      required: true,
      relationTo: "media",
    },
    {
      name: "date",
      label: "Date",
      type: "date",
      required: true,
    },
    {
      name: "callToAction",
      label: "Call To Action",
      type: "text",
    },
    {
      name: "recapLink",
      label: "Recap Link",
      type: "text",
      required: true,
    },
    {
      name: "embedCode",
      type: "ui",
      admin: {
        components: {
          Field:
            "@/components/admin/event-embed-code-field#PastEventEmbedCodeField",
        },
        position: "sidebar",
      },
    },
  ],
};
