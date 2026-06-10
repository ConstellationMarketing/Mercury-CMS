import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useSiteSettings } from "@site/contexts/SiteSettingsContext";

export default function Header() {
  const { settings } = useSiteSettings();

  const navItems = [...(settings.navigationItems ?? [])].sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0),
  );

  return (
    <>
      {/* Sticky crimson nav bar */}
      <div
        className="sticky top-0 z-50 w-full"
        style={{ backgroundColor: "rgb(94, 6, 14)", paddingTop: "27px", paddingBottom: "27px" }}
      >
        <div className="mx-auto w-full" style={{ maxWidth: "2560px" }}>

          {/* Desktop nav */}
          <div className="hidden lg:flex justify-center text-center">
            <div className="flex items-center">
              <nav className="flex">
                <ul
                  className="flex flex-wrap justify-center"
                  style={{ marginLeft: "-11px", marginRight: "-11px" }}
                >
                  {navItems.map((item, i) => (
                    <li
                      key={`${item.href}-${i}`}
                      className="flex"
                      style={{
                        marginTop: "8px",
                        paddingLeft: "11px",
                        paddingRight: "11px",
                        position: "relative",
                      }}
                    >
                      <Link
                        to={item.href}
                        target={item.openInNewTab ? "_blank" : undefined}
                        rel={item.openInNewTab ? "noopener noreferrer" : undefined}
                        className="font-roboto text-white uppercase hover:opacity-80 transition-opacity duration-150"
                        style={{
                          fontSize: "20px",
                          lineHeight: "14px",
                          marginLeft: "30px",
                          paddingBottom: "8px",
                        }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* Mobile nav */}
          <div className="lg:hidden flex items-center justify-between px-[5%]">
            <span className="font-roboto text-white text-[18px] uppercase tracking-wide">
              {settings.siteName || "Menu"}
            </span>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                style={{ backgroundColor: "rgb(94, 6, 14)", border: "none" }}
              >
                <nav className="flex flex-col gap-2 mt-8">
                  {navItems.map((item, i) => (
                    <MobileNavItem key={`${item.href}-${i}`} item={item} />
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </>
  );
}

interface NavItemShape {
  label: string;
  href: string;
  openInNewTab?: boolean;
  children?: NavItemShape[];
}

function MobileNavItem({ item }: { item: NavItemShape }) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <Link
        to={item.href}
        target={item.openInNewTab ? "_blank" : undefined}
        rel={item.openInNewTab ? "noopener noreferrer" : undefined}
        className="font-roboto text-white text-[18px] uppercase py-[10px] px-[5%] border-b border-white/10 hover:opacity-80 transition-opacity"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <div className="flex items-center border-b border-white/10">
        <Link
          to={item.href}
          className="font-roboto text-white text-[18px] uppercase py-[10px] px-[5%] hover:opacity-80 transition-opacity flex-1"
        >
          {item.label}
        </Link>
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="text-white/70 hover:text-white p-2 mr-2 transition-colors"
          aria-label={expanded ? "Collapse submenu" : "Expand submenu"}
        >
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      </div>
      {expanded && (
        <div className="pl-[10%] py-1">
          {item.children!.map((child, idx) => (
            <Link
              key={idx}
              to={child.href}
              target={child.openInNewTab ? "_blank" : undefined}
              rel={child.openInNewTab ? "noopener noreferrer" : undefined}
              className="block font-roboto text-[16px] text-white/80 uppercase py-[8px] hover:text-white transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
