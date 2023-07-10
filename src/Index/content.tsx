interface Items {
  num: number;
  content: Array<string[]>;
  title: string;
  size?: number;
}

function Content({ num, content, title, size = 1 }: Items) {
  const first = content[0];

  return (
    <>
      <div
        id={"carouselDisplay" + num.toString()}
        className="carousel slide"
        style={{ margin: 15, width: 560 * size, height: 315 * size }}
      >
        <div className="carousel-indicators">
          {content.map((notUsed, index) => (
            <>
              {index === 0 ? (
                <>
                  <button
                    type="button"
                    data-bs-target={"#carouselDisplay" + num.toString()}
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    data-bs-target={"#carouselDisplay" + num.toString()}
                    data-bs-slide-to={index++}
                    aria-label={"Slide " + index.toString()}
                  ></button>
                </>
              )}
            </>
          ))}
        </div>
        <div className="carousel-inner">
          {content.map((info) => (
            <>
              {info === first ? (
                <>
                  <div className="carousel-item active">
                    <img src={info[1]} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5> {title}</h5>
                      <p>{info[0]}</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="carousel-item">
                    <img src={info[1]} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h5> {title}</h5>
                      <p>{info[0]}</p>
                    </div>
                  </div>
                </>
              )}
            </>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={"#carouselDisplay" + num.toString()}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={"#carouselDisplay" + num.toString()}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Content;
