import { SidebarNav } from "@/components/layout/sidebar-nav";
import { SiteHeader } from "@/components/layout/site-header";

const sidebarNavItems = [
  {
    title: "Getting Started",
    href: "/docs",
    section: "Introduction",
  },
  {
    title: "Installation",
    href: "/docs/installation",
  },
  {
    title: "Basic Usage",
    href: "/docs/usage",
  },
  {
    title: "Markdown Features",
    href: "/docs/markdown-features",
    section: "Features",
  },
  {
    title: "LaTeX Support",
    href: "/docs/latex-support",
  },
  {
    title: "Syntax Highlighting",
    href: "/docs/syntax-highlighting",
  },
  {
    title: "Theme Customization",
    href: "/docs/themes",
    section: "Customization",
  },
  {
    title: "Style Configuration",
    href: "/docs/style-configuration",
  },
  
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen  flex-col">
      <SiteHeader />
      <div className="container flex-1">
        <div className="flex flex-col md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
          <aside className="fixed top-16 z-30 hidden h-[calc(100vh-4rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-2 md:sticky md:block lg:py-10">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <main className="relative py-6 lg:py-10">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
