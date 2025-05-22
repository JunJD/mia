/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface BlogPostComment {
  name: string;    // Changed from author
  comment: string; // Changed from text
  timestamp: string; // ISO string or other date string format
}
