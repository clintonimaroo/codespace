import { checkIsCodespaceUser } from "@/lib/utils";
import { CollectionConfig } from "payload";
import { buildUpcomingEventEmbedCode } from "@/lib/event-display";

export const UpcomingEvents: CollectionConfig = {
  slug: "upcoming-events",
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
          doc.embedCode = buildUpcomingEventEmbedCode(doc.id);
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
      validate: (value, { siblingData }) => {
        if (siblingData?.dateTBA || value) {
          return true;
        }

        return "Date is required unless Date To Be Announced is enabled.";
      },
    },
    {
      name: "dateTBA",
      label: "Date To Be Announced (TBA)",
      type: "checkbox",
      defaultValue: false,
      admin: {
        description:
          "Enable this when the event date should display as TBA instead of a calendar date.",
      },
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      required: true,
    },
    {
      name: "location",
      label: "Location",
      type: "text",
      required: true,
    },
    {
      name: "callToAction",
      label: "Call To Action",
      type: "text",
    },
    {
      name: "eventLink",
      label: "Event Link",
      type: "text",
      required: true,
    },
    {
      name: "stats",
      label: "Event Stats",
      type: "array",
      required: true,
      admin: {
        position: "sidebar",
      },
      fields: [
        {
          name: "statTitle",
          label: "Stat Title",
          type: "text",
        },
        {
          name: "statValue",
          label: "Stat Value",
          type: "number",
        },
      ],
    },
    {
      name: "embedCode",
      type: "ui",
      admin: {
        components: {
          Field:
            "@/components/admin/event-embed-code-field#UpcomingEventEmbedCodeField",
        },
        position: "sidebar",
      },
    },
  ],
};
