// File: app/page.tsx
import { neon } from '@neondatabase/serverless';

export default function Page() {
    const sql = neon(`${process.env.DATABASE_URL}`);
    let comment = sql.query("SELECT * FROM comments;"); 
  async function create(formData) {
    'use server';
    // Connect to the Neon database
    const sql = neon(`${process.env.DATABASE_URL}`);
    const comment = formData.get('comment');
    // Insert the comment from the form into the Postgres database
    //await sql('INSERT INTO comments (comment) VALUES ($1)', [comment]);
    //sql'INSERT INTO comments (comment) VALUES ($1)'
    await sql.query("INSERT INTO comments (comment) VALUES ($1)",[comment]);
    console.log(sql);
  }
  



  return (<div>
    <form action={create}>
      <input type="text" placeholder="write a comment" name="comment" />
      <button type="submit">Submit</button>
    </form>
    <p id="comments">{comment}</p>
    </div>
);
    }
