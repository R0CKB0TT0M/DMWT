'use client'; // Ensure it's a client-side component

import React, { useState } from 'react';

interface Comment {
  comment: string;
}

export default function CommentForm({ onCommentSubmit }: { onCommentSubmit: () => void }) {
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const comment = formData.get('comment') as string;

    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Failed to submit comment:', errorData);
        return;
      }

      const data = await response.json();
      console.log('Comment submitted successfully:', data);

      // Call the onCommentSubmit function to refetch comments after submission
      onCommentSubmit();
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Write a comment" name="comment" />
      <button type="submit">Submit</button>
    </form>
  );
}
