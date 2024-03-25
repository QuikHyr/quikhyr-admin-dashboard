"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/admin"
        className={cn(
          "hover:text-primary text-sm font-medium text-placeholder transition-colors",
          {
            "cursor-default text-foreground hover:text-foreground":
              pathname === "/admin",
          },
        )}
      >
        Overview
      </Link>
      <Link
        href="/admin/users"
        className={cn(
          "hover:text-primary text-sm font-medium text-placeholder transition-colors",
          {
            "cursor-default text-foreground hover:text-foreground":
              pathname === "/admin/users",
          },
        )}
      >
        Users
      </Link>
      <Link
        href="/admin/services"
        className={cn(
          "hover:text-primary text-sm font-medium text-placeholder transition-colors",
          {
            "cursor-default text-foreground hover:text-foreground":
              pathname === "/admin/services",
          },
        )}
      >
        Services
      </Link>
      <Link
        href="/admin/bookings"
        className={cn(
          "hover:text-primary text-sm font-medium text-placeholder transition-colors",
          {
            "cursor-default text-foreground hover:text-foreground":
              pathname === "/admin/bookings",
          },
        )}
      >
        Bookings
      </Link>
      <Link
        href="/admin/ratings"
        className={cn(
          "hover:text-primary text-sm font-medium text-placeholder transition-colors",
          {
            "cursor-default text-foreground hover:text-foreground":
              pathname === "/admin/ratings",
          },
        )}
      >
        Ratings
      </Link>
      <Link
        href="/admin/settings"
        className={cn(
          "hover:text-primary text-sm font-medium text-placeholder transition-colors",
          {
            "cursor-default text-foreground hover:text-foreground":
              pathname === "/admin/settings",
          },
        )}
      >
        Settings
      </Link>
    </nav>
  );
}
