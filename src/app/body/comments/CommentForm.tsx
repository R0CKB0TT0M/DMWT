'use client'; // This is important for client-side rendering

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

      // Check if the response is OK (status code 200-299)
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Failed to submit comment:', errorData);
        return;
      }

      // Parse the successful response (it should be valid JSON)
      const data = await response.json();
      console.log('Comment submitted successfully:', data);
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
