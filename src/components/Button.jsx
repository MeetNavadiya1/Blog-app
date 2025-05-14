import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-green-600',
    textColor = 'text-black',
    className = '',
    ...props
}) {
  return (
    <button 
    className={`px-4 py-2 rounded-lg bg-indigo-500 ${bgColor} ${textColor} ${className}`}
    type={`${type}`}
    {...props}
    >
        {children}
    </button>
  )
}

export default Button