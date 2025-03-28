/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import type { Metadata } from "next";
import dynamic from 'next/dynamic';

import config from "@payload-config";
import { generatePageMetadata } from "@payloadcms/next/views";
import { importMap } from "../importMap";

// Dynamically import the RootPage component with no server-side rendering
// This improves initial page load time
const RootPage = dynamic(
  () => import('@payloadcms/next/views').then((mod) => mod.RootPage),
  { ssr: false }
);

type Args = {
  params: Promise<{
    segments: string[];
  }>;
  searchParams: Promise<{
    [key: string]: string | string[];
  }>;
};

export const generateMetadata = async (props: Args): Promise<Metadata> => {
  const searchParams = props.searchParams;
  const params = props.params;
  return generatePageMetadata({ config, params, searchParams });
};

const Page = async (props: Args) => {
  const searchParams = props.searchParams;
  const params = props.params;
  return <RootPage config={config} params={params} searchParams={searchParams} importMap={importMap} />;
};

export default Page;
