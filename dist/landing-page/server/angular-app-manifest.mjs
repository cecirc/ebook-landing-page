
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 15433, hash: '7a5b07dfab0d73b834c30e111bc130715fb5427cc6b5ab4d8ecd105666a77dbb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14212, hash: 'c42c1ca65527c7b3e121145a0213ef093df602cb6ada7825d7a74d41bb498cc7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 51717, hash: '24758abbba9c40d174f5b86c61b7586179ec4b301cb8ea669391924f8dde2cb4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-HYLYC7BG.css': {size: 23970, hash: '/mxzt7z15Lg', text: () => import('./assets-chunks/styles-HYLYC7BG_css.mjs').then(m => m.default)}
  },
};
