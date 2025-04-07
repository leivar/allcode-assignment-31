import useForm from "../hooks/UseForm";
import { useState } from "react";

export default function HardForm(){

  const [error, setError] = useState();
  const [myForm, setMyForm] = useState({
    name: null,
    age: null,
    picture: null,
    tos: false,
    errorField: null,
    errorMessage: null
  });

  return(
    <form 
    className="flex-rows m-2 p-2" 
    id='hard-form' 
    onSubmit={e => setMyForm(useForm(myForm,'submit', e))}>
      <p id='hard-form-title' className="text-2xl" >Hard Form</p>
      <label>What is your name?
        <input 
          className="flex border-1 mb-2"
          onChange={(e) => setMyForm(useForm(myForm, 'name', e))}
        />
      {myForm.errorField === 'name'?
      <p className="p-2 bg-red-500 w-[12rem]">{myForm.errorMessage}</p>:null}
      </label>
      <label>What is your age?
        <input 
        className="flex border-1 mb-2"
        onChange={e => setMyForm(useForm(myForm, 'age', e))}
        />
      {myForm.errorField === 'age'?
      <p className="p-2 bg-red-500 w-[12rem]">{myForm.errorMessage}</p>:null}
      </label>
      <label>Please provide a profile picture
        <input 
        type="file" 
        className="flex mb-2" 
        onChange={e => setMyForm(useForm(myForm, 'picture', e))}
        />
      {myForm.errorField === 'picture'?
      <p className="p-2 bg-red-500 w-[12rem]">{myForm.errorMessage}</p>:null}
      </label>
      <label>Have you read the terms of agreement?
        <input 
        type="checkbox" 
        className="flex mb-2"
        onChange={e => setMyForm(useForm(myForm, 'tos',e))}
        />
      {myForm.errorField === 'tos'?
      <p className="p-2 bg-red-500 w-[12rem]">{myForm.errorMessage}</p>:null}
      </label>
      {myForm.errorField === 'submit'?
      <p className="p-2 bg-red-500 w-[12rem]">{myForm.errorMessage}</p>:null}
      <input 
      type="submit" 
      value='Submit' 
      className='bg-green-500 hover:bg-green-400 p-1 border-1 mt-2' 
      />
    </form>
  )
}