import { checkIsCodespaceUser } from "@/lib/utils";
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  hooks: {
    beforeChange: [
      ({ req, data }) => {
        if (req.user) {
          data.uploadedBy = req.user.id;
        }
        return data;
      },
    ],
  },
  access: {
    read: ({ req }) => {
      // If no user, show all media (needed for public access to images)
      if (!req.user) {
        return true;
      }

      // If Code Space admin, show all media
      if (checkIsCodespaceUser(req.user)) {
        return true;
      }

      // Otherwise, only show user's own media
      return {
        or: [
          {
            uploadedBy: {
              equals: req.user.id,
            },
          },
          // Also allow access to media that hasn't been assigned an uploader yet
          {
            uploadedBy: {
              exists: false,
            },
          },
        ],
      };
    },
    create: ({ req }) => {
      return !!req.user;
    },
    update: ({ req }) => {
      if (!req.user) return false;
      
      if (checkIsCodespaceUser(req.user)) {
        return true;
      }

      return {
        uploadedBy: {
          equals: req.user.id,
        },
      };
    },
    delete: ({ req }) => {
      if (!req.user) return false;
      
      if (checkIsCodespaceUser(req.user)) {
        return true;
      }

      return {
        uploadedBy: {
          equals: req.user.id,
        },
      };
    },
  },
  admin: {
    useAsTitle: 'alt',
    description: 'Upload and manage media files.',
  },
  upload: {
    staticDir: 'media',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Alt Text',
    },
    {
      name: 'uploadedBy',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
    },
  ],
}