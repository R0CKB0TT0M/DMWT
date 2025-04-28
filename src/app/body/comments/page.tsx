'use client'; // Ensure this component runs on the client-side

import { useState, useEffect } from 'react';
import { neon } from '@neondatabase/serverless';
import CommentForm from './CommentForm';

export default function Page() {
  const [comments, setComments] = useState<{ comment: string }[]>([]);

  // Fetch the comments from the database
  const fetchComments = async () => {
    const sql = neon(`${process.env.DATABASE_URL}`);
    try {
      const result = await sql.query('SELECT comment FROM comments');

      // Type assertion here to ensure TypeScript treats the result as { comment: string }[]
      const commentsData = result as { comment: string }[];

      setComments(commentsData); // Update the state with fetched comments
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  // Fetch comments when the component mounts
  useEffect(() => {
    fetchComments();
  }, []);  // Empty dependency array makes sure this only runs once when the component mounts

  // Function to trigger a refetch when a new comment is added
  const handleNewComment = () => {
    fetchComments();  // Refetch the comments after a new one is submitted
  };

  return (
    <div>
      <h1>Comments</h1>
      <CommentForm onCommentSubmit={handleNewComment} />  {/* Pass refetch function */}
      <div id="comments">
        {comments.length > 0 ? (
          comments.map((row, index) => <p key={index}>{row.comment}</p>)  // Render each comment
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
}
