# 🪶 Quill — Your Writing Space

An aesthetic, cozy document editor with 25 beautiful themes, custom backgrounds, and a distraction-free writing experience.

## ✨ Features

- **25 Themes** — Light, dark, moody, cozy. Parchment, Midnight, Forest, Rose, Ocean, Lavender, Coffee, Sakura, Velvet, Galaxy, Aurora, and more.
- **Custom Background** — Upload your own image as a background with adjustable opacity.
- **Rich Text Editor** — Bold, italic, underline, headings, lists, blockquotes, tables, inline images, links, highlights.
- **Focus Mode** — Hides the sidebar and toolbar for distraction-free writing (press Esc to exit).
- **8 Editor Fonts** — Lora, Playfair Display, DM Serif, Crimson Pro, Inter, Nunito, Space Mono, Georgia.
- **Word Goal** — Set a writing target with a live progress bar.
- **Document Emoji** — Pick a custom emoji for each document.
- **Tags** — Label and organize your docs.
- **Auto-save** — Saves automatically as you type.
- **Export** — Export any document as a standalone HTML file.
- **Line Spacing & Page Width** — Compact, normal, or relaxed. Narrow, normal, or wide.
- **Paper Texture** — Optional subtle texture overlay.
- **Ambient Sounds** — Rain, fireplace, café, forest (optional).

## 🏗 Structure

```
document_editor.html   — Full frontend (single file, no build step)
functions/
  saveDocument.ts      — Create/update a document
  getDocuments.ts      — List all documents
  deleteDocument.ts    — Delete a document
entities/
  Document.json        — Document schema (title, content, emoji, tags, word_count...)
```

## 🚀 Getting Started

1. Deploy the three backend functions to your Base44 app.
2. Open `document_editor.html` in your browser (served from the same origin as the functions).
3. Start writing!

---
Made with 🪶 and Base44
