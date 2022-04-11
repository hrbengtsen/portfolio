import {
  Container,
  Flex,
  Heading,
  Text,
  Badge,
  Section,
  keyframes,
} from "@styple/design-system";
import Image from "next/image";
import { enterAndStagger } from "../lib/animations";

export default function Arcade() {
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
        <Badge>Opening soon</Badge>
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
            the top of the leaderboards! Check back soon.
          </Text>
        </Flex>
        <Section
          css={{ position: "relative", overflow: "hidden", py: "150px" }}
        >
          <Container
            className={enterAndStagger()}
            css={{
              position: "absolute",
              left: "-32px",
              top: "0",
            }}
          >
            <Image
              src="/cube.png"
              width="200px"
              height="200px"
              layout="intrinsic"
            />
          </Container>
          <Container
            className={enterAndStagger()}
            css={{
              $$stagger: 1,
              position: "absolute",
              left: "128px",
              top: "128px",
            }}
          >
            <Image
              src="/dice.png"
              width="200px"
              height="200px"
              layout="intrinsic"
            />
          </Container>
          <Container
            className={enterAndStagger()}
            css={{
              $$stagger: 2,
              position: "absolute",
              right: "-32px",
              top: "0",
            }}
          >
            <Image
              src="/ring.png"
              width="200px"
              height="200px"
              layout="intrinsic"
            />
          </Container>
        </Section>
      </Container>
    </>
  );
}
