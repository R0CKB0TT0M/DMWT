// File: app/CommentForm.tsx
'use client'; // This is important to indicate it's a client-side component

import React from 'react';

export default function CommentForm() {
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

      const data = await response.json();

      if (response.ok) {
        console.log('Comment submitted:', data);
        // Optionally, clear the form or show a success message
      } else {
        console.error('Failed to submit comment:', data);
      }
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
