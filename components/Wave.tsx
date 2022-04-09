import { Container } from "@styple/design-system";
import { useTheme } from "next-themes";
import { useMounted } from "@styple/hooks";

export function Wave() {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) return null;

  return (
    <Container
      css={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: "320px",
        overflow: "hidden",
        zIndex: "-1",
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
  );
}
