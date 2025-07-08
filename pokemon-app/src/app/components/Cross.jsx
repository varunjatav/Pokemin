import React from 'react'

const Cross = ({emptyInput}) => {
  return (
    <button onClick={emptyInput}> 
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="black"
    className="size-3 cursor-pointer"
  >
    <path
     strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
  </button>
  )
}

export default Cross