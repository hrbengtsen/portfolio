import {
  Container,
  Navbar,
  Tooltip,
  Flex,
  Button,
} from "@styple/design-system";
import { ThemeButton } from "./ThemeButton";
import { NavLinkItem } from "./NavLinkItem";
import { openFullNav, slideRight, enterDown } from "../lib/animations";
import { Home, Disc, Lightbulb } from "lucide-react";

export function Header() {
  return (
    <Container
      css={{
        transform: "translateY(-48px)",
        opacity: 0,
        animation: `${enterDown} 500ms forwards`,
        animationDelay: "calc(29 * 120ms)",
        position: "fixed",
        top: "$lg",
        width: "100%",
        zIndex: "$1",
      }}
    >
      <Navbar
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          pr: "$lg",
          "@bp2": {
            justifyContent: "center",
            pr: 0,
          },
        }}
        content={
          <Flex
            css={{
              alignItems: "center",
              gap: "$md",
              bg: "$bg200",
              boxShadow: "$sm",
              borderRadius: "$pill",
              p: "$xs",
            }}
          >
            <Tooltip
              content={
                <>
                  <b>Home</b>
                </>
              }
            >
              <NavLinkItem size="circle" highlight move href="/">
                <Home />
              </NavLinkItem>
            </Tooltip>
            <Tooltip
              content={
                <>
                  <b>The Arcade</b>
                </>
              }
            >
              <NavLinkItem size="circle" highlight move href="/arcade">
                <Disc />
              </NavLinkItem>
            </Tooltip>
            <Tooltip
              content={
                <>
                  <b>Projects</b>
                </>
              }
            >
              <NavLinkItem size="circle" highlight move href="/projects">
                <Lightbulb />
              </NavLinkItem>
            </Tooltip>
            <ThemeButton />
          </Flex>
        }
        mobileContent={
          <Flex
            css={{
              "@bp2": {
                display: "none",
              },
              flexDirection: "column",
              position: "fixed",
              bg: "$bg300A",
              backdropFilter: "blur(16px)",
              animation: `${openFullNav} 200ms cubic-bezier(0.87, 0, 0.13, 1)`,
              zIndex: "$max",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
            }}
          >
            <Button>Close</Button>

            <NavLinkItem
              ghost
              href="/docs/components/navbar"
              css={{
                animation: `${slideRight} 200ms cubic-bezier(0.87, 0, 0.13, 1)`,
                animationFillMode: "forwards",
                willChange: "transform",
                visibility: "hidden",
              }}
            >
              Link 1
            </NavLinkItem>
            <NavLinkItem
              ghost
              href="/"
              css={{
                animation: `${slideRight} 200ms cubic-bezier(0.87, 0, 0.13, 1)`,
                animationDelay: "75ms",
                animationFillMode: "forwards",
                willChange: "transform",
                visibility: "hidden",
              }}
            >
              Link 2
            </NavLinkItem>
            <NavLinkItem
              ghost
              href="https://www.bitetap.com/"
              css={{
                animation: `${slideRight} 200ms cubic-bezier(0.87, 0, 0.13, 1)`,
                animationDelay: "150ms",
                animationFillMode: "forwards",
                willChange: "transform",
                visibility: "hidden",
              }}
            >
              Link 3
            </NavLinkItem>
          </Flex>
        }
      />
    </Container>
  );
}
