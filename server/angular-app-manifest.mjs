
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Talespinner_v2/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Talespinner_v2/overview",
    "route": "/Talespinner_v2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-O2QDDAM3.js",
      "chunk-5YMXIVRQ.js"
    ],
    "route": "/Talespinner_v2/overview"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZOGJL3OG.js",
      "chunk-5YMXIVRQ.js"
    ],
    "route": "/Talespinner_v2/skills/melee/armour"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 685, hash: '0344abe34fbdbaba14b2b06f96a0c4d4fec91d91654fc7155b21b0dc177d44c9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1041, hash: '24322582eb95abaeccd96adeed6281186733ea6ac2d5b15d7ba80e0bf937cade', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'overview/index.html': {size: 2222, hash: 'fc625e788dd822f8ddfcdb59273cabd9f9874fb1c6a37071dda69751e3fc8480', text: () => import('./assets-chunks/overview_index_html.mjs').then(m => m.default)},
    'skills/melee/armour/index.html': {size: 1365, hash: 'a9d1bab22a73eb89ef55c79c5ce8ef5602fe064e0e82736e711b877ad345bce6', text: () => import('./assets-chunks/skills_melee_armour_index_html.mjs').then(m => m.default)},
    'styles-I5LFCG6J.css': {size: 486, hash: 'ZTCL7/r0pls', text: () => import('./assets-chunks/styles-I5LFCG6J_css.mjs').then(m => m.default)}
  },
};
