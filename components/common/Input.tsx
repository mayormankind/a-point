import React, { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    variant?: 'default' | 'outlined' | 'underlined' | 'error';
}

const Input: FC<InputProps> = ({ variant='default', ...props }) =>{

    const baseStyles = 'w-full py-3 px-4 rounded-md focus:outline-none transition duration-300';

    const variants = {
        default: 'border border-gray-300 focus:border-blue-600',
        outlined: 'border-2 border-blue-600 focus:border-blue-700',
        underlined: 'border-b-2 border-gray-300 focus:border-blue-600 rounded-none',
        error: 'border border-red-600 focus:border-red-700',
    }

    const classes = `${baseStyles} ${variants[variant]}`
  return <input className={classes} {...props}/>
}

export default Input;
