import { Container } from "@styple/design-system";
import Image, { StaticImageData } from "next/image";
import { photosAnim } from "../lib/animations";

// Get a random number in the interval
const randomInInterval = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

type PhotoProps = {
  displayPhotoAnim: boolean;
  src: StaticImageData;
  containerWidth: string;
  imgWidth: number;
  imgHeight: number;
};

export function Photo({
  displayPhotoAnim,
  src,
  containerWidth,
  imgWidth,
  imgHeight,
}: PhotoProps) {
  const photoAnimation = displayPhotoAnim
    ? `${photosAnim} 2s forwards`
    : "none";

  return (
    <Container
      css={{
        width: containerWidth,

        "@bp4": {
          opacity: displayPhotoAnim ? 0 : 1,
          animation: photoAnimation,
          animationDelay: "500ms",
          $$translateX: `${randomInInterval(-25, 25)}%`,
          $$translateY: `${randomInInterval(-25, 25)}%`,
        },
      }}
    >
      <Image
        src={src}
        width={`${imgWidth}px`}
        height={`${imgHeight}px`}
        layout="responsive"
        placeholder="blur"
      />
    </Container>
  );
}
