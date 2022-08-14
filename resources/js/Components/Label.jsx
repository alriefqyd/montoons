import React from 'react';

export default function Label({ forInput, value, className, children }) {
    return (
        <label htmlFor={forInput} className={`text-base block mb-2`}>
            {value ? value : children}
        </label>
    );
}
