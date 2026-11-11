"use client";

/* eslint-disable @next/next/no-img-element */

import { useCallback, useEffect, useRef, useState } from "react";
import { cleanBeautySlides } from "./data";

export function CleanBeauty() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [bar, setBar] = useState({ width: 100, left: 0 });

  const updateScrollbar = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    const width = max <= 0 ? 100 : (track.clientWidth / track.scrollWidth) * 100;
    const left = max <= 0 ? 0 : (track.scrollLeft / max) * (100 - width);
    setBar({ width, left });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new ResizeObserver(updateScrollbar);
    observer.observe(track);
    return () => observer.disconnect();
  }, [updateScrollbar]);

  return (
    <section className="boj-clean-beauty" aria-labelledby="boj-clean-beauty-title">
      <div className="boj-clean-inner">
        <div className="boj-clean-heading">
          <p className="boj-clean-title" id="boj-clean-beauty-title">
            Care from inside
          </p>
          <p className="boj-clean-lead">
            ธรรมชาติคือจุดเริ่มต้นของการดูแลที่อ่อนโยน
            <br className="boj-clean-lead-br" />
            นาริชชี่ดึงพลังจากธรรมชาติมาเพื่อผู้หญิงทุกคน
          </p>
        </div>

        <div className="boj-clean-desktop">
          <ul className="boj-clean-list">
            {cleanBeautySlides.map((slide) => (
              <li key={slide.title}>
                <div className="boj-clean-img">
                  <img src={slide.image} alt={slide.alt} loading="lazy" />
                </div>
                <div className="boj-clean-text">
                  <p className="boj-clean-hidden-title">{slide.title}</p>
                  <div className="boj-clean-hover">
                    <p className="boj-clean-visible-title">{slide.title}</p>
                    <p className="boj-clean-desc">
                      {slide.lines[0]}
                      <br className="boj-clean-desc-br" />
                      {slide.lines[1]}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="boj-clean-mobile">
          <div
            className="boj-clean-track"
            ref={trackRef}
            onScroll={updateScrollbar}
          >
            {cleanBeautySlides.map((slide) => (
              <article className="boj-clean-slide" key={slide.title}>
                <div className="boj-clean-img">
                  <img src={slide.image} alt={slide.alt} loading="lazy" />
                </div>
                <div className="boj-clean-text">
                  <div className="boj-clean-hover">
                    <p className="boj-clean-visible-title">{slide.title}</p>
                    <p className="boj-clean-desc">
                      {slide.lines[0]}
                      <br className="boj-clean-desc-br" />
                      {slide.lines[1]}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="boj-clean-scrollbar" aria-hidden="true">
            <div
              className="boj-clean-scrollbar-thumb"
              style={{ width: `${bar.width}%`, left: `${bar.left}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
