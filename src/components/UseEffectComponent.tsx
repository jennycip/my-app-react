import React, { useEffect, useState } from 'react';

function useEffectComponent () {

    const [val, setVal] = useState<number>(1);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setVal((v) => v + 1);
        }, 1000);
        return () => window.clearInterval(timer);
    }, []);

    return <div>{val}</div>;

}

export default useEffectComponent;