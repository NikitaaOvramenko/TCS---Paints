type BuilderSearchParams = Record<
  string,
  string | string[] | undefined
>;

export function toUrlSearchParams(search: BuilderSearchParams) {
  const normalized = new URLSearchParams();

  for (const [key, value] of Object.entries(search)) {
    if (Array.isArray(value)) {
      value.forEach((item) => normalized.append(key, item));
    } else if (value !== undefined) {
      normalized.append(key, value);
    }
  }

  return normalized;
}

export function createBuilderPreviewContent(search: BuilderSearchParams) {
  const override = search["builder.overrides.page"];
  const contentId = Array.isArray(override) ? override[0] : override;

  return {
    id: contentId || "builder-preview-placeholder",
    name: "Builder preview",
    published: "draft" as const,
    data: {
      blocks: [],
    },
  };
}

export function withSearchParams(
  pathname: string,
  search: BuilderSearchParams,
) {
  const destination = new URL(pathname, "http://localhost");
  toUrlSearchParams(search).forEach((value, key) => {
    destination.searchParams.append(key, value);
  });

  return `${destination.pathname}${destination.search}${destination.hash}`;
}
