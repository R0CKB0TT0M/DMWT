// File: app/page.tsx
import { neon } from '@neondatabase/serverless';
import CommentForm from './CommentForm';

export default async function Page() {
  const sql = neon(`${process.env.DATABASE_URL}`);
  
  // Define the type for comments as an array of objects with a 'comment' string
  let comments: { comment: string }[] = [];

  try {
    // Fetch comments from the database
    const result = await sql.query("SELECT comment FROM comments;");
    
    // Assign the result to comments, ensuring it has the correct type
    comments = (result as { comment: string }[]) || [];  // Default to empty array if no results are found
  } catch (error) {
    console.error('Error fetching comments:', error);
    comments = [];  // In case of an error, set comments to an empty array
  }

  return (
    <div>
      <h1>Comments</h1>
      <CommentForm />
      <div id="comments">
        {comments.length > 0 ? (
          comments.map((row, index) => <p key={index}>{row.comment}</p>)
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
}
