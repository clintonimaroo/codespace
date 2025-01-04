import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "name",
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
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
