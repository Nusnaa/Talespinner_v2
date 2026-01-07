import { marked } from 'marked';

marked.setOptions({
  gfm: true,
  breaks: false,
});

function joinWithPrefix(prefix: string, url: string) {
  // remove leading slash from url
  if (url.startsWith('/')) url = url.slice(1);
  if (prefix.endsWith('/')) return `${prefix}${url}`;
  return `${prefix}/${url}`;
}

export async function parseMarkdown(markdown: string, baseHref = './'): Promise<string> {
  let prefix = baseHref ?? './';
  // keep './' as-is, otherwise strip trailing slash
  if (!prefix.startsWith('.')) {
    prefix = prefix.endsWith('/') ? prefix.slice(0, -1) : prefix;
  }

  // Rewrite markdown image links that start with /images/... to respect baseHref
  const fixed = markdown.replace(/!\[([^\]]*)\]\((\/images\/[^)]+)\)/g, (_m, alt, url) => {
    const newUrl = joinWithPrefix(prefix, url);
    return `![${alt}](${newUrl})`;
  });

  const html = await marked.parse(fixed);

  // Also rewrite any remaining HTML attributes referencing /images/... (e.g. <img src="/images/..">)
  const final = html.replace(/(src|href)=("|')\/(images\/[^"']+)("|')/g, (_m, attr, q, url) => {
    const newUrl = joinWithPrefix(prefix, `/${url}`);
    return `${attr}=${q}${newUrl}${q}`;
  });

  return final;
}
