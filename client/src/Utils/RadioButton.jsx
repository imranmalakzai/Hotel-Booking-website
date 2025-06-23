import React from 'react'

function RadioButton({label, selected = false, onChange = () => {}}) {
  return (
  <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm' htmlFor="">
    <input name='sortOptions' type="radio" checked={selected} onChange={() => label} />
    <span className='font-light select-none'>
      {label}
    </span>
  </label>
  )
}

export default RadioButton