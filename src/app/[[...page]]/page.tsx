import {
  Content,
  fetchOneEntry,
  isPreviewing,
} from "@builder.io/sdk-react-nextjs";
import { notFound, redirect } from "next/navigation";

const BUILDER_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY!;

interface PageProps {
  params: Promise<{ page?: string[] }>;
  searchParams: Promise<Record<string, string>>;
}

export default async function Page({ params, searchParams }: PageProps) {
  const { page } = await params;
  const search = await searchParams;
  const isPreview = isPreviewing(search);

  if (!page?.length && !isPreview) {
    const nextLocation = process.env.NEXT_LOC?.trim();

    if (nextLocation) {
      if (
        nextLocation === "/" ||
        !nextLocation.startsWith("/") ||
        nextLocation.startsWith("//")
      ) {
        throw new Error(
          'NEXT_LOC must be an internal path other than "/", for example "/us/fl/miami".',
        );
      }

      redirect(nextLocation);
    }
  }

  const urlPath = "/" + (page?.join("/") || "");

  const content = await fetchOneEntry({
    model: "page",
    apiKey: BUILDER_API_KEY,
    userAttributes: { urlPath },
  });

  if (!content && !isPreview) {
    notFound();
  }

  return (
    <Content content={content} apiKey={BUILDER_API_KEY} model="page" />
  );
}
