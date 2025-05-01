"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SidebarNavProps {
  items: {
    title: string;
    href: string;
    section?: string;
    items?: {
      title: string;
      href: string;
    }[];
  }[];
}

export function SidebarNav({ items }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <div className="w-full">
      {items.map((item) => (
        <div key={item.href} className="pb-4">
          {item.section && (
            <h4 className="mb-1 text-sm font-medium text-muted-foreground">
              {item.section}
            </h4>
          )}
          <div className="flex flex-col gap-1">
            {item.href ? (
              <Link
                href={item.href}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors",
                  pathname === item.href
                    ? "bg-accent text-accent-foreground font-medium"
                    : "text-muted-foreground"
                )}>
                {pathname === item.href && (
                  <motion.div
                    layoutId="sidebar-nav-indicator"
                    className="absolute left-0 w-1 h-6 bg-primary rounded-r-md"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {item.title}
              </Link>
            ) : (
              <span className="flex items-center px-3 py-2 text-sm font-medium">
                {item.title}
              </span>
            )}

            {item.items?.length && (
              <div className="pl-3 mt-1 space-y-1">
                {item.items.map((subItem) => (
                  <Link
                    key={subItem.href}
                    href={subItem.href}
                    className={cn(
                      "flex items-center px-3 py-1.5 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors",
                      pathname === subItem.href
                        ? "text-foreground font-medium"
                        : "text-muted-foreground"
                    )}>
                    {pathname === subItem.href && (
                      <motion.div
                        layoutId="sidebar-nav-subitem-indicator"
                        className="absolute left-3 w-1 h-5 bg-primary/70 rounded-r-md"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                    {subItem.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
