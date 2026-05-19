import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await req.json().catch(() => ({}));
    const { id, title, content, word_count, tags, is_starred, folder, emoji, last_edited } = body;

    const fields = {
      title: title || 'Untitled',
      content: content || '',
      word_count: word_count || 0,
      tags: tags || [],
      is_starred: is_starred || false,
      folder: folder || '',
      emoji: emoji || '📄',
      last_edited: last_edited || new Date().toISOString(),
    };

    if (id) {
      const doc = await base44.entities.Document.update(id, fields);
      return Response.json({ ok: true, document: doc });
    } else {
      const doc = await base44.entities.Document.create(fields);
      return Response.json({ ok: true, document: doc });
    }
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});
