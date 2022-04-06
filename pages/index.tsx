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
import { Link } from "../components/Link";
import NextLink from "next/link";
import { useTheme } from "next-themes";
import { ArrowBigRight, ArrowUpRight } from "lucide-react";
import { useMounted } from "@styple/hooks";
import Image from "next/image";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) return null;

  return (
    <Container>
      <Container
        css={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: "320px",
          overflow: "hidden",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          style={{ minWidth: "1440px" }}
        >
          <path
            fill={resolvedTheme === "dark" ? "#000000" : "#FFFFFF"}
            fillOpacity="1"
            d="M0,160L48,154.7C96,149,192,139,288,154.7C384,171,480,213,576,229.3C672,245,768,235,864,197.3C960,160,1056,96,1152,74.7C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </Container>
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
              fontWeight: "$black",
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
            <Heading as="h3" css={{ fontWeight: "$black" }}>
              My projects
            </Heading>
            <Grid
              css={{
                gridTemplateRows: "200px 200px",
                gridTemplateColumns: "1fr",
                "@bp2": {
                  gridTemplateRows: "200px",
                  gridTemplateColumns: "1fr 1fr",
                },
                gap: "$xl",
              }}
            >
              <NextLink href="/projects/styple" passHref>
                <Card as="a" interactive>
                  <Container
                    css={{
                      width: "100%",
                      height: "100%",
                      p: "40px",
                    }}
                  >
                    <Container
                      css={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <Image
                        src="/styple.svg"
                        layout="fill"
                        objectFit="scale-down"
                      />
                    </Container>
                  </Container>
                  <Text>
                    An accessible design system for React{" "}
                    <ArrowUpRight size={16} />
                  </Text>
                </Card>
              </NextLink>
              <NextLink href="/projects/bitetap" passHref>
                <Card as="a" interactive>
                  <Container
                    css={{
                      width: "100%",
                      height: "100%",
                      p: "40px",
                    }}
                  >
                    <Container
                      css={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <Image
                        src="/bitetap.svg"
                        layout="fill"
                        objectFit="scale-down"
                      />
                    </Container>
                  </Container>
                  <Text>
                    A tool for your recipes and mealplans{" "}
                    <ArrowUpRight size={16} />
                  </Text>
                </Card>
              </NextLink>
            </Grid>
            <Container css={{ textAlign: "center" }}>
              <Link
                href="/projects"
                css={{
                  "& svg": {
                    transition: "$transform",
                  },
                  "&:hover svg": {
                    transform: "translateX(4px)",
                  },
                }}
              >
                Explore all my projects{" "}
                <ArrowBigRight size={20} style={{ verticalAlign: "middle" }} />
              </Link>
            </Container>
          </Flex>
          <Flex
            css={{
              flexDirection: "column",
              gap: "$xl",
            }}
          >
            <Heading as="h3" css={{ fontWeight: "$black" }}>
              Currently
            </Heading>

            <Text css={{ fontSize: "$md" }}>
              Finishing up my Computer Science bachelor by{" "}
              <Link href="https://github.com/hrbengtsen/open-vote-network">
                implementing the open vote network on the Concordium blockchain
              </Link>
              .
            </Text>
            <Text css={{ fontSize: "$md" }}>
              Building on the web with modern technologies such as TypeScript
              and React. Excited about UX/DX and design systems.
            </Text>
            <Text css={{ fontSize: "$md" }}>
              Looking for meaningful and flexible work, where I can get
              responsibility and make an impact.
            </Text>
          </Flex>
          <Flex
            css={{
              flexDirection: "column",
              gap: "$xl",
            }}
          >
            <Heading as="h3" css={{ fontWeight: "$black" }}>
              Get in touch?
            </Heading>

            <Text css={{ fontSize: "$md" }}>
              You can reach me at{" "}
              <Link href="mailto:mikkelbengtsen@gmail.com">
                mikkelbengtsen@gmail.com
              </Link>
              .
            </Text>
          </Flex>

          <Text css={{ textAlign: "center", color: "$text300", mb: "$xl" }}>
            made with ✨ and 💻 in Denmark
          </Text>
        </Flex>
      </Container>
    </Container>
  );
}
