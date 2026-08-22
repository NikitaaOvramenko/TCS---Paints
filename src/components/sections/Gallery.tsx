import { Section, SectionHeader } from "@/components/ui";
import { galleryContent, replaceLocationPlaceholders } from "@/data/content";
import type { Location } from "@/data/locations";
import GalleryAnimations from "./GalleryAnimations";
import BeforeAfterCard from "./BeforeAfterCard";

interface GalleryProps {
  location?: Location;
}

const galleryItems = [
  {
    id: 1,
    title: "Wall Transformation",
    category: "Interior",
    before: "/before_pics/wall_before1.png",
    after: "/after_pics/wall_after1.png",
  },
  {
    id: 2,
    title: "Door Refinish",
    category: "Interior",
    before: "/before_pics/door_before1.png",
    after: "/after_pics/door_after1.png",
  },
  {
    id: 3,
    title: "Deck Restoration",
    category: "Exterior",
    before: "/before_pics/deck-before.png",
    after: "/after_pics/deck_after.png",
  },
  {
    id: 4,
    title: "Roof Repaint",
    category: "Exterior",
    before: "/before_pics/roof-before.png",
    after: "/after_pics/roof-after.png",
  },
];

export function Gallery({ location }: GalleryProps) {
  const title = location
    ? replaceLocationPlaceholders(galleryContent.titleWithCity, location)
    : galleryContent.title;

  return (
    <Section background="light" id="gallery">
      <GalleryAnimations />
      <SectionHeader
        eyebrow="03 — Selected work"
        title={title}
        subtitle="Drag each frame to see the same surface before and after."
      />
      <div className="grid gap-10 sm:grid-cols-2 lg:gap-14">
        {galleryItems.map((item) => (
          <BeforeAfterCard
            key={item.id}
            title={item.title}
            category={item.category}
            beforeImage={item.before}
            afterImage={item.after}
          />
        ))}
      </div>
    </Section>
  );
}
