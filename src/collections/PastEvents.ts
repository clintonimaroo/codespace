import { checkIsCodespaceUser } from "@/lib/utils";
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
          doc.embedCode = `<iframe src="https://codespaces.org/past-events/${doc.id}/embed" width="100%" height="600" frameborder="0" style="border: none; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);"></iframe>`;
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
      type: "textarea",
      admin: {
        position: "sidebar",
        description: "Copy this code to embed the event on external websites",
        readOnly: true,
        style: {
          fontFamily: "monospace",
          fontSize: "12px",
          whiteSpace: "pre-wrap",
          wordBreak: "break-all",
          minHeight: "100px",
          padding: "8px",
          backgroundColor: "var(--theme-elevation-50)",
          border: "1px solid var(--theme-elevation-150)",
          borderRadius: "4px",
          color: "var(--theme-elevation-800)",
        },
      },
    },
  ],
};
