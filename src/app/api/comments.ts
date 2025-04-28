// File: pages/api/comments.ts
import { neon } from '@neondatabase/serverless';

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const comment = req.body.get('comment');
    
    if (!comment) {
      return res.status(400).json({ error: 'Comment is required' });
    }

    try {
      await sql.query("INSERT INTO comments (comment) VALUES ($1)", [comment]);
      return res.status(200).json({ message: 'Comment submitted successfully' });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to insert comment' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
