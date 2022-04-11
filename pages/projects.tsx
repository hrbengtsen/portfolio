import { Container, Heading, Grid } from "@styple/design-system";
import { enterAndStagger } from "../lib/animations";
import { ProjectCard } from "../components/ProjectCard";
import { StypleSVG } from "../components/svgs/StypleSVG";
import { BitetapSVG } from "../components/svgs/BitetapSVG";
import { StarterSVG } from "../components/svgs/StarterSVG";

export default function Projects() {
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
          Projects
        </Heading>
        <Grid
          css={{
            gridTemplateRows: "200px 200px 200px 200px",
            gridTemplateColumns: "1fr",
            "@bp2": {
              gridTemplateRows: "200px 200px",
              gridTemplateColumns: "1fr 1fr",
            },
            gap: "$xl",
            mt: "$xl",
          }}
        >
          <Container className={enterAndStagger()}>
            <ProjectCard
              href="https://www.styple.dev/"
              svg={<StypleSVG />}
              desc="An accessible design system for React"
            />
          </Container>

          <Container className={enterAndStagger()} css={{ $$stagger: 1 }}>
            <ProjectCard
              href="https://www.bitetap.com/"
              svg={<BitetapSVG />}
              desc="A tool for your recipes and mealplans"
            />
          </Container>

          <Container className={enterAndStagger()} css={{ $$stagger: 2 }}>
            <ProjectCard
              href="https://github.com/hrbengtsen/nextjs-styple-starter"
              svg={<StarterSVG />}
              desc="A Next.js starter template with styple"
            />
          </Container>

          <Container className={enterAndStagger()} css={{ $$stagger: 3 }}>
            <ProjectCard
              href="https://github.com/hrbengtsen/open-vote-network"
              title="Open Vote Network"
              desc="Rust smart contract on the Concordium blockchain"
            />
          </Container>
        </Grid>
      </Container>
    </>
  );
}
