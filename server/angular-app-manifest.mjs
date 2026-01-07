
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
      "chunk-TCARPNO4.js",
      "chunk-5YMXIVRQ.js"
    ],
    "route": "/Talespinner_v2/overview"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ST5S6EIP.js",
      "chunk-5YMXIVRQ.js"
    ],
    "route": "/Talespinner_v2/skills/melee/armour"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 685, hash: '1dc0bff429f7dd3f6c827eb3a41d780b940f57cf94fc4ad627bdf5a257606171', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1041, hash: '6edcc5f4129f3d6f0282f5b882c972506991fb61fa29a71baeeb91fae2781a3c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'overview/index.html': {size: 2222, hash: '346d1edf05bee568b60178fb2f7706091d65009d9e63f2970c48ad3be8a41fa0', text: () => import('./assets-chunks/overview_index_html.mjs').then(m => m.default)},
    'skills/melee/armour/index.html': {size: 1365, hash: '3fdb0597358d2b49e55a07ff0daaaa7309cdd9883fa80e03ef75912fc5e52f02', text: () => import('./assets-chunks/skills_melee_armour_index_html.mjs').then(m => m.default)},
    'styles-I5LFCG6J.css': {size: 486, hash: 'ZTCL7/r0pls', text: () => import('./assets-chunks/styles-I5LFCG6J_css.mjs').then(m => m.default)}
  },
};
