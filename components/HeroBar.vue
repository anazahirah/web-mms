<template>
  <div
    class="fixed navbar-animate top-0 left-0 right-0 max-w-[95%] mx-auto mt-4 rounded-3xl bg-[#FAD004] px-8 overflow-hidden z-10 flex justify-between items-center"
  >
    <span class="menu-animate">Mechatronic Mitra Solusi</span>
    <NavigationMenu class="menu-animate">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Our Business</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              <li v-for="component in components" :key="component.title">
                <NavigationMenuLink as-child>
                  <a
                    :href="component.href"
                    class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div class="text-sm font-medium leading-none">
                      {{ component.title }}
                    </div>
                    <p
                      class="line-clamp-2 text-sm leading-snug text-muted-foreground"
                    >
                      {{ component.description }}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/about-us"
            :class="navigationMenuTriggerStyle()"
          >
            About Us
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href="/partners"
            :class="navigationMenuTriggerStyle()"
          >
            Our Partners
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
  <div class="w-full min-h-screen overflow-clip header">
    <div
      class="w-[90%] h-full scale-150 image-container my-auto mx-auto overflow-clip rounded-3xl relative will-change-transform"
    >
      <img
        class="object-cover w-full h-full absolute left-0 top-0 image"
        src="/header.jpg"
        alt="A stair case in a building with a window above it"
      />
      <div
        class="flex flex-col gap-14 w-full items-center justify-center z-20 h-full relative text-secondary text-center"
      >
        <h1 class="text-4xl font-semibold">
          Inovasi Mekanikal & Elektrikal <br />
          Tanpa Batas.
        </h1>
        <div
          class="flex flex-col gap-1 justify-center items-center scroller-nav"
        >
          <span class="text-[8px] text-secondary">Scroll To Continue</span>
          <IconCaretDown class="size-4 animate-bounce" />
        </div>
      </div>
      <div
        class="absolute text-header left-[5%] bottom-[5%] text-2xl font-bold z-10 text-white"
      >
        Mechatronic Mitra Solusi
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Mekanikal",
    href: "/our-business/mekanikal",
    description:
      "Solusi lengkap untuk kebutuhan teknik mesin, listrik, pemeliharaan sistem, konsultasi, dan desain segel mekanis.",
  },
  {
    title: "Electrical",
    href: "/our-business/electrical",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Konsultan",
    href: "/our-business/konsultan",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Informatika",
    href: "/our-business/informatika",
    description: "Visually or semantically separates content.",
  },
];
</script>
