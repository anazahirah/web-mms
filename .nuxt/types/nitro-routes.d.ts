// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
    '/__site-config__/debug.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-site-config/dist/runtime/nitro/routes/__site-config__/debug').default>>>>
    }
    '/robots.txt': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/robots/dist/runtime/nitro/server/robots-txt').default>>>>
    }
    '/__robots__/nuxt-content.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/robots/dist/runtime/nitro/server/__robots__/nuxt-content').default>>>>
    }
    '/__robots__/debug.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/robots/dist/runtime/nitro/server/__robots__/debug').default>>>>
    }
    '/__robots__/debug-path.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/robots/dist/runtime/nitro/server/__robots__/debug-path').default>>>>
    }
    '/__sitemap__/nuxt-content-urls.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/sitemap/dist/runtime/nitro/routes/__sitemap__/nuxt-content-urls').default>>>>
    }
    '/__sitemap__/debug.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/sitemap/dist/runtime/nitro/routes/__sitemap__/debug').default>>>>
    }
    '/__sitemap__/style.xsl': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/sitemap/dist/runtime/nitro/routes/sitemap.xsl').default>>>>
    }
    '/sitemap.xml': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/sitemap/dist/runtime/nitro/routes/sitemap.xml').default>>>>
    }
    '/__og-image__/font/**': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-og-image/dist/runtime/nitro/routes/font').default>>>>
    }
    '/__og-image__/debug.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-og-image/dist/runtime/nitro/routes/debug.json').default>>>>
    }
    '/__og-image__/image/**': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-og-image/dist/runtime/nitro/routes/image').default>>>>
    }
    '/__schema-org__/debug.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-schema-org/dist/runtime/nitro/routes/__schema-org__/debug').default>>>>
    }
    '/__link-checker__/inspect': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-link-checker/dist/runtime/nitro/routes/__link-checker__/inspect').default>>>>
    }
    '/__link-checker__/links': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-link-checker/dist/runtime/nitro/routes/__link-checker__/links').default>>>>
    }
    '/__link-checker__/debug.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-link-checker/dist/runtime/nitro/routes/__link-checker__/debug').default>>>>
    }
    '/api/_content/query/:qid/**:params': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/query').default>>>>
    }
    '/api/_content/query/:qid': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/query').default>>>>
    }
    '/api/_content/query': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/query').default>>>>
    }
    '/api/_content/cache.json': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/cache').default>>>>
    }
    '/api/_content/navigation/:qid/**:params': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/navigation').default>>>>
    }
    '/api/_content/navigation/:qid': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/navigation').default>>>>
    }
    '/api/_content/navigation': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/navigation').default>>>>
    }
    '/_ipx/**': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/image/dist/runtime/ipx').default>>>>
    }
  }
}
export {}