import { marked } from 'marked'

function parseFrontmatter(raw) {
  const fmRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
  const match = raw.match(fmRegex)
  if (!match) return { meta: {}, content: raw }

  const fm = match[1].trim()
  const content = match[2].trim()
  const meta = {}
  fm.split('\n').forEach(line => {
    const idx = line.indexOf(':')
    if (idx === -1) return
    const key = line.slice(0, idx).trim()
    let val = line.slice(idx + 1).trim()
    if (val.startsWith('[') && val.endsWith(']')) {
      try { val = JSON.parse(val.replace(/'/g, '"')) } catch(e) { val = val.slice(1, -1).split(',').map(s=>s.trim()) }
    } else if (/^\d{4}-\d{2}-\d{2}/.test(val)) {
      val = val
    } else {
      val = val.replace(/^"|"$/g, '').replace(/^'|'$/g, '')
    }
    meta[key] = val
  })

  return { meta, content }
}

const modules = import.meta.glob('../posts/*.md', { as: 'raw', eager: true })

export function getPosts() {
  const posts = Object.entries(modules).map(([path, raw]) => {
    const slug = path.split('/').pop().replace('.md', '')
    const { meta, content } = parseFrontmatter(raw)
    const html = marked.parse(content)
    return {
      slug,
      title: meta.title || slug,
      date: meta.date || '',
      tags: meta.tags || [],
      excerpt: meta.excerpt || '',
      contentHtml: html,
    }
  })
  posts.sort((a, b) => (b.date || '').localeCompare(a.date || ''))
  return posts
}

export function getPostBySlug(slug) {
  return getPosts().find(p => p.slug === slug)
}
