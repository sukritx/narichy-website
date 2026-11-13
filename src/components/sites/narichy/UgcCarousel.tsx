"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ugcCards } from "./data";
import {
  IconChevronLeft,
  IconChevronRight,
  IconPause,
  IconPlay,
  IconVolumeOff,
  IconVolumeOn,
} from "./icons";

const DESKTOP_BREAKPOINT = 750;
const CARD_WIDTH = 268;
const CARD_GAP = 16;

const orderedCards = [
  ugcCards[8],
  ugcCards[1],
  ugcCards[0],
  ugcCards[9],
  ugcCards[2],
  ugcCards[3],
  ugcCards[4],
  ugcCards[5],
  ugcCards[6],
  ugcCards[7],
];

export function UgcCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [paused, setPaused] = useState<Record<number, boolean>>({});
  const [muted, setMuted] = useState<Record<number, boolean>>({});
  const [active, setActive] = useState(2);
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      setViewportWidth(window.innerWidth);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (viewportWidth >= DESKTOP_BREAKPOINT) return;
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const cards = [...track.querySelectorAll<HTMLElement>(".boj-ugc-card")];
      const center = track.scrollLeft + track.clientWidth / 2;
      let closest = 0;
      let distance = Number.POSITIVE_INFINITY;
      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const nextDistance = Math.abs(cardCenter - center);
        if (nextDistance < distance) {
          distance = nextDistance;
          closest = index;
        }
      });
      setActive(closest);
    };
    const initialCard = track.querySelectorAll<HTMLElement>(".boj-ugc-card")[2];
    if (initialCard) {
      track.scrollLeft =
        initialCard.offsetLeft - (track.clientWidth - initialCard.offsetWidth) / 2;
    }
    onScroll();
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [viewportWidth]);

  useEffect(() => {
    const videos = videoRefs.current.filter(Boolean) as HTMLVideoElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.35 },
    );
    videos.forEach((video) => observer.observe(video));
    return () => observer.disconnect();
  }, []);

  const desktop = viewportWidth >= DESKTOP_BREAKPOINT;
  const viewport = Math.max(0, viewportWidth - 36);
  const pitch = CARD_WIDTH + CARD_GAP;
  const offset = viewport / 2 - CARD_WIDTH / 2 - active * pitch;

  const step = (direction: 1 | -1) => {
    if (desktop) {
      setActive((current) =>
        Math.min(orderedCards.length - 1, Math.max(0, current + direction)),
      );
      return;
    }
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".boj-ugc-card");
    const amount = (card?.offsetWidth ?? 250) + CARD_GAP;
    track.scrollBy({ left: amount * direction * 2, behavior: "smooth" });
  };

  return (
    <section className="boj-ugc" aria-label="Loved by the community videos">
      <div
        className={`boj-ugc-track${desktop ? " is-centered" : ""}`}
        ref={trackRef}
        style={desktop ? { transform: `translate3d(${offset}px, 0, 0)` } : undefined}
      >
        {orderedCards.map((card, index) => (
          <article
            className={`boj-ugc-card${index === active ? " is-active" : ""}`}
            key={`${card.video}-${index}`}
          >
            <div className={`boj-ugc-video${paused[index] ? " is-paused" : ""}`}>
              <video
                ref={(node) => {
                  videoRefs.current[index] = node;
                }}
                src={`${card.video}#t=0.1`}
                poster={card.poster}
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={`${card.productName} community video`}
                onClick={(event) => {
                  const video = event.currentTarget;
                  setActive(index);
                  if (video.paused) {
                    video.play().catch(() => {});
                    setPaused((state) => ({ ...state, [index]: false }));
                  } else {
                    video.pause();
                    setPaused((state) => ({ ...state, [index]: true }));
                  }
                }}
              />
              <div className="boj-ugc-controls">
                <button
                  type="button"
                  aria-label={(muted[index] ?? true) ? "Unmute video" : "Mute video"}
                  onClick={() => {
                    const video = videoRefs.current[index];
                    if (!video) return;
                    const nextMuted = !video.muted;
                    video.muted = nextMuted;
                    setMuted((state) => ({ ...state, [index]: nextMuted }));
                  }}
                >
                  {(muted[index] ?? true) ? <IconVolumeOff /> : <IconVolumeOn />}
                </button>
                <button
                  type="button"
                  aria-label={paused[index] ? "Play video" : "Pause video"}
                  onClick={() => {
                    const video = videoRefs.current[index];
                    if (!video) return;
                    if (video.paused) {
                      video.play().catch(() => {});
                      setPaused((state) => ({ ...state, [index]: false }));
                    } else {
                      video.pause();
                      setPaused((state) => ({ ...state, [index]: true }));
                    }
                  }}
                >
                  {paused[index] ? <IconPlay /> : <IconPause />}
                </button>
              </div>
            </div>
            <div className="boj-ugc-info">
              <div className="boj-ugc-product">
                <img className="boj-ugc-thumb" src={card.productImage} alt="" />
                <div>
                  <Link className="boj-ugc-name" href={card.href}>
                    {card.productName}
                  </Link>
                  <p className="boj-ugc-price">{card.price}</p>
                </div>
              </div>
              <Link className="boj-ugc-add" href={card.href}>
                Buy now
              </Link>
            </div>
          </article>
        ))}
      </div>
      <button
        type="button"
        className="boj-ugc-arrow prev"
        aria-label="Scroll videos left"
        onClick={() => step(-1)}
      >
        <IconChevronLeft />
      </button>
      <button
        type="button"
        className="boj-ugc-arrow next"
        aria-label="Scroll videos right"
        onClick={() => step(1)}
      >
        <IconChevronRight />
      </button>
    </section>
  );
}

