import React from 'react'
import ParentComp from './components/ParentComp'

const App = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Required test");
  }
  return (
    <div className='p-2'>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-4'>
        <ParentComp title={"Text"} inputType={"text"} required={true} placeholder={'Enter Your Name'} /> 

        {/* user can provide InputStyle, InputTitle, placeholder, required, disable props to component */}

        <ParentComp title={"Radio"} inputType={"radio"} disable={true} />

         {/* User can use disable prop as if the user wants the filed to be disable */}

        <ParentComp title={"Number"} inputType={"number"} inputStyle={'md'} />
        <ParentComp title={"Password"} inputType={"password"} height={'20'} inputStyle={'lg'} />
        <ParentComp title={"Checkbox"} inputType={"checkbox"} />
        <button className='px-3 py-2 bg-blue-500 text-white rounded-md w-40'>Submit</button>
      </form>
    </div>
  )
}

export default App