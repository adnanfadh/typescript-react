import React, { useRef, useState } from 'react'

interface Person {
    firstName: string;
    lastName: string;
}

interface Props{
    text: string;
    isOK? : boolean;
    i?: number;
    fn?: (bob: string) => void;
    person:Person;
    handelChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
    text: string;
}

export const TextField: React.FC<Props> = ({ handelChange }) => {
    const [count, setCount] = useState<TextNode>({ text: "hello"})
    const inputRef = useRef<HTMLInputElement>(null)
    const divRef = useRef<HTMLInputElement>(null)

  return (
    <div ref={divRef}>
        <input ref={inputRef} onChange={handelChange}/>
    </div>
  )
}
