/* eslint-disable @next/next/no-img-element */

import { galleryImages } from "./data";

export function InstagramSection() {
  return (
    <section aria-labelledby="boj-instagram-title">
      <h2 className="boj-instagram-heading" id="boj-instagram-title">
        @beautyofjoseon
      </h2>
      <div className="boj-gallery">
        {galleryImages.map((image) => (
          <a
            key={image.src}
            href="https://www.instagram.com/beautyofjoseon_official/"
            target="_blank"
            rel="noreferrer"
            aria-label={image.alt}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
          </a>
        ))}
      </div>
    </section>
  );
}
