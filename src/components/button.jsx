import React from 'react'
import { twMerge } from 'tailwind-merge'

const Button = ({ children, className, onClick, disabled }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={twMerge("px-4 py-2 border-2 border-foreground font-semibold rounded-md", className)}>
            {children}
        </button>
    )
}

export default Button