import {
  Container,
  Flex,
  Heading,
  Text,
  Grid,
  Avatar,
} from "@styple/design-system";
import {
  enterAndStagger,
  nameSlideAnim,
  contentEnterAnim,
} from "../lib/animations";
import { Link } from "../components/Link";
import { StypleSVG } from "../components/svgs/StypleSVG";
import { BitetapSVG } from "../components/svgs/BitetapSVG";
import { ProjectCard } from "../components/ProjectCard";
import { useBooleanSessionState } from "../lib/useBooleanSessionState";

export default function Home() {
  const displayIntroAnim = useBooleanSessionState("intro");

  return (
    <>
      <Container>
        <Flex
          css={{
            position: "absolute",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            top: `${displayIntroAnim ? "50%" : "96px"}`,
            left: "50%",
            transform: `translate(-50%, ${displayIntroAnim ? "-50%" : "0"})`,
            animation: `${
              displayIntroAnim ? `${contentEnterAnim} 1.25s forwards` : "none"
            }`,
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
              className={displayIntroAnim ? enterAndStagger() : undefined}
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
                opacity: `${displayIntroAnim ? 0 : 1}`,
                animation: `${
                  displayIntroAnim ? `${nameSlideAnim} 1s forwards` : "none"
                }`,
                animationDelay: "750ms",
                display: "inline-block",
              }}
            >
              — I'm Mikkel
            </Container>
          </Heading>
          <Heading
            as="h2"
            className={displayIntroAnim ? enterAndStagger() : undefined}
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
          $$stagger: displayIntroAnim ? 29 : 0,
          maxWidth: "640px",
          mx: "auto",
          mt: "320px",
          px: "$xl",
        }}
      >
        <Flex css={{ flexDirection: "column", gap: "$max" }}>
          <Container as="section">
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
            as="section"
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
              <ProjectCard
                href="https://www.styple.dev/"
                svg={<StypleSVG />}
                desc="An accessible design system for React"
              />
              <ProjectCard
                href="https://www.bitetap.com/"
                svg={<BitetapSVG />}
                desc="A tool for your recipes and mealplans"
              />
            </Grid>
            <Container css={{ textAlign: "center" }}>
              <Link href="/projects">Explore all my projects</Link>
            </Container>
          </Flex>
          <Flex
            as="section"
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
                implementing the Open Vote Network on the Concordium blockchain
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
            as="section"
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
        </Flex>
      </Container>
    </>
  );
}
