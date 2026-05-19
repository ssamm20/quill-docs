# 🪶 Quill — Setup Guide for Scripta (6a0ba80ca9af2475707d6e9c)

## Step 1 — Update Document Entity Schema

In your Scripta app, update the **Document** entity to include these fields:

| Field | Type |
|---|---|
| title | string |
| content | string |
| last_edited | string |
| word_count | number |
| tags | array (string) |
| is_starred | boolean |
| folder | string |
| emoji | string |

---

## Step 2 — Deploy Backend Functions

Create these 3 functions in Scripta's function editor. Code is in the `/functions` folder of this repo.

- `saveDocument.ts`
- `getDocuments.ts`
- `deleteDocument.ts`

---

## Step 3 — Add the Frontend

Copy `document_editor.html` into your Scripta app as a page or serve it as a static file.

---

## Step 4 — Publish

Hit publish in the Scripta app builder and you're live!
