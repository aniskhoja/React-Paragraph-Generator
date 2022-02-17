import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(null);

  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (count <= 0) {
     const totalParagraph = data.join("|").split("|", 1)
      setText(totalParagraph)
    } else {
       const totalParagraph = data.join("|").split("|", count)
      setText(totalParagraph)
    }
  }
  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor="amount">
          paragraphs:
        </label>
        <input type="number" name="amount" id="amount"
          value={count} onChange={(e) => setCount(e.target.value)} />
        <button type="submit" className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        {text && text.map((p, index) => <p key={index}>{p}</p>)}
      </article>
  </section>
    )
}

export default App;
