interface Video {
  video: string;
  size?: number;
}

function VideoDisplay({ video, size = 1 }: Video) {
  return (
    <>
      <div
        style={{
          margin: 15,
        }}
      >
        <iframe
          width={560 * size}
          height={315 * size}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          src={video}
        ></iframe>
      </div>
    </>
  );
}

export default VideoDisplay;
