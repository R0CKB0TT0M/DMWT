// File: pages/api/comments.ts
import { neon } from '@neondatabase/serverless';

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const { comment } = req.body;

    if (!comment) {
      return res.status(400).json({ error: 'Comment is required' });
    }

    try {
      // Insert the comment into the database
      await sql.query("INSERT INTO comments (comment) VALUES ($1)", [comment]);
      
      // Send a JSON response upon success
      return res.status(200).json({ message: 'Comment submitted successfully' });
    } catch (error) {
      console.error('Error inserting comment:', error);
      
      // Send an error response in case of failure
      return res.status(500).json({ error: 'Failed to insert comment', details: error.message });
    }
  } else {
    // Handle method not allowed
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
