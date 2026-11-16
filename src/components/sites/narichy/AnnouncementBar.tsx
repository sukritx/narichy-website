import { announcementMessages } from "./data";

export function AnnouncementBar() {
  const half = Array.from({ length: 6 }, () => announcementMessages).flat();
  const track = [...half, ...half];

  return (
    <div className="boj-announcement" aria-label="ประกาศ">
      <div className="boj-announcement-track">
        {track.map((message, index) => (
          <span className="boj-announcement-item" key={`${message}-${index}`}>
            {message}
          </span>
        ))}
      </div>
    </div>
  );
}
