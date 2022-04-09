import {
  Container,
  Flex,
  Heading,
  Text,
  Badge,
  Section,
} from "@styple/design-system";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Arcade() {
  const [displayIntroAnim, setDisplayIntroAnim] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("intro") === "true") {
      setDisplayIntroAnim(false);
    }
    sessionStorage.setItem("intro", "true");
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
          The Arcade
        </Heading>
        <Flex css={{ mt: "$xl" }}>
          <Text css={{ fontSize: "$md" }}>
            Play and unlock various minigames by exploring the site and get to
            the top of the leaderboards!
          </Text>
          <Badge>Opening soon</Badge>
        </Flex>
        <Section size="xl" css={{ position: "relative" }}>
          <Container css={{ position: "absolute", left: "-64px", top: "0" }}>
            <Image src="/cube.png" width="256px" height="256px" />
          </Container>
          <Container css={{ position: "absolute", left: "96px", top: "128px" }}>
            <Image src="/dice.png" width="256px" height="256px" />
          </Container>
          <Container css={{ position: "absolute", right: "0", top: "0" }}>
            <Image src="/ring.png" width="256px" height="256px" />
          </Container>
        </Section>
      </Container>
    </>
  );
}
