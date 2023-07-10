interface Video {
  video: string;
}

function VideoDisplay({ video }: Video) {
  var temp = 1;
  return (
    <>
      <div
        style={{
          margin: 15,
        }}
      >
        <iframe
          width={560 * temp}
          height={315 * temp}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          src={video}
        ></iframe>
      </div>
    </>
  );
}

export default VideoDisplay;
