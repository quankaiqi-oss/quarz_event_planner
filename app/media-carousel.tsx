"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type MediaCarouselProps = {
  images: string[];
};

export function MediaCarousel({ images }: MediaCarouselProps) {
  const [active, setActive] = useState(0);
  const current = images[active];

  const goTo = (direction: -1 | 1) => {
    setActive((index) => (index + direction + images.length) % images.length);
  };

  return <div className="media-carousel" aria-label="Selected event photography">
    <div className="media-carousel-frame">
      <img src={current} alt={`Selected QUARZ event photography ${active + 1}`} />
      <div className="media-carousel-controls">
        <button type="button" onClick={() => goTo(-1)} aria-label="Previous photo">
          <ChevronLeft size={20} />
        </button>
        <span>{String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
        <button type="button" onClick={() => goTo(1)} aria-label="Next photo">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
    <div className="media-carousel-thumbs">
      {images.map((image, index) => (
        <button
          type="button"
          aria-label={`View photo ${index + 1}`}
          className={index === active ? "active" : ""}
          onClick={() => setActive(index)}
          key={image}
        >
          <img src={image} alt="" />
        </button>
      ))}
    </div>
  </div>;
}
