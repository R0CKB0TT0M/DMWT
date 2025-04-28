'use client';

import React, { useState } from 'react';

export default function CommentForm({ onCommentSubmit }: { onCommentSubmit: (comment: string) => void }) {
  const [comment, setComment] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (comment.trim()) {
      onCommentSubmit(comment);  // Submit the comment to the parent component
      setComment('');  // Clear the form input
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write a comment"
        name="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
