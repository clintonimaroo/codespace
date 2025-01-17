import { checkIsCodespaceUser } from "@/lib/utils";
import { CollectionConfig } from "payload";

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
      required: true,
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
  ],
};
