import {
  BriefcaseIcon,
  BuildingIcon,
  Button,
  CalculatorIcon,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CheckCircleIcon,
  Container,
  FenceIcon,
  HomeIcon,
  LayersIcon,
  MapPinIcon,
  PhoneIcon,
  Section,
  SectionHeader,
  ShieldIcon,
  SparklesIcon,
  StarIcon,
  ToolIcon,
  UsersIcon,
} from "@/components/ui";
import { Footer } from "@/components/ui/Footer";
import {
  FAQ,
  FooterCTA,
  Gallery,
  Hero,
  LocationMap,
  Marquee,
  Reviews,
  Services,
  WhyUs,
} from "@/components/sections";
import BeforeAfterCard from "@/components/sections/BeforeAfterCard";
import { QuoteForm } from "@/features/quote";

const locationInput = {
  name: "location",
  type: "object",
  friendlyName: "Location",
  helperText: "Leave empty for generic copy, or set the location fields.",
  folded: true,
  subFields: [
    { name: "country", type: "string", defaultValue: "us" },
    {
      name: "countryName",
      type: "string",
      friendlyName: "Country name",
      defaultValue: "United States",
    },
    { name: "region", type: "string", defaultValue: "fl" },
    {
      name: "regionName",
      type: "string",
      friendlyName: "Region name",
      defaultValue: "Florida",
    },
    { name: "city", type: "string", defaultValue: "miami" },
    {
      name: "cityName",
      type: "string",
      friendlyName: "City name",
      defaultValue: "Miami",
    },
    { name: "phone", type: "string", advanced: true },
    { name: "address", type: "string", advanced: true },
  ],
};

const pageBlock = {
  models: ["page"],
};

const rscPageBlock = {
  ...pageBlock,
  isRSC: true,
};

const rscLocationBlock = {
  ...rscPageBlock,
  inputs: [locationInput],
};

const clientLocationBlock = {
  ...pageBlock,
  inputs: [locationInput],
};

export const builderCustomComponents = [
  {
    ...rscLocationBlock,
    name: "YLP Hero",
    component: Hero,
    description: "Full-screen painting hero with location-aware copy.",
  },
  {
    ...rscLocationBlock,
    name: "YLP Services",
    component: Services,
    description: "Numbered painting services list over the animated brush stroke.",
  },
  {
    ...rscPageBlock,
    name: "YLP Why Us",
    component: WhyUs,
    description: "Benefits and trust signals section.",
  },
  {
    ...rscLocationBlock,
    name: "YLP Gallery",
    component: Gallery,
    description: "Before-and-after project gallery.",
  },
  {
    ...rscLocationBlock,
    name: "YLP Reviews",
    component: Reviews,
    description: "Customer reviews grid.",
  },
  {
    ...clientLocationBlock,
    name: "YLP FAQ",
    component: FAQ,
    description: "Interactive location-aware FAQ accordion.",
  },
  {
    ...rscLocationBlock,
    name: "YLP Location Map",
    component: LocationMap,
    description: "Service-area and contact-information section.",
  },
  {
    ...rscLocationBlock,
    name: "YLP Footer CTA",
    component: FooterCTA,
    description: "Location-aware quote call to action.",
  },
  {
    ...rscLocationBlock,
    name: "YLP Footer",
    component: Footer,
    description: "Site footer with services, links, and contact details.",
  },
  {
    ...pageBlock,
    name: "YLP Quote Form",
    component: QuoteForm,
    description: "Complete quote request form.",
  },
  {
    ...pageBlock,
    name: "YLP Before After Card",
    component: BeforeAfterCard,
    description: "Interactive before-and-after image comparison.",
    inputs: [
      { name: "title", type: "string", defaultValue: "Project transformation" },
      { name: "category", type: "string", defaultValue: "Interior" },
      {
        name: "beforeImage",
        type: "file",
        friendlyName: "Before image",
        allowedFileTypes: ["jpeg", "jpg", "png", "webp", "avif"],
        required: true,
      },
      {
        name: "afterImage",
        type: "file",
        friendlyName: "After image",
        allowedFileTypes: ["jpeg", "jpg", "png", "webp", "avif"],
        required: true,
      },
    ],
  },
  {
    ...rscPageBlock,
    name: "YLP Marquee",
    component: Marquee,
    description: "Continuously scrolling text band.",
    inputs: [
      {
        name: "items",
        type: "list",
        subFields: [{ name: "item", type: "string" }],
        defaultValue: [
          { item: "Interior Painting" },
          { item: "Exterior Painting" },
          { item: "Commercial Painting" },
        ],
      },
      { name: "className", type: "string", advanced: true },
    ],
  },
  {
    ...rscPageBlock,
    name: "YLP Section",
    component: Section,
    description: "Responsive section wrapper that accepts child blocks.",
    canHaveChildren: true,
    inputs: [
      { name: "id", type: "string", advanced: true },
      { name: "className", type: "string", advanced: true },
      {
        name: "containerSize",
        type: "string",
        friendlyName: "Container size",
        enum: ["sm", "md", "lg", "xl", "full"],
        defaultValue: "xl",
      },
      {
        name: "background",
        type: "string",
        // Legacy names (white/gray/dark/black/primary/gradient) still resolve
        // in Section, so existing entries keep rendering.
        enum: ["light", "lightAlt", "tint", "ink", "inkBrand", "transparent"],
        defaultValue: "light",
      },
    ],
  },
  {
    ...rscPageBlock,
    name: "YLP Section Header",
    component: SectionHeader,
    description: "Styled section title and subtitle.",
    inputs: [
      { name: "eyebrow", type: "string", helperText: "Small tracked label, e.g. \"01 — What we do\"" },
      { name: "title", type: "string", defaultValue: "Section heading", required: true },
      { name: "subtitle", type: "longText" },
      { name: "centered", type: "boolean", defaultValue: false },
      { name: "className", type: "string", advanced: true },
    ],
  },
  {
    ...rscPageBlock,
    name: "YLP Container",
    component: Container,
    description: "Responsive content-width wrapper that accepts child blocks.",
    canHaveChildren: true,
    inputs: [
      {
        name: "size",
        type: "string",
        enum: ["sm", "md", "lg", "xl", "full"],
        defaultValue: "xl",
      },
      { name: "className", type: "string", advanced: true },
    ],
  },
  {
    ...rscPageBlock,
    name: "YLP Button",
    component: Button,
    description: "Brand-styled link or button that accepts child blocks.",
    canHaveChildren: true,
    inputs: [
      { name: "href", type: "url", defaultValue: "/quote" },
      {
        name: "variant",
        type: "string",
        enum: ["primary", "accent", "outline", "ghost"],
        defaultValue: "primary",
      },
      {
        name: "size",
        type: "string",
        enum: ["sm", "md", "lg"],
        defaultValue: "md",
      },
      { name: "fullWidth", type: "boolean", defaultValue: false },
      { name: "arrow", type: "boolean", defaultValue: true },
      { name: "className", type: "string", advanced: true },
    ],
  },
  {
    ...rscPageBlock,
    name: "YLP Card",
    component: Card,
    description: "Brand card container that accepts child blocks.",
    canHaveChildren: true,
    inputs: [
      { name: "hover", type: "boolean", defaultValue: false },
      {
        name: "padding",
        type: "string",
        enum: ["none", "sm", "md", "lg"],
        defaultValue: "md",
      },
      {
        name: "variant",
        type: "string",
        enum: ["outline", "light", "ink"],
        defaultValue: "outline",
      },
      { name: "className", type: "string", advanced: true },
    ],
  },
  ...([
    ["YLP Card Header", CardHeader],
    ["YLP Card Content", CardContent],
  ] as const).map(([name, component]) => ({
    ...rscPageBlock,
    name,
    component,
    canHaveChildren: true,
    inputs: [{ name: "className", type: "string", advanced: true }],
  })),
  ...([
    ["YLP Card Title", CardTitle],
    ["YLP Card Description", CardDescription],
  ] as const).map(([name, component]) => ({
    ...rscPageBlock,
    name,
    component,
    canHaveChildren: true,
    inputs: [{ name: "className", type: "string", advanced: true }],
  })),
  ...([
    ["YLP Icon - Shield", ShieldIcon],
    ["YLP Icon - Sparkles", SparklesIcon],
    ["YLP Icon - Users", UsersIcon],
    ["YLP Icon - Calculator", CalculatorIcon],
    ["YLP Icon - Check Circle", CheckCircleIcon],
    ["YLP Icon - Home", HomeIcon],
    ["YLP Icon - Building", BuildingIcon],
    ["YLP Icon - Briefcase", BriefcaseIcon],
    ["YLP Icon - Layers", LayersIcon],
    ["YLP Icon - Fence", FenceIcon],
    ["YLP Icon - Tool", ToolIcon],
    ["YLP Icon - Phone", PhoneIcon],
    ["YLP Icon - Star", StarIcon],
    ["YLP Icon - Map Pin", MapPinIcon],
  ] as const).map(([name, component]) => ({
    ...rscPageBlock,
    name,
    component,
    inputs: [
      {
        name: "className",
        type: "string",
        defaultValue: "h-8 w-8",
        helperText: "Tailwind classes controlling icon size and color.",
      },
    ],
  })),
];
