// File: pages/api/comments.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { neon } from '@neondatabase/serverless';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const dbUrl = process.env.DATABASE_URL;
  
  if (!dbUrl) {
    return res.status(500).json({ error: 'Database connection string not set' });
  }

  const sql = neon(dbUrl);
  if (req.method === 'POST') {
    try {
      const { subscribtion } = req.body;

      if (!subscribtion) {
        return res.status(400).json({ error: 'Subscriber is required' });
      }

      // Insert the new comment into the database
      await sql.query('INSERT INTO subscribers (subscriber) VALUES ($1)', [subscribtion]);

      res.status(201).json({ message: 'Subscription added successfully' });
    } catch (error) {
      console.error('Error adding Subscription:', error);
      res.status(500).json({ error: 'Error adding Subscription' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
