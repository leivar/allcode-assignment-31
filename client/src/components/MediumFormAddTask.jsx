import { useState } from 'react';

export default function MediumFormAddTask({ onAddTask }) {
  const [content, setContent] = useState('');
  return (
    <>
      <input className='border-1 border-gray-500 p-1'
        placeholder='Add task'
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <button 
        className='w-10 bg-green-600 hover:bg-green-500 border-1 border-l-0 p-1'
        onClick={() => {
          setContent('');
          onAddTask(content);
        }}
      >Add</button>
    </>
  )
}
