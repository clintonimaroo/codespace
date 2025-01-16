import { CollectionConfig } from "payload";

export const PastEvents: CollectionConfig = {
  slug: "past-events",
  admin: {
    useAsTitle: "eventTitle",
  },
  access: {
    read: () => true,
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
  ],
};
