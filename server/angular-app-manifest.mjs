
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
      "chunk-2HALSOTF.js",
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
    'index.csr.html': {size: 685, hash: '326b6d507886cfafae91d166e5078e0cf801dd84e86e53e8627f1752342eb502', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1041, hash: '3398036a15be18aba19c3af7e106de4db71e12a68a67bdd3294a4f162ab193d4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'overview/index.html': {size: 2222, hash: '418564b62a0c91ac3ee9df98972e14c1938a225f36c0d838005a6abdeb6f53c0', text: () => import('./assets-chunks/overview_index_html.mjs').then(m => m.default)},
    'skills/melee/armour/index.html': {size: 1365, hash: '351b682746c92b5af60e477bb523c3af26f489e2ae70ab2a20d27101f8c2e7c1', text: () => import('./assets-chunks/skills_melee_armour_index_html.mjs').then(m => m.default)},
    'styles-I5LFCG6J.css': {size: 486, hash: 'ZTCL7/r0pls', text: () => import('./assets-chunks/styles-I5LFCG6J_css.mjs').then(m => m.default)}
  },
};
