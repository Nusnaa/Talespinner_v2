import { marked } from 'marked';

marked.setOptions({
  gfm: true,
  breaks: false,
});

function joinWithPrefix(prefix: string, url: string) {
  // normalize url (remove leading slash)
  const u = url.replace(/^\/+/, '');

  // relative base (./ or ./some/)
  if (prefix.startsWith('.')) {
    const p = prefix.endsWith('/') ? prefix : prefix + '/';
    return `${p}${u}`; // e.g. ./images/foo.png
  }

  // absolute base (e.g. /RepoName or /RepoName/)
  let p = prefix;
  // ensure leading slash
  if (!p.startsWith('/')) p = '/' + p;
  // strip trailing slashes
  p = p.replace(/\/+$/, '');
  return `${p}/${u}`; // e.g. /RepoName/images/foo.png
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

  // Rewrite markdown links that start with a leading slash (but are not images)
  const fixedLinks = fixed.replace(/\[([^\]]+)\]\((\/(?!images\/)[^)]+)\)/g, (_m, text, url) => {
    const newUrl = joinWithPrefix(prefix, url);
    return `[${text}](${newUrl})`;
  });

  const html = await marked.parse(fixedLinks);

  // Also rewrite any remaining HTML attributes referencing /images/... (e.g. <img src="/images/..">)
  let final = html.replace(/(src|href)=("|')\/(images\/[^"']+)("|')/g, (_m, attr, q, url) => {
    const newUrl = joinWithPrefix(prefix, `/${url}`);
    return `${attr}=${q}${newUrl}${q}`;
  });

  // Rewrite any src/href that still begins with a leading slash but is not already
  // prefixed with the base href — this catches other absolute links.
  const prefixNoSlash = prefix.startsWith('/') ? prefix.slice(1) : prefix;
  try {
    const attrRegex = new RegExp(`(src|href)=("|')\/((?!${prefixNoSlash}).+?)("|')`, 'g');
    final = final.replace(attrRegex, (_m, attr, q, url) => {
      const newUrl = joinWithPrefix(prefix, `/${url}`);
      return `${attr}=${q}${newUrl}${q}`;
    });
  } catch (e) {
    // If regex construction fails for any reason, leave `final` as-is.
  }

  return final;
}
