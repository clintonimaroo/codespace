import { CollectionConfig } from "payload";

export const UpcomingEvents: CollectionConfig = {
  slug: "upcoming-events",
  admin: {
    useAsTitle: "eventTitle",
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => {
      if (user) return true;

      return false;
    },
    update: ({ req: { user } }) => {
      if (user) return true;

      return false;
    },
    delete: ({ req: { user } }) => {
      if (user) return true;

      return false;
    },
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
      type: "text",
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
  ],
};
