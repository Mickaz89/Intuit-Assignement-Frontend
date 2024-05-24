import React from 'react';

interface ErrorProps {
    error: string;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
    return (
        <div className="flex items-center justify-center h-screen text-2xl font-bold text-red-500">
            Error: {error}
        </div>
    );
};

export default Error;
