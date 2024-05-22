import React from 'react';

interface TextFieldProps {
    type: string;
    value: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<TextFieldProps> = ({ type, value, placeholder, onChange }) => {

    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="border border-gray-300 rounded p-2 mt-2 w-full"
        />
    );
};

export default TextField;
