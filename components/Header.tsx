import {
  Container,
  Navbar,
  Tooltip,
  Flex,
  Button,
  darkTheme,
} from "@styple/design-system";
import { ThemeButton } from "./ThemeButton";
import { NavLinkItem } from "./NavLinkItem";
import { openFullNav, slideRight, enterDown } from "../lib/animations";
import { Home, Disc, Lightbulb, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export function Header() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const [removeEnterAnim, setRemoveEnterAnim] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setRemoveEnterAnim(true);
    }, 29 * 120 + 500); // 29 * 120 = complete stagger + 500 for animation duration
  }, []);

  useEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <Container
      className={removeEnterAnim ? undefined : enterDown()}
      css={{
        position: "fixed",
        top: 0,
        pt: "$lg",
        width: "100%",
        zIndex: "$1",
      }}
    >
      <Navbar
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          pr: "$xl",
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
              bg: "$bg300",
              boxShadow: "$sm",
              [`.${darkTheme} &`]: {
                boxShadow: "$lg",
              },
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
              <NavLinkItem size="circle" ghost move href="/">
                <Home strokeWidth={router.pathname === "/" ? 3 : 2} />
              </NavLinkItem>
            </Tooltip>
            <Tooltip
              content={
                <>
                  <b>The Arcade</b>
                </>
              }
            >
              <NavLinkItem size="circle" ghost move href="/arcade">
                <Disc strokeWidth={router.pathname === "/arcade" ? 3 : 2} />
              </NavLinkItem>
            </Tooltip>
            <Tooltip
              content={
                <>
                  <b>Projects</b>
                </>
              }
            >
              <NavLinkItem size="circle" ghost move href="/projects">
                <Lightbulb
                  strokeWidth={router.pathname === "/projects" ? 3 : 2}
                />
              </NavLinkItem>
            </Tooltip>
            <ThemeButton />
          </Flex>
        }
        open={isOpen}
        onOpenChange={(open) => {
          setIsOpen(open);
        }}
        mobileContent={
          <Flex
            css={{
              "@bp2": {
                display: "none",
              },
              flexDirection: "column",
              gap: "$lg",
              position: "fixed",
              bg: "$bg300A",
              backdropFilter: "blur(16px)",
              animation: `${openFullNav} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
              zIndex: "$max",
              top: "0",
              left: "0",
              width: "100vw",
              height: "100vh",
              pt: "$4xl",
            }}
          >
            <Button
              ghost
              onClick={() => setIsOpen(false)}
              css={{
                position: "absolute",
                top: "$xs",
                right: "$sm",
                zIndex: "$1",
              }}
            >
              <X size={32} />
            </Button>

            <NavLinkItem
              ghost
              href="/"
              size="lg"
              css={{
                animation: `${slideRight} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
                animationFillMode: "forwards",
                willChange: "transform",
                transform: "translateX(-100%)",
                display: "flex",
                alignItems: "center",
                gap: "$md",
                fontSize: "$md",
              }}
            >
              <Home strokeWidth={router.pathname === "/" ? 3 : 2} /> Home
            </NavLinkItem>
            <NavLinkItem
              ghost
              href="/arcade"
              size="lg"
              css={{
                animation: `${slideRight} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
                animationDelay: "100ms",
                animationFillMode: "forwards",
                willChange: "transform",
                transform: "translateX(-100%)",
                display: "flex",
                alignItems: "center",
                gap: "$md",
                fontSize: "$md",
              }}
            >
              <Disc strokeWidth={router.pathname === "/arcade" ? 3 : 2} /> The
              Arcade
            </NavLinkItem>
            <NavLinkItem
              ghost
              href="/projects"
              size="lg"
              css={{
                animation: `${slideRight} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
                animationDelay: "200ms",
                animationFillMode: "forwards",
                willChange: "transform",
                transform: "translateX(-100%)",
                display: "flex",
                alignItems: "center",
                gap: "$md",
                fontSize: "$md",
              }}
            >
              <Lightbulb
                strokeWidth={router.pathname === "/projects" ? 3 : 2}
              />{" "}
              Projects
            </NavLinkItem>
            <Container
              css={{
                position: "absolute",
                bottom: "$4xl",
                left: "$md",
                zIndex: "$1",
              }}
            >
              <ThemeButton />
            </Container>
          </Flex>
        }
      />
    </Container>
  );
}
