// File: app/page.tsx
import { neon } from '@neondatabase/serverless';
import CommentForm from './CommentForm';

export default async function Page() {
  const sql = neon(`${process.env.DATABASE_URL}`);
  
  let comments = [];
  try {
    const result = await sql.query("SELECT comment FROM comments;");
    comments = result?.rows || [];  // Safeguard: Default to empty array if no rows are found
  } catch (error) {
    console.error('Error fetching comments:', error);
    comments = []; // In case of an error, set comments to an empty array
  }

  return (
    <div>
      <h1>Comments</h1>
      <CommentForm />
      <div id="comments">
        {comments.length > 0 ? (
          comments.map((row: any, index: number) => <p key={index}>{row.comment}</p>)
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
}
