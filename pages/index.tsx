import {
  Container,
  Flex,
  Heading,
  Text,
  Card,
  Grid,
} from "@styple/design-system";
import {
  enterAndStagger,
  nameSlideAnim,
  contentEnterAnim,
} from "../lib/animations";
import { Header } from "../components/Header";
import NextLink from "next/link";

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
            mt: "$max",
            px: "$xl",
          }}
        >
          <Heading
            css={{
              fontWeight: "$black",
              fontSize: "$2xl",
              "@bp2": {
                fontSize: "$3xl",
              },
            }}
          >
            <Container
              as="span"
              className={enterAndStagger()}
              css={{ display: "inline-block" }}
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
          maxWidth: "$4xl",
          mx: "auto",
          mt: "320px",
          px: "$xl",
        }}
      >
        <Flex css={{ flexDirection: "column", gap: "$max" }}>
          <Text css={{ fontSize: "$md" }}>
            I'm a student, developer and designer passionate about making
            digital products and creating digital experiences.
          </Text>
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
