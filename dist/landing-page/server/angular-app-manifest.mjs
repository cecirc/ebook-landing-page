
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
    'index.csr.html': {size: 15452, hash: '0667ee8bcbc78d0a0089ddda5798fb45a54e0fedb241d546a1835511fc1479af', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14231, hash: '1144a0618d0e433de374a811af8615b973ed8de4e7b7653996b0fee86763bcc4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 51736, hash: 'eb9cfa3021db98688973c3486d758973a82e985c870a217e874ede19df9a6311', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-HYLYC7BG.css': {size: 23970, hash: '/mxzt7z15Lg', text: () => import('./assets-chunks/styles-HYLYC7BG_css.mjs').then(m => m.default)}
  },
};
