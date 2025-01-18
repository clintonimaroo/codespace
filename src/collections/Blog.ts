import { CollectionConfig } from "payload";
import { checkIsCodespaceUser } from "@/lib/utils";

export const Blog: CollectionConfig = {
  slug: "blog",
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
      name: "content",
      label: "Content",
      type: "richText",
      required: true,
      admin: {
        elements: [
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "blockquote",
          "link",
          "ol",
          "ul",
          "indent",
          "upload",
          {
            name: "video",
            Button: () => "Video",
            Element: ({ children }) => children,
            fields: [
              {
                name: "url",
                label: "YouTube URL",
                type: "text",
                required: true,
              },
              {
                name: "type",
                label: "Video Type",
                type: "select",
                required: true,
                defaultValue: "youtube",
                options: [
                  {
                    label: "YouTube",
                    value: "youtube",
                  },
                ],
              },
            ],
          },
        ],
        leaves: ["bold", "italic", "underline", "strikethrough", "code"],
      },
    },
    {
      name: "excerpt",
      label: "Excerpt",
      type: "textarea",
    },
    {
      name: "featuredImage",
      label: "Featured Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "author",
      label: "Author",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      name: "tags",
      label: "Tags",
      type: "array",
      minRows: 1,
      maxRows: 5,
      fields: [
        {
          name: "tag",
          type: "text",
        },
      ],
    },
    {
      name: "isFeatured",
      label: "Featured",
      type: "checkbox",
      defaultValue: false,
    },
  ],
};
