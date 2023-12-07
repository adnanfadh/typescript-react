import React, { useState } from 'react'

const UseStateComponent = () => { 
    const [arr, arrSet] = useState<number[]>([]);
    const [name, setName] = useState<string | null>(null)
  return (
    <div>
        <div>
            <button onClick={() => arrSet([...arr, arr.length + 1])} >
                Add to Array
            </button>
            {JSON.stringify(arr)}
        </div>
        <div>
            <button onClick={() => setName("tirami")} >
                set name
            </button>
            {JSON.stringify(name)}
        </div>
    </div>
  )
}

export default UseStateComponent