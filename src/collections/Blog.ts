import { CollectionConfig } from "payload";

export const Blog: CollectionConfig = {
  slug: "blog",
  hooks: {
    beforeChange: [
      ({ req, operation, data }) => {
        if (req.user) {
          if (operation === "create") {
            data.author = req.user.id;
            data.updatedBy = req.user.id;
          } else if (operation === "update") {
            data.updatedBy = req.user.id;
          }

          return data;
        }
      },
    ],
  },
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: ({ req }) => {
      if (req.user) return true;
      console.log(req);

      return {
        _status: {
          equals: "published",
        },
      };
    },
    create: ({ req: { user } }) => {
      if (user) return true;

      return {
        _status: {
          equals: "published",
        },
      };
    },
    update: ({ req: { user } }) => {
      if (user) return true;

      return {
        _status: {
          equals: "published",
        },
      };
    },
    delete: ({ req: { user } }) => {
      if (user) return true;

      return {
        _status: {
          equals: "published",
        },
      };
    },
  },
  versions: {
    drafts: {
      autosave: true,
      schedulePublish: true,
    },
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "featuredImage",
      label: "Featured Image",
      type: "upload",
      required: true,
      relationTo: "media",
    },
    {
      name: "content",
      label: "Content",
      type: "richText",
      required: true,
    },
    {
      name: "excerpt",
      label: "Excerpt",
      type: "textarea",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "isFeatured",
      label: "Set as featured post",
      type: "checkbox",
      defaultValue: false,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "author",
      type: "relationship",
      access: {
        update: () => false,
        read: () => true,
      },
      relationTo: "users",
      admin: {
        readOnly: true,
        position: "sidebar",
        condition: (data) => !!data?.author,
      },
      required: true,
    },
    {
      name: "updatedBy",
      type: "relationship",
      access: {
        update: () => false,
      },
      relationTo: "users",
      admin: {
        readOnly: true,
        position: "sidebar",
        condition: (data) => !!data?.updatedBy,
      },
      required: true,
    },
  ],
};
