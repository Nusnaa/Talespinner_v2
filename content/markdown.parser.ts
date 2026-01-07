import { marked } from 'marked';

marked.setOptions({
  gfm: true,
  breaks: false,
});

export async function parseMarkdown(markdown: string): Promise<string> {
  return await marked.parse(markdown);
}
