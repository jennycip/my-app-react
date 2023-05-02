//https://www.youtube.com/watch?v=zM_ZiSl2n2E
import React, { useState } from 'react';


const State: React.FC = () => {

  const [arr, setArr] = useState<number[]>([]);
  const [name, setName] = useState<string>('');
  return (
    <div>
        <div>
            <button onClick={() => setArr([...arr, arr.length + 1])}>
                Add to array
                {JSON.stringify(arr)}
            </button>

            <button onClick={() => setName("Jenny")}>
                Add to array
                {JSON.stringify(name)}
            </button>

        </div>
    </div>    

  );
}
    

export default State;