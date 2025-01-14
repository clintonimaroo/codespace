import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "name",
  },
  auth: true,
  access: {
    read: () => true,
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
  ],
};
