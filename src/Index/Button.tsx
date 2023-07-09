import * as React from "react";
import { useGesture } from "@use-gesture/react";
import { animated, useSpring, useSprings } from "@react-spring/web";

import { globalStyles } from "./style/global";
import { styled } from "./style/stitches.config";

const BUTTON_SIZE = 56;

const COLORS = ["#007BB6", "#6441a5", "#ff0000", "#f5aa5f"];

const PATH = [
  "M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z",
  "M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z",
  "m87,125.49998l0,261.00003l338,0l0,-261.00003l-338,0zm284.7963,238.59755l-231.59259,0l0,-216.19506l231.59259,0l0,216.19506zm-175.25926,-131.46997c17.85141,0 32.33533,-13.52096 32.33533,-30.18551c0,-16.67624 -14.48393,-30.18551 -32.33533,-30.18551c-17.86393,0 -32.33533,13.52096 -32.33533,30.18551c0,16.66455 14.47141,30.18551 32.33533,30.18551zm162.75326,26.29399l-61.55356,-57.46114l-86.59059,80.83358l-23.998,-22.40248l-34.45096,32.16048l0,60.35932l206.59311,0l0,-93.48976z",
  "m255.99996,96c-96.92661,0 -175.49996,71.62652 -175.49996,159.99438c0,30.19201 9.2891,58.40793 25.2718,82.49646l-25.2718,67.36009l70.36264,-21.94956c29.3209,20.05436 65.6499,32.09863 105.13732,32.09863c96.92685,0 175.50003,-71.63822 175.50003,-160.00562s-78.57318,-159.99438 -175.50003,-159.99438zm12.31131,250.46608l-24.68476,0l0,-28.7852l24.68476,0l0,28.7852zm0,-59.52396l0,9.5215l-24.68476,0l0,-11.7188c0,-35.36562 33.1084,-40.96914 33.1084,-66.08092c0,-11.46325 -8.42365,-20.2523 -19.46763,-20.2523c-11.43382,0 -21.47366,10.24252 -21.47366,10.24252l-14.04242,-21.22885c0,0 13.84154,-17.5665 37.72062,-17.5665c22.69059,0 43.75056,17.07822 43.75056,45.85212c0.01203,40.27185 -34.91113,44.8988 -34.91113,71.23124l0.00001,0z",
];

function Button() {
  globalStyles();

  const buttonRef = React.useRef<HTMLDivElement>(null!);
  const avatarRefs = React.useRef<HTMLDivElement[]>([]);
  const avatarRefInitialPositions = React.useRef<number[]>([]);
  const containerRef = React.useRef<HTMLDivElement>(null!);

  const isVisible = React.useRef(false);

  const [{ x, y, opacity }, api] = useSpring(
    () => ({
      x: 0,
      y: 0,
      opacity: 0,
    }),
    []
  );

  const [avatarSprings, avatarApi] = useSprings(
    COLORS.length,
    (i) => ({
      y: 0,
    }),
    []
  );

  React.useLayoutEffect(() => {
    if (avatarRefInitialPositions.current.length === 0) {
      const { y: buttonY } = buttonRef.current.getBoundingClientRect();

      avatarRefInitialPositions.current = avatarRefs.current.map(
        (node) => buttonY - node.getBoundingClientRect().y
      );
    }

    avatarApi.start((i) => ({
      y: avatarRefInitialPositions.current[i],
      immediate: true,
    }));
  }, []);

  const getBounds = React.useCallback(() => {
    const { height, width } = containerRef.current.getBoundingClientRect();

    return {
      top: 0,
      left: 0,
      right: window.innerWidth - width,
      bottom: window.innerHeight - height,
    };
  }, []);

  const backgroundTimeoutRef = React.useRef<ReturnType<typeof setTimeout>>();
  const avatarTimeoutRef = React.useRef<ReturnType<typeof setTimeout>>();

  const bindGestures = useGesture(
    {
      onDrag: ({
        down,
        offset: [ox, oy],
        velocity: [vx, vy],
        direction: [dx, dy],
      }) => {
        api.start({
          x: ox,
          y: oy,
          immediate: down,
          onChange: ({ value }) => {
            const bounds = getBounds();
            if (
              !(
                value.x >= bounds.left &&
                value.x <= bounds.right &&
                value.y >= bounds.top &&
                value.y <= bounds.bottom
              )
            ) {
              api.set({
                x:
                  value.x < bounds.left
                    ? bounds.left
                    : value.x > bounds.right
                    ? bounds.right
                    : value.x,
                y:
                  value.y < bounds.top
                    ? bounds.top
                    : value.y > bounds.bottom
                    ? bounds.bottom
                    : value.y,
              });
            }
          },
          config: (key) => {
            return {
              velocity: key === "x" ? vx * dx : vy * dy,
              decay: true,
            };
          },
        });
      },
      onHover: ({ hovering }) => {
        if (hovering) {
          if (backgroundTimeoutRef.current) {
            clearTimeout(backgroundTimeoutRef.current);
          }
          if (avatarTimeoutRef.current) {
            clearTimeout(avatarTimeoutRef.current);
          }

          isVisible.current = true;

          api.start({
            opacity: 1,
          });

          avatarApi.start({
            y: 0,
          });
        } else {
          backgroundTimeoutRef.current = setTimeout(() => {
            api.start({
              opacity: 0,
            });
          }, 1000);

          avatarTimeoutRef.current = setTimeout(() => {
            avatarApi.start((i) => ({
              y: avatarRefInitialPositions.current[i],
              onRest: () => {
                isVisible.current = false;
              },
            }));
          }, 2000);
        }
      },
    },
    {
      drag: {
        from: () => [x.get(), y.get()],
        bounds: getBounds,
        rubberband: true,
      },
    }
  );

  const { onPointerEnter, onPointerLeave, onPointerDown, ...restGestures } =
    bindGestures();

  const handlePointerDown =
    (isBackground: boolean) => (e: React.PointerEvent<HTMLElement>) => {
      if (isBackground && !isVisible.current) {
        return;
      }

      if (onPointerDown) {
        onPointerDown(e);
      }
    };

  return (
    <>
      <BlurredBackground
        ref={containerRef}
        onPointerLeave={onPointerLeave}
        onPointerDown={handlePointerDown(true)}
        {...restGestures}
        style={{
          x,
          y,

          backgroundColor: opacity.to((o) => `rgba(0,0,0,${0.2 * o})`),
        }}
      >
        <GrabberButton style={{ opacity }}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 4.625C6.12132 4.625 6.625 4.12132 6.625 3.5C6.625 2.87868 6.12132 2.375 5.5 2.375C4.87868 2.375 4.375 2.87868 4.375 3.5C4.375 4.12132 4.87868 4.625 5.5 4.625ZM9.5 4.625C10.1213 4.625 10.625 4.12132 10.625 3.5C10.625 2.87868 10.1213 2.375 9.5 2.375C8.87868 2.375 8.375 2.87868 8.375 3.5C8.375 4.12132 8.87868 4.625 9.5 4.625ZM10.625 7.5C10.625 8.12132 10.1213 8.625 9.5 8.625C8.87868 8.625 8.375 8.12132 8.375 7.5C8.375 6.87868 8.87868 6.375 9.5 6.375C10.1213 6.375 10.625 6.87868 10.625 7.5ZM5.5 8.625C6.12132 8.625 6.625 8.12132 6.625 7.5C6.625 6.87868 6.12132 6.375 5.5 6.375C4.87868 6.375 4.375 6.87868 4.375 7.5C4.375 8.12132 4.87868 8.625 5.5 8.625ZM10.625 11.5C10.625 12.1213 10.1213 12.625 9.5 12.625C8.87868 12.625 8.375 12.1213 8.375 11.5C8.375 10.8787 8.87868 10.375 9.5 10.375C10.1213 10.375 10.625 10.8787 10.625 11.5ZM5.5 12.625C6.12132 12.625 6.625 12.1213 6.625 11.5C6.625 10.8787 6.12132 10.375 5.5 10.375C4.87868 10.375 4.375 10.8787 4.375 11.5C4.375 12.1213 4.87868 12.625 5.5 12.625Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </GrabberButton>
        {avatarSprings.map((springs, index) => (
          <AvatarIcon
            key={COLORS[index]}
            onClick={(event) => {
              switch (index) {
                case 0:
                  location.href =
                    "https://www.linkedin.com/in/alejandro-pulido-57a8b6268/recent-activity/all/";
                  break;
                case 1:
                  location.href =
                    "https://youtube.com/@alejandropulidoruiz9690";
                  console.log("1");
                  break;
                case 2:
                  location.href =
                    "https://youtube.com/@alejandropulidoruiz9690";
                  console.log("2");
                  break;
                case 3:
                  location.href = "mailto:alejandro.pulido.ruiz@gmail.com";
                  console.log("3");
                  break;
                default:
                  location.href = "mailto:alejandro.pulido.ruiz@gmail.com";
                  break;
              }
            }}
            css={{
              backgroundColor: COLORS[index],
            }}
            ref={(ref) => (avatarRefs.current[index] = ref!)}
            style={springs}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                fill="#1a1a1a"
                viewBox="0 0 512 512"
              >
                <rect width="512" height="512" fill="none"></rect>
                <path d={PATH[index]} />
              </svg>
            </span>
          </AvatarIcon>
        ))}
        <FloatingButton
          ref={buttonRef}
          onPointerEnter={onPointerEnter}
          onPointerDown={handlePointerDown(false)}
          {...restGestures}
          style={{
            boxShadow: opacity.to(
              (o) => `0px 3px 8px 2px rgba(0,0,0,${0.4 * 1 - o})`
            ),
          }}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="#1a1a1a"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <path d="M128,24A104,104,0,0,0,36.8,178l-8.5,29.9a16.1,16.1,0,0,0,4,15.8,15.8,15.8,0,0,0,15.7,4l30-8.5A104,104,0,1,0,128,24Zm32,128H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z"></path>
            </svg>
          </span>
        </FloatingButton>
      </BlurredBackground>
    </>
  );
}

const ImageContainer = styled("div", {
  width: "100vw",
  height: "100vh",
  zIndex: 0,

  "& > img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

const BlurredBackground = styled(animated.div, {
  position: "absolute",
  padding: 12,
  borderRadius: 8,
  display: "flex",
  flexDirection: "column",
  gap: 8,
  backdropFilter: "blur(8px)",
  alignItems: "center",
  touchAction: "none",
  zIndex: 10,
});

const GrabberButton = styled(animated.button, {
  height: 17,
  borderRadius: 8,
  backgroundColor: "#cccccc33",
  border: "none",
  mx: 8,
  mb: 4,
  width: "calc(100% - 16px)",

  "& > svg": {
    color: "white",
    transform: `rotate(90deg)`,
  },
});

const AvatarIcon = styled(animated.div, {
  width: BUTTON_SIZE,
  height: BUTTON_SIZE,
  borderRadius: "50%",
  mx: 4,
});

const FloatingButton = styled(animated.div, {
  width: BUTTON_SIZE,
  height: BUTTON_SIZE,
  borderRadius: "50%",
  border: "none",
  position: "relative",
  backgroundClip: "content-box",
  zIndex: 1,
  touchAction: "none",

  "&:focus-visible": {
    outlineOffset: 2,
    outline: "#569AFF99 auto 6px",
  },

  "& > span": {
    borderRadius: "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#fafafa",
  },
});

export default Button;
