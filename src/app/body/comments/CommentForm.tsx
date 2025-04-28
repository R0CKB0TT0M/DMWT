// File: app/CommentForm.tsx
'use client';

import { useState } from 'react';

export default function CommentForm() {
  const [comment, setComment] = useState('');
  const [status, setStatus] = useState('');

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!comment.trim()) {
      return;
    }

    // Submit the comment to the server
    setStatus('Submitting...');

    try {
      const formData = new FormData();
      formData.append('comment', comment);

      const res = await fetch('/api/comments', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setComment('');
        setStatus('Comment submitted!');
      } else {
        setStatus('Failed to submit comment.');
      }
    } catch (error) {
      setStatus('An error occurred.');
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="comment"
          placeholder="Write a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
