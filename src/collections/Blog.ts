import { CollectionConfig } from "payload";
import { checkIsCodespaceUser } from "@/lib/utils";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import {
  HeadingFeature,
  BlockquoteFeature,
  LinkFeature,
  UploadFeature,
  BoldTextFeature,
  ItalicTextFeature,
  UnderlineTextFeature,
  StrikethroughTextFeature,
  CodeTextFeature,
  ListFeature,
} from "@payloadcms/richtext-lexical";

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
      editor: lexicalEditor({
        features: [
          HeadingFeature(),
          BlockquoteFeature(),
          LinkFeature(),
          UploadFeature(),
          BoldTextFeature(),
          ItalicTextFeature(),
          UnderlineTextFeature(),
          StrikethroughTextFeature(),
          CodeTextFeature(),
          ListFeature(),
        ],
      }),
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
