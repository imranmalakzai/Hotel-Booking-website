import React from 'react'

function CheckBox({label, selected = false, onChange = () => {}}) {
  return (
  <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm' htmlFor="">
    <input type="checkbox" checked={selected} onChange={(e) => onChange(e.target.checked,label)} />
    <span className='font-light select-none'>
      {label}
    </span>
  </label>
  )
}

export default CheckBox