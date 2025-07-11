
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ebook-landing-page/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ebook-landing-page"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 15452, hash: '9bf0e6555095a3f48bd07f35098ef14bcded67256c7916c4edfd56ba3de9c5f1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14231, hash: '996f1ee07371072a0e4876e92d6425f6c447339bb6bbceabdc070f5b70d42c92', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 51343, hash: '34f2b192b7c180950fc9d1a4109fe2852fed5c0b0a50d5429c9fcf13f1c954be', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-2ITY3OI6.css': {size: 23628, hash: 'aTgJo0QJGXs', text: () => import('./assets-chunks/styles-2ITY3OI6_css.mjs').then(m => m.default)}
  },
};
