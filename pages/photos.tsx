import { Container, Heading } from "@styple/design-system";
import { useEffect } from "react";
import { useBooleanSessionState } from "../lib/useBooleanSessionState";
import { Photo } from "../components/Photo";

import bortuBocek from "../public/photos/bortu-bocek.jpg";
import branas from "../public/photos/branas.jpg";
import koprulu from "../public/photos/koprulu.jpg";
import loroParque from "../public/photos/loro-parque.jpg";
import nusaPenida from "../public/photos/nusa-penida.jpg";
import westfield from "../public/photos/westfield.jpg";

export default function Photos() {
  const displayPhotoAnim = useBooleanSessionState("photos");

  // Remove scrollbar caused by images randomly overflowing with mount animation
  useEffect(() => {
    if (displayPhotoAnim) {
      document.body.style.overflowX = "hidden";
    }
  }, []);

  return (
    <>
      <Container
        as="article"
        css={{
          maxWidth: "640px",
          mx: "auto",
          mt: "$max",
          px: "$xl",
        }}
      >
        <Heading
          css={{
            fontSize: "$2xl",
            "@bp2": {
              fontSize: "$3xl",
            },
            fontWeight: "$black",
          }}
        >
          Photos
        </Heading>
      </Container>
      <Container
        css={{
          position: "relative",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "$xl",
          p: "$xl",
        }}
      >
        <Photo
          displayPhotoAnim={displayPhotoAnim}
          src={koprulu}
          containerWidth="400px"
          imgWidth={3000}
          imgHeight={4000}
        />

        <Photo
          displayPhotoAnim={displayPhotoAnim}
          src={branas}
          containerWidth="600px"
          imgWidth={4000}
          imgHeight={3000}
        />

        <Photo
          displayPhotoAnim={displayPhotoAnim}
          src={nusaPenida}
          containerWidth="300px"
          imgWidth={2592}
          imgHeight={4608}
        />

        <Photo
          displayPhotoAnim={displayPhotoAnim}
          src={bortuBocek}
          containerWidth="600px"
          imgWidth={4000}
          imgHeight={3000}
        />

        <Photo
          displayPhotoAnim={displayPhotoAnim}
          src={westfield}
          containerWidth="700px"
          imgWidth={4608}
          imgHeight={2592}
        />

        <Photo
          displayPhotoAnim={displayPhotoAnim}
          src={loroParque}
          containerWidth="400px"
          imgWidth={3456}
          imgHeight={4608}
        />
      </Container>
    </>
  );
}
