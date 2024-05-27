import React from 'react';

const Loading: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-48">
            <div role="progressbar" className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    );
};

export default Loading;
