import { CollectionConfig } from "payload";

export const Gallery: CollectionConfig = {
  slug: "gallery",
  admin: {
    useAsTitle: "event",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "event",
      label: "Event",
      type: "text",
      required: true,
    },
    {
      name: "coverImage",
      label: "Cover Image",
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
      name: "albumLink",
      label: "Album Link",
      type: "text",
      required: true,
    },
  ],
};
