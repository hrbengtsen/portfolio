import NextLink from "next/link";
import { Card, Flex, Text } from "@styple/design-system";
import { ArrowUpRight } from "lucide-react";

// Should either have an svg or a title
type ProjectCardProps = {
  href: string;
  svg?: React.ReactNode;
  title?: string;
  desc: string;
};

export const ProjectCard = ({ href, svg, title, desc }: ProjectCardProps) => {
  return (
    <NextLink href={href} passHref>
      <Card
        as="a"
        interactive
        css={{
          height: "100%",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {svg && !title && (
          <Flex
            css={{
              width: "100%",
              height: "100%",
              alignItems: "center",
              flexBasis: "50%",
              px: "$4xl",
              "@bp2": {
                px: "$3xl",
              },

              color: "$text200",
            }}
          >
            {svg}
          </Flex>
        )}
        {title && !svg && (
          <Text
            css={{
              textAlign: "center",
              px: "$lg",
              fontSize: "$xl",
              fontWeight: "$bold",
            }}
          >
            {title}
          </Text>
        )}
        <Text css={{ textAlign: "center", px: "$lg" }}>
          {desc} <ArrowUpRight size={16} />
        </Text>
      </Card>
    </NextLink>
  );
};
