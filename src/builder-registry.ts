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
  isRSC: true,
  models: ["page"],
};

const locationBlock = {
  ...pageBlock,
  inputs: [locationInput],
};

export const builderCustomComponents = [
  {
    ...locationBlock,
    name: "YLP Hero",
    component: Hero,
    description: "Full-screen painting hero with location-aware copy.",
  },
  {
    ...locationBlock,
    name: "YLP Services",
    component: Services,
    description: "Painting services grid and animated background.",
  },
  {
    ...pageBlock,
    name: "YLP Why Us",
    component: WhyUs,
    description: "Benefits and trust signals section.",
  },
  {
    ...locationBlock,
    name: "YLP Gallery",
    component: Gallery,
    description: "Before-and-after project gallery.",
  },
  {
    ...locationBlock,
    name: "YLP Reviews",
    component: Reviews,
    description: "Customer reviews grid.",
  },
  {
    ...locationBlock,
    name: "YLP FAQ",
    component: FAQ,
    description: "Interactive location-aware FAQ accordion.",
  },
  {
    ...locationBlock,
    name: "YLP Location Map",
    component: LocationMap,
    description: "Service-area and contact-information section.",
  },
  {
    ...locationBlock,
    name: "YLP Footer CTA",
    component: FooterCTA,
    description: "Location-aware quote call to action.",
  },
  {
    ...locationBlock,
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
    ...pageBlock,
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
        enum: ["white", "gray", "dark", "black", "primary", "gradient"],
        defaultValue: "white",
      },
    ],
  },
  {
    ...pageBlock,
    name: "YLP Section Header",
    component: SectionHeader,
    description: "Styled section title and subtitle.",
    inputs: [
      { name: "title", type: "string", defaultValue: "Section heading", required: true },
      { name: "subtitle", type: "longText" },
      { name: "centered", type: "boolean", defaultValue: true },
      { name: "light", type: "boolean", defaultValue: false },
      { name: "className", type: "string", advanced: true },
    ],
  },
  {
    ...pageBlock,
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
    ...pageBlock,
    name: "YLP Button",
    component: Button,
    description: "Brand-styled link or button that accepts child blocks.",
    canHaveChildren: true,
    inputs: [
      { name: "href", type: "url", defaultValue: "/quote" },
      {
        name: "variant",
        type: "string",
        enum: ["primary", "secondary", "outline", "ghost"],
        defaultValue: "primary",
      },
      {
        name: "size",
        type: "string",
        enum: ["sm", "md", "lg"],
        defaultValue: "md",
      },
      { name: "fullWidth", type: "boolean", defaultValue: false },
      { name: "className", type: "string", advanced: true },
    ],
  },
  {
    ...pageBlock,
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
        enum: ["dark", "light", "glass"],
        defaultValue: "dark",
      },
      { name: "className", type: "string", advanced: true },
    ],
  },
  ...([
    ["YLP Card Header", CardHeader],
    ["YLP Card Content", CardContent],
  ] as const).map(([name, component]) => ({
    ...pageBlock,
    name,
    component,
    canHaveChildren: true,
    inputs: [{ name: "className", type: "string", advanced: true }],
  })),
  ...([
    ["YLP Card Title", CardTitle],
    ["YLP Card Description", CardDescription],
  ] as const).map(([name, component]) => ({
    ...pageBlock,
    name,
    component,
    canHaveChildren: true,
    inputs: [
      { name: "light", type: "boolean", defaultValue: true },
      { name: "className", type: "string", advanced: true },
    ],
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
    ...pageBlock,
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
