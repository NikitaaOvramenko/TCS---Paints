import { Section, SectionHeader } from "@/components/ui";
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
    ? `Our Work in ${location.cityName}`
    : "Our Recent Work";

  return (
    <Section background="gray" id="gallery">
      <GalleryAnimations />
      <SectionHeader
        title={title}
        className="self-center"
        subtitle="Browse our portfolio of completed projects."
      />
      <div className="grid gap-6 sm:grid-cols-2">
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
