import { checkIsCodespaceUser } from "@/lib/utils";
import { CollectionConfig } from "payload";

export const Press: CollectionConfig = {
  slug: "press",
  admin: {
    useAsTitle: "title",
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
      name: "title",
      label: "Title",
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
      name: "url",
      label: "Article URL",
      type: "text",
      required: true,
    },
    {
      name: "source",
      label: "Source/Publisher",
      type: "text",
      required: true,
    },
    {
      name: "date",
      label: "Publication Date",
      type: "date",
      required: true,
    },
    {
      name: "excerpt",
      label: "Short Description",
      type: "textarea",
      required: true,
    },
    {
      name: "featured",
      label: "Featured Press",
      type: "checkbox",
      defaultValue: false,
      admin: {
        description: "Display this press item prominently",
      },
    },
  ],
}; 