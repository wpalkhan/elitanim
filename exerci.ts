import React, { useEffect, useRef } from 'react';

const MyComponent = ({ model }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const height = model.component.layoutSize.get('height');
        
        if (height && containerRef.current) {
            containerRef.current.style.height = `${height}px`;
        } else {
            console.error('Height property is not defined or container reference is null');
        }
    }, [model]);

    return (
        <div ref={containerRef} id="container">
            {/* Your component content */}
        </div>
    );
};

export default MyComponent;
