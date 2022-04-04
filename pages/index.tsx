import {
  Container,
  Flex,
  Heading,
  Text,
  Card,
  Grid,
  Avatar,
} from "@styple/design-system";
import {
  enterAndStagger,
  nameSlideAnim,
  contentEnterAnim,
} from "../lib/animations";
import { Header } from "../components/Header";
import NextLink from "next/link";
import { ArrowBigLeft } from "lucide-react";

export default function Home() {
  return (
    <Container>
      <Header />

      <Container>
        <Flex
          css={{
            position: "absolute",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            animation: `${contentEnterAnim} 1.25s forwards`,
            animationDelay: "2.5s",
            px: "$xl",
          }}
        >
          <Heading
            css={{
              fontSize: "$2xl",
              "@bp2": {
                fontSize: "$3xl",
              },
            }}
          >
            <Container
              as="span"
              className={enterAndStagger()}
              css={{
                display: "inline-block",
                background:
                  "linear-gradient($colors$accent100A, $colors$accent200)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "$black",
              }}
            >
              Hey
            </Container>{" "}
            <Container
              as="span"
              css={{
                opacity: 0,
                animation: `${nameSlideAnim} 1s forwards`,
                animationDelay: "750ms",
                display: "inline-block",
              }}
            >
              — I'm Mikkel
            </Container>
          </Heading>
          <Heading
            as="h2"
            className={enterAndStagger()}
            css={{
              $$stagger: 9,
              fontSize: "$lg",
              fontWeight: "$semibold",
              color: "$text200",
            }}
          >
            and this is my personal slice of the web
          </Heading>
        </Flex>
      </Container>

      <Container
        as="article"
        className={enterAndStagger()}
        css={{
          $$stagger: 29,
          maxWidth: "640px",
          mx: "auto",
          mt: "320px",
          px: "$xl",
        }}
      >
        <Flex css={{ flexDirection: "column", gap: "$max" }}>
          <Container>
            <Text css={{ fontSize: "$md", mb: "$lg" }}>
              I'm a student, developer and designer passionate about making
              digital products and creating digital experiences.
            </Text>
            <Flex css={{ alignItems: "center" }}>
              <Avatar
                src="/founder.webp"
                alt="Mikkel Bengtsen on a sunny spring day with sunglasses on."
                size="xl"
              />
              <Text css={{ color: "$text300" }}>— that's me 👋</Text>
            </Flex>
          </Container>
          <Flex
            css={{
              flexDirection: "column",
              gap: "$xl",
            }}
          >
            <Heading as="h3">My projects</Heading>
            <Grid
              css={{
                gridTemplateColumns: "1fr 1fr",
                gap: "$xl",
                gridAutoRows: "200px",
              }}
            >
              <NextLink href="/work/styple" passHref>
                <Card as="a" interactive>
                  styple
                </Card>
              </NextLink>
              <NextLink href="/work/styple" passHref>
                <Card as="a" interactive>
                  Bitetap
                </Card>
              </NextLink>
            </Grid>
          </Flex>
        </Flex>
      </Container>
    </Container>
  );
}
