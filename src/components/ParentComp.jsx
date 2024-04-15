import React, { useState } from 'react'

const ParentComp = ({ title, inputType, required, disable, inputStyle, placeholder }) => {

    const [input, setInput] = useState('')


    const handleInputChange = (e) => {
        if (input === 'checkbox') {
            setInput(e.target.checked)
        }
        setInput(e.target.value)
    }
    return (
        <div className='flex gap-2 items-center'>
            <label className='text-sm'>{title}</label>
            <input 
                className={`${inputStyle === 'md' ? 'p-2 w-40' : 'p-2 border rounded-md'} ${inputStyle === 'lg' ? 'p-2 w-60' : 'p-2 border rounded-md'}`}
                type={inputType.toLowerCase()}
                value={input}
                onChange={handleInputChange}
                required={required}
                disabled={disable}
                placeholder={placeholder}
            />
        </div>
    )
}

export default ParentComp