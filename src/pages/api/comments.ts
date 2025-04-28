// File: pages/api/comments.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { neon } from '@neondatabase/serverless';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const dbUrl = process.env.DATABASE_URL;
  
  if (!dbUrl) {
    return res.status(500).json({ error: 'Database connection string not set' });
  }

  const sql = neon(dbUrl);

  if (req.method === 'GET') {
    try {
      // Fetch comments from the database
      const result = await sql.query('SELECT comment FROM comments');
      res.status(200).json(result);  // Return comments as response
    } catch (error) {
      console.error('Error fetching comments:', error);
      res.status(500).json({ error: 'Error fetching comments' });
    }
  } else if (req.method === 'POST') {
    try {
      const { comment } = req.body;

      if (!comment) {
        return res.status(400).json({ error: 'Comment is required' });
      }

      // Insert the new comment into the database
      await sql.query('INSERT INTO comments (comment) VALUES ($1)', [comment]);

      res.status(201).json({ message: 'Comment added successfully' });
    } catch (error) {
      console.error('Error inserting comment:', error);
      res.status(500).json({ error: 'Error inserting comment' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
