import { NuxtModule, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["site"]?: typeof import("C:/Users/Terada/web-mms/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["robots"]?: typeof import("C:/Users/Terada/web-mms/node_modules/@nuxtjs/robots/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["sitemap"]?: typeof import("C:/Users/Terada/web-mms/node_modules/@nuxtjs/sitemap/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["ogImage"]?: typeof import("C:/Users/Terada/web-mms/node_modules/nuxt-og-image/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["schemaOrg"]?: typeof import("C:/Users/Terada/web-mms/node_modules/nuxt-schema-org/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["seoExperiments"]?: typeof import("C:/Users/Terada/web-mms/node_modules/nuxt-seo-experiments/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["linkChecker"]?: typeof import("C:/Users/Terada/web-mms/node_modules/nuxt-link-checker/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["seo"]?: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["shadcn"]?: typeof import("shadcn-nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["gsap"]?: typeof import("@hypernym/nuxt-gsap").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["lucide"]?: typeof import("nuxt-lucide-icons").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["mdc"]?: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["viewport"]?: typeof import("nuxt-viewport").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,  modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["C:/Users/Terada/web-mms/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["C:/Users/Terada/web-mms/node_modules/@nuxtjs/robots/dist/module", Exclude<NuxtConfig["robots"], boolean>] | ["C:/Users/Terada/web-mms/node_modules/@nuxtjs/sitemap/dist/module", Exclude<NuxtConfig["sitemap"], boolean>] | ["C:/Users/Terada/web-mms/node_modules/nuxt-og-image/dist/module", Exclude<NuxtConfig["ogImage"], boolean>] | ["C:/Users/Terada/web-mms/node_modules/nuxt-schema-org/dist/module", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["C:/Users/Terada/web-mms/node_modules/nuxt-seo-experiments/dist/module", Exclude<NuxtConfig["seoExperiments"], boolean>] | ["C:/Users/Terada/web-mms/node_modules/nuxt-link-checker/dist/module", Exclude<NuxtConfig["linkChecker"], boolean>] | ["@nuxtjs/seo", Exclude<NuxtConfig["seo"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["shadcn-nuxt", Exclude<NuxtConfig["shadcn"], boolean>] | ["@hypernym/nuxt-gsap", Exclude<NuxtConfig["gsap"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["nuxt-lucide-icons", Exclude<NuxtConfig["lucide"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["@nuxtjs/mdc", Exclude<NuxtConfig["mdc"], boolean>] | ["@nuxt/content", Exclude<NuxtConfig["content"], boolean>] | ["nuxt-viewport", Exclude<NuxtConfig["viewport"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["site"]?: typeof import("C:/Users/Terada/web-mms/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["robots"]?: typeof import("C:/Users/Terada/web-mms/node_modules/@nuxtjs/robots/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["sitemap"]?: typeof import("C:/Users/Terada/web-mms/node_modules/@nuxtjs/sitemap/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["ogImage"]?: typeof import("C:/Users/Terada/web-mms/node_modules/nuxt-og-image/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["schemaOrg"]?: typeof import("C:/Users/Terada/web-mms/node_modules/nuxt-schema-org/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["seoExperiments"]?: typeof import("C:/Users/Terada/web-mms/node_modules/nuxt-seo-experiments/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["linkChecker"]?: typeof import("C:/Users/Terada/web-mms/node_modules/nuxt-link-checker/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["seo"]?: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["shadcn"]?: typeof import("shadcn-nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["gsap"]?: typeof import("@hypernym/nuxt-gsap").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["lucide"]?: typeof import("nuxt-lucide-icons").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["mdc"]?: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["viewport"]?: typeof import("nuxt-viewport").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,  modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["C:/Users/Terada/web-mms/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["C:/Users/Terada/web-mms/node_modules/@nuxtjs/robots/dist/module", Exclude<NuxtConfig["robots"], boolean>] | ["C:/Users/Terada/web-mms/node_modules/@nuxtjs/sitemap/dist/module", Exclude<NuxtConfig["sitemap"], boolean>] | ["C:/Users/Terada/web-mms/node_modules/nuxt-og-image/dist/module", Exclude<NuxtConfig["ogImage"], boolean>] | ["C:/Users/Terada/web-mms/node_modules/nuxt-schema-org/dist/module", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["C:/Users/Terada/web-mms/node_modules/nuxt-seo-experiments/dist/module", Exclude<NuxtConfig["seoExperiments"], boolean>] | ["C:/Users/Terada/web-mms/node_modules/nuxt-link-checker/dist/module", Exclude<NuxtConfig["linkChecker"], boolean>] | ["@nuxtjs/seo", Exclude<NuxtConfig["seo"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["shadcn-nuxt", Exclude<NuxtConfig["shadcn"], boolean>] | ["@hypernym/nuxt-gsap", Exclude<NuxtConfig["gsap"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["nuxt-lucide-icons", Exclude<NuxtConfig["lucide"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["@nuxtjs/mdc", Exclude<NuxtConfig["mdc"], boolean>] | ["@nuxt/content", Exclude<NuxtConfig["content"], boolean>] | ["nuxt-viewport", Exclude<NuxtConfig["viewport"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },

   sitemap: {
      isI18nMapped: boolean,

      sitemapName: string,

      isMultiSitemap: boolean,

      excludeAppSources: Array<any>,

      cacheMaxAgeSeconds: number,

      autoLastmod: boolean,

      defaultSitemapsChunkSize: number,

      minify: boolean,

      sortEntries: boolean,

      debug: boolean,

      discoverImages: boolean,

      discoverVideos: boolean,

      sitemapsPathPrefix: string,

      isNuxtContentDocumentDriven: boolean,

      xsl: string,

      xslTips: boolean,

      xslColumns: Array<{

      }>,

      credits: boolean,

      version: string,

      sitemaps: {
         "sitemap.xml": {
            sitemapName: string,

            route: string,

            defaults: any,

            include: Array<any>,

            exclude: Array<string>,

            includeAppSources: boolean,
         },
      },
   },

   content: {
      cacheVersion: number,

      cacheIntegrity: string,

      transformers: Array<any>,

      base: string,

      api: {
         baseURL: string,
      },

      watch: {
         ws: {
            port: {
               port: number,

               portRange: Array<number>,
            },

            hostname: string,

            showURL: boolean,
         },
      },

      sources: any,

      ignores: Array<any>,

      locales: Array<any>,

      defaultLocale: any,

      highlight: boolean,

      markdown: {
         tags: {
            p: string,

            a: string,

            blockquote: string,

            "code-inline": string,

            code: string,

            em: string,

            h1: string,

            h2: string,

            h3: string,

            h4: string,

            h5: string,

            h6: string,

            hr: string,

            img: string,

            ul: string,

            ol: string,

            li: string,

            strong: string,

            table: string,

            thead: string,

            tbody: string,

            td: string,

            th: string,

            tr: string,
         },

         anchorLinks: {
            depth: number,

            exclude: Array<number>,
         },

         remarkPlugins: any,

         rehypePlugins: any,
      },

      yaml: any,

      csv: {
         delimeter: string,

         json: boolean,
      },

      navigation: {
         fields: Array<any>,
      },

      contentHead: boolean,

      documentDriven: boolean,

      respectPathCase: boolean,

      experimental: {
         clientDB: boolean,

         cacheContents: boolean,

         stripQueryParameters: boolean,

         advanceQuery: boolean,

         search: any,
      },
   },

   "nuxt-site-config": {
      stack: Array<{

      }>,

      version: string,

      debug: boolean,
   },

   "nuxt-robots": {
      version: string,

      usingNuxtContent: boolean,

      debug: boolean,

      credits: boolean,

      groups: Array<{

      }>,

      sitemap: Array<string>,

      header: boolean,

      robotsEnabledValue: string,

      robotsDisabledValue: string,

      cacheControl: string,
   },

   "nuxt-simple-robots": {
      version: string,

      usingNuxtContent: boolean,

      debug: boolean,

      credits: boolean,

      groups: Array<{

      }>,

      sitemap: Array<string>,

      header: boolean,

      robotsEnabledValue: string,

      robotsDisabledValue: string,

      cacheControl: string,
   },

   "nuxt-og-image": {
      version: string,

      satoriOptions: any,

      resvgOptions: any,

      sharpOptions: any,

      publicStoragePath: string,

      defaults: {
         emojis: string,

         renderer: string,

         component: string,

         extension: string,

         width: number,

         height: number,

         cacheMaxAgeSeconds: number,
      },

      debug: boolean,

      baseCacheKey: string,

      fonts: Array<{

      }>,

      hasNuxtIcon: boolean,

      colorPreference: string,

      isNuxtContentDocumentDriven: boolean,
   },
  }
  interface PublicRuntimeConfig {
   "nuxt-schema-org": {
      reactive: boolean,

      minify: boolean,

      scriptAttributes: {
         id: string,
      },

      identity: any,

      version: string,
   },

   "nuxt-link-checker": {
      version: string,

      hasSitemapModule: boolean,

      rootDir: string,

      isNuxtContentDocumentDriven: any,

      excludeLinks: Array<any>,

      skipInspections: Array<any>,

      fetchTimeout: number,

      showLiveInspections: boolean,

      fetchRemoteUrls: boolean,
   },

   "nuxt-seo": {
      canonicalQueryWhitelist: Array<string>,
   },

   mdc: {
      useNuxtImage: boolean,

      components: {
         prose: boolean,

         map: {
            p: string,

            a: string,

            blockquote: string,

            "code-inline": string,

            code: string,

            em: string,

            h1: string,

            h2: string,

            h3: string,

            h4: string,

            h5: string,

            h6: string,

            hr: string,

            img: string,

            ul: string,

            ol: string,

            li: string,

            strong: string,

            table: string,

            thead: string,

            tbody: string,

            td: string,

            th: string,

            tr: string,
         },
      },

      headings: {
         anchorLinks: {
            h1: boolean,

            h2: boolean,

            h3: boolean,

            h4: boolean,

            h5: boolean,

            h6: boolean,
         },
      },
   },

   content: {
      locales: Array<any>,

      defaultLocale: any,

      integrity: any,

      experimental: {
         stripQueryParameters: boolean,

         advanceQuery: boolean,

         clientDB: boolean,
      },

      respectPathCase: boolean,

      api: {
         baseURL: string,
      },

      navigation: {
         fields: Array<any>,
      },

      tags: {
         p: string,

         a: string,

         blockquote: string,

         "code-inline": string,

         code: string,

         em: string,

         h1: string,

         h2: string,

         h3: string,

         h4: string,

         h5: string,

         h6: string,

         hr: string,

         img: string,

         ul: string,

         ol: string,

         li: string,

         strong: string,

         table: string,

         thead: string,

         tbody: string,

         td: string,

         th: string,

         tr: string,
      },

      highlight: boolean,

      wsUrl: string,

      documentDriven: boolean,

      host: string,

      trailingSlash: boolean,

      search: any,

      contentHead: boolean,

      anchorLinks: {
         depth: number,

         exclude: Array<number>,
      },
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }