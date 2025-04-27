import { neon } from '@neondatabase/serverless';
import { useEffect, useState } from 'react';

export default function Page() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchComments() {
      const sql = neon(`${process.env.DATABASE_URL}`);
      const result = await sql.query("SELECT comment FROM comments;");
      setComments(result.rows.map((row) => row.comment));
    }

    fetchComments();
  }, []);

  async function create(formData) {
    'use server';
    const sql = neon(`${process.env.DATABASE_URL}`);
    const comment = formData.get('comment');
    await sql.query("INSERT INTO comments (comment) VALUES ($1)", [comment]);
    fetchComments();
  }

  return (
    <div>
      <form action={create}>
        <input type="text" placeholder="Write a comment" name="comment" />
        <button type="submit">Submit</button>
      </form>
      <div id="comments">
        {comments.length > 0 ? (
          comments.map((comment, index) => <p key={index}>{comment}</p>)
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
}