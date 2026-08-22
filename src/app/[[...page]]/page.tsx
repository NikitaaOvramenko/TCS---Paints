import {
  Content,
  fetchOneEntry,
  getBuilderSearchParams,
  isPreviewing,
} from "@builder.io/sdk-react-nextjs";
import { notFound, redirect } from "next/navigation";
import { builderCustomComponents } from "@/builder-registry";
import {
  createBuilderPreviewContent,
  toUrlSearchParams,
  withSearchParams,
} from "@/lib/builder/preview";

const BUILDER_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY!;

interface PageProps {
  params: Promise<{ page?: string[] }>;
  searchParams: Promise<
    Record<string, string | string[] | undefined>
  >;
}

export default async function Page({ params, searchParams }: PageProps) {
  const { page } = await params;
  const search = await searchParams;
  const builderSearch = toUrlSearchParams(search);
  const isPreview = isPreviewing(builderSearch);

  if (!page?.length) {
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

      redirect(withSearchParams(nextLocation, search));
    }
  }

  const urlPath = "/" + (page?.join("/") || "");

  const content = await fetchOneEntry({
    model: "page",
    apiKey: BUILDER_API_KEY,
    options: getBuilderSearchParams(builderSearch),
    userAttributes: { urlPath },
  });

  if (!content && !isPreview) {
    notFound();
  }

  const contentToRender =
    content ?? createBuilderPreviewContent(search);

  return (
    <Content
      content={contentToRender}
      apiKey={BUILDER_API_KEY}
      model="page"
      customComponents={builderCustomComponents}
    />
  );
}
