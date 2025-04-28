'use client'; // This ensures the component is client-side

import { useState, useEffect } from 'react';
import CommentForm from './CommentForm';

export default function Page() {
  const [comments, setComments] = useState<{ comment: string }[]>([]);

  // Fetch comments from the server via API route
  const fetchComments = async () => {
    try {
      const response = await fetch('/api/comments');
      if (response.ok) {
        const data = await response.json();
        setComments(data);  // Update the state with fetched comments
      } else {
        console.error('Error fetching comments:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  // Fetch comments when the component mounts
  useEffect(() => {
    fetchComments();
  }, []);  // Empty dependency array ensures this only runs once when the component mounts

  // Handle new comment submission
  const handleNewComment = async (comment: string) => {
    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment }),  // Send the new comment in the request body
      });

      if (response.ok) {
        await fetchComments();  // Refetch the comments after submission
      } else {
        const data = await response.json();
        console.error('Failed to submit comment:', data.error);
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  return (
    <div>
      <h1>Comments</h1>
      <CommentForm onCommentSubmit={handleNewComment} />
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
