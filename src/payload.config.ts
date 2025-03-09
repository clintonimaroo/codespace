import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Blog } from "./collections/Blog";
import { Gallery } from "./collections/Gallery";
import { UpcomingEvents } from "./collections/UpcomingEvents";
import { PastEvents } from "./collections/PastEvents";
import { Press } from "./collections/Press";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      breakpoints: [
        {
          name: 'mobile',
          label: 'Mobile',
          width: 375,
          height: 667,
        },
        {
          name: 'tablet',
          label: 'Tablet',
          width: 768,
          height: 1024,
        },
        {
          name: 'desktop',
          label: 'Desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  collections: [Users, Media, Blog, Gallery, UpcomingEvents, PastEvents, Press],
  editor: lexicalEditor({
    features: {
      // Default features
      blocks: true,
      links: true,
      list: true,
      upload: {
        collections: {
          media: true,
        },
      },
      // Enhanced features
      codeBlock: {
        languages: [
          { label: 'Plain Text', value: 'plaintext' },
          { label: 'HTML', value: 'html' },
          { label: 'CSS', value: 'css' },
          { label: 'JavaScript', value: 'javascript' },
          { label: 'TypeScript', value: 'typescript' },
          { label: 'Python', value: 'python' },
          { label: 'Java', value: 'java' },
          { label: 'C++', value: 'cpp' },
          { label: 'Ruby', value: 'ruby' },
          { label: 'PHP', value: 'php' },
          { label: 'Go', value: 'go' },
          { label: 'Rust', value: 'rust' },
          { label: 'SQL', value: 'sql' },
          { label: 'Shell', value: 'shell' },
          { label: 'Markdown', value: 'markdown' },
          { label: 'JSON', value: 'json' },
          { label: 'YAML', value: 'yaml' },
        ],
      },
      video: {
        types: [
          { label: 'YouTube', value: 'youtube' },
          { label: 'Vimeo', value: 'vimeo' },
          { label: 'Custom', value: 'custom' },
        ],
        fields: [
          {
            name: 'thumbnail',
            type: 'upload',
            relationTo: 'media',
            required: false,
            admin: {
              condition: (data) => data?.type === 'custom',
            },
          },
        ],
      },
    },
  }),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
});
