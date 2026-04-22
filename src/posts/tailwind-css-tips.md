---
title: Tailwind CSS Tips and Tricks
date: 2024-03-10
tags: ['CSS', 'Tailwind', 'Frontend']
excerpt: Useful tips and tricks for getting the most out of Tailwind CSS in your projects.
---

# Tailwind CSS Tips and Tricks

Tailwind CSS has revolutionized the way I write CSS. Here are some tips I've learned along the way.

## Use @apply Sparingly

While `@apply` is convenient, overusing it defeats the purpose of utility-first CSS. Use it only for small, reusable patterns:

```css
.btn {
  @apply px-4 py-2 rounded-lg font-medium transition-colors;
}
```

## Leverage the Theme

Access your theme values in custom CSS:

```css
.custom-shadow {
  box-shadow: 0 0 20px theme('colors.blue.500');
}
```

## Component Patterns

Combine utilities thoughtfully for reusable components:

- **Cards**: `bg-white rounded-lg shadow-md p-6`
- **Buttons**: `px-4 py-2 rounded-lg font-medium`
- **Badges**: `px-2 py-1 text-xs rounded-full`

## Dark Mode

Tailwind makes dark mode straightforward:

```html
<div class="bg-white dark:bg-gray-900">
  <p class="text-gray-900 dark:text-white">Hello!</p>
</div>
```

Happy styling!
