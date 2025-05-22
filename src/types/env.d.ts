/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface BlogPostComment {
  author: string;
  text: string;
  timestamp: string; // ISO string or other date string format
}
