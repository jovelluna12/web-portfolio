<template>
  <section id="posts" class="section posts-section">
    <div class="container">
      <div class="section-header">
        <span class="section-label">Blog</span>
        <h2 class="section-title">Latest Posts</h2>
        <p class="section-subtitle">
          Thoughts, tutorials, and insights about web development
        </p>
      </div>
      
      <div v-if="posts.length" class="posts-grid">
        <article 
          v-for="(post, index) in posts" 
          :key="post.slug" 
          class="post-card card"
          :style="{ animationDelay: `${index * 0.1}s` }"
          @click="openPost(post)"
        >
          <div class="post-content">
            <div class="post-meta">
              <time v-if="post.date" class="post-date">{{ formatDate(post.date) }}</time>
              <span v-if="post.tags && post.tags.length" class="post-tags">
                <span v-for="tag in post.tags.slice(0, 2)" :key="tag" class="tag">{{ tag }}</span>
              </span>
            </div>
            
            <h3 class="post-title">{{ post.title }}</h3>
            <p class="post-excerpt">{{ post.excerpt || 'Read more about this topic...' }}</p>
            
            <span class="post-link">
              Read Article
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </span>
          </div>
        </article>
      </div>
      
      <div v-else class="empty-state">
        <div class="empty-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>
        </div>
        <h3 class="empty-title">No posts yet</h3>
        <p class="empty-description">Blog posts will appear here once added.</p>
      </div>
      
      <!-- Post Modal -->
      <Teleport to="body">
        <div v-if="selectedPost" class="post-modal" @click.self="closePost">
          <article class="post-modal-content">
            <button class="close-btn" @click="closePost" aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
            
            <header class="post-modal-header">
              <div class="post-meta">
                <time v-if="selectedPost.date" class="post-date">{{ formatDate(selectedPost.date) }}</time>
                <span v-if="selectedPost.tags && selectedPost.tags.length" class="post-tags">
                  <span v-for="tag in selectedPost.tags" :key="tag" class="tag">{{ tag }}</span>
                </span>
              </div>
              <h1 class="post-modal-title">{{ selectedPost.title }}</h1>
            </header>
            
            <div class="post-modal-body prose" v-html="selectedPost.contentHtml"></div>
          </article>
        </div>
      </Teleport>
    </div>
  </section>
</template>

<script>
import { marked } from 'marked'
import postsData from '../data/posts.json'

export default {
  name: 'PostsSection',
  data() {
    return {
      posts: [],
      selectedPost: null
    }
  },
  created() {
    this.loadPosts()
  },
  methods: {
    loadPosts() {
      this.posts = postsData.map(post => ({
        ...post,
        contentHtml: marked(post.content || '')
      })).sort((a, b) => {
        if (!a.date || !b.date) return 0
        return new Date(b.date) - new Date(a.date)
      })
    },
    formatDate(dateStr) {
      if (!dateStr) return ''
      const date = new Date(dateStr)
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      })
    },
    openPost(post) {
      this.selectedPost = post
      document.body.style.overflow = 'hidden'
    },
    closePost() {
      this.selectedPost = null
      document.body.style.overflow = ''
    }
  }
}
</script>

<style scoped>
.posts-section {
  background: linear-gradient(180deg, var(--background) 0%, rgba(24, 24, 27, 0.5) 100%);
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-label {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(59, 130, 246, 0.1);
  color: var(--accent);
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
}

.section-subtitle {
  color: var(--muted);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
  gap: 24px;
}

.post-card {
  animation: fade-in 0.6s ease-out forwards;
  opacity: 0;
  cursor: pointer;
}

.post-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.post-date {
  font-size: 0.8rem;
  color: var(--muted);
}

.post-tags {
  display: flex;
  gap: 6px;
}

.post-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--foreground);
  line-height: 1.3;
}

.post-excerpt {
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.6;
}

.post-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--accent);
  font-size: 0.875rem;
  font-weight: 500;
  margin-top: auto;
  padding-top: 8px;
  transition: gap 0.2s ease;
}

.post-card:hover .post-link {
  gap: 12px;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 60px 24px;
  background: var(--card);
  border: 1px dashed var(--card-border);
  border-radius: 12px;
}

.empty-icon {
  color: var(--muted);
  margin-bottom: 16px;
}

.empty-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.empty-description {
  color: var(--muted);
  font-size: 0.9rem;
}

/* Post Modal */
.post-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  z-index: 200;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 40px 24px;
  overflow-y: auto;
}

.post-modal-content {
  background: var(--card);
  border: 1px solid var(--card-border);
  border-radius: 16px;
  max-width: 720px;
  width: 100%;
  position: relative;
  animation: slide-up 0.3s ease-out;
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  color: var(--muted);
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.close-btn:hover {
  background: var(--card-border);
  color: var(--foreground);
}

.post-modal-header {
  padding: 40px 40px 24px;
  border-bottom: 1px solid var(--card-border);
}

.post-modal-title {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
  margin-top: 12px;
}

.post-modal-body {
  padding: 32px 40px 40px;
}

.post-modal-body :deep(h1),
.post-modal-body :deep(h2),
.post-modal-body :deep(h3) {
  margin-top: 24px;
  margin-bottom: 12px;
}

.post-modal-body :deep(p) {
  margin-bottom: 16px;
}

.post-modal-body :deep(ul),
.post-modal-body :deep(ol) {
  margin-bottom: 16px;
  padding-left: 24px;
}

.post-modal-body :deep(li) {
  margin-bottom: 8px;
  color: var(--muted);
}

.post-modal-body :deep(a) {
  color: var(--accent);
}

.post-modal-body :deep(pre) {
  background: rgba(0, 0, 0, 0.3);
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
  margin-bottom: 16px;
}

.post-modal-body :deep(code) {
  font-family: 'Fira Code', monospace;
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .posts-grid {
    grid-template-columns: 1fr;
  }
  
  .post-modal {
    padding: 20px 16px;
  }
  
  .post-modal-header,
  .post-modal-body {
    padding-left: 24px;
    padding-right: 24px;
  }
  
  .post-modal-title {
    font-size: 1.5rem;
  }
}
</style>
