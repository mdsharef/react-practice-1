import React from 'react';

const variants = {
    primary: {
        backgroundColor: '#0d6efd',
        color: '#fff',
    },
    success: {
        backgroundColor: '#198754',
        color: '#fff',
    },
    warning: {
        backgroundColor: '#dc3545',
        color: '#fff',
    },
    error: {
        backgroundColor: '#fd7e14',
        color: '#000',
    },
    info: {
        backgroundColor: '#0dcaf0',
        color: '#000',
    }
}

const sizes = {
    small: {
        padding: '0.5rem 1rem',
        fontSize: '0.9rem'
    },
    medium: {
        padding: '1rem 2rem',
        fontSize: '1rem',
    },
    large: {
        padding: '1.5rem 3rem',
        fontSize: '1.1rem'
    }
}

const Button = ({text, type, variant, size, handleClick}) => {
    const userVariant = variants[variant];
    const userSize = sizes[size];

  return (
    <button type={type} 
        style={{
            borderRadius: '0.15rem',
            border: '1px solid #000',
            letterSpacing: '1px',
            cursor: 'pointer',
            ...userVariant,
            ...userSize,
        }}
        onClick={handleClick}
    >
        {text}
    </button>
  )
}

export default Button