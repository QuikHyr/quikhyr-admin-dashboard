import Image from "next/image";

import { Search } from "@/components/ui/search";
import { UserNav } from "@/components/ui/user-nav";
import { MainNav } from "@/components/ui/main-nav";

export default function PanelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-svh">
      <Image
        src="/logos/quikhyr-logo.svg"
        width={360}
        height={360}
        alt="QuikHyr Logo"
        className="mx-auto block h-svh pb-12 lg:hidden"
      />

      <div className="hidden flex-col lg:flex">
        {/* Navbar */}
        <div className="border-b">
          <div className="flex h-24 items-center px-8">
            {/* Logo */}
            <div className="h-9 w-40 border-r">
              <Image
                src="/logos/quikhyr-logo.svg"
                width={128}
                height={128}
                alt="QuikHyr Logo"
                className="-mt-12"
              />
            </div>

            {/* Main Navigation */}
            <MainNav className="mx-10" />

            {/* Search and Profile */}
            <div className="ml-auto flex items-center space-x-4">
              {/* <Search /> */}
              <UserNav />
            </div>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}
