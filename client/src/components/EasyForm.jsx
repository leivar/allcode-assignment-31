import { useRef, useState } from 'react';

export default function easyForm() {

  const inputRef = useRef('name-input');
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');

  function handleOnChange(e) {
    console.log(e.target.id)
    switch (e.target.id){
      case 'name-input':
        setInputName(e.target.value);
        break;
      case 'age-input':
        if(!isNaN(e.target.value)){
          setInputAge(e.target.value);
        }
        break;
      default:
        null
    }
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    setInputName('');
    setInputAge('');
    inputRef.current.focus();
  }

  const myForm = () => {
    return (
      <section className='flex-rows w-[243px]'>
        <form onSubmit={e => handleOnSubmit(e)}>
          <label className='flex border-1 w-[full]'>
            <p className='flex-1'>Name:</p>
            <input
              id='name-input'
              className='flex-2'
              autoFocus
              ref={inputRef}
              value={inputName}
              onChange={(e) => handleOnChange(e)}
            />
          </label>
          <label className='flex border-1 w-[full]'>
            <p className='flex-1'>Age:</p>
            <input
              id='age-input'
              className='flex-2'
              value={inputAge}
              onChange={(e) => handleOnChange(e)}
            />
          </label>
          <button type='submit' className='bg-green-500 hover:bg-green-400 p-1 border-1'>Submit</button>
        </form>
      </section>
    )
  };

  return (
    <section className='m-2 p-2'>
      <h1 className='text-2xl'>Easy Form</h1>
      {myForm()}
    </section>
  )
};