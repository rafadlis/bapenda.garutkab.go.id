import { LogIn, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          aria-label="Beranda BAPENDA Garut"
          className="flex items-center gap-3"
          href="/"
        >
          <Shield aria-hidden="true" className="size-5 text-primary" />
          <span className="font-semibold text-base leading-tight">
            Badan Pendapatan Daerah
          </span>
          <span className="hidden text-muted-foreground text-sm sm:inline">
            Kabupaten Garut
          </span>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                aria-label="Beranda"
                className="px-3 py-2"
                href="/"
              >
                Beranda
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                aria-label="Fitur"
                className="px-3 py-2"
                href="/fitur"
              >
                Fitur
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                aria-label="Perubahan"
                className="px-3 py-2"
                href="/perubahan"
              >
                Perubahan
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Button asChild size="sm">
            <Link aria-label="Masuk ke aplikasi" href="/masuk">
              <LogIn aria-hidden="true" />
              Masuk
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
