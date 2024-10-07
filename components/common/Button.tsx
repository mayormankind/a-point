import React, { ButtonHTMLAttributes, FC } from 'react';

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: 'primary' | 'secondary' | 'danger' | 'success';
    children: React.ReactNode;
}

const Button: FC<buttonProps> = ({ variant='primary', children, ...props }) =>{

    const baseStyles = 'font-semibold py-3 px-6 rounded-lg transition duration-300';

    const variants = {
        primary: 'bg-blue-500 text-white hover:bg-blue-700 shadow-lg',
        secondary: 'bg-transparent text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500',
        danger: 'bg-red-500 text-white hover:bg-red-700 shadow-lg',
        success: 'bg-green-500 text-white hover:bg-green-700 shadow-lg',
    }

    const classes = `${baseStyles} ${variants[variant]}`
  return (
    <button className={classes} {...props}>
        {children}
    </button>
  )
}

export default Button;
