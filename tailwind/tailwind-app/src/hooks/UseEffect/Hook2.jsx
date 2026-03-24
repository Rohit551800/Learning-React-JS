import React, { useEffect, useState } from 'react'
import Section from '../../utility/Section'
import Button from '../../utility/Button';

const Hook2 = () => {

  const [count, setCount] = useState(0);
  const [text, setText] = useState("Click button to generate sentence");

  // Increment
  const inc = () => {
    setCount(prev => prev + 1);
  }

  // Decrement
  const dec = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  }

  // Random sentence generator
  const change = () => {
  const words = [
    "lorem", "ipsum", "dolor", "sit", "amet",
    "consectetur", "adipisicing", "elit",
    "sed", "do", "eiusmod", "tempor",
    "incididunt", "ut", "labore", "et",
    "dolore", "magna", "aliqua"
  ];

  let sentence = "";
  const length = Math.floor(Math.random() * 8) + 5; // 5 to 12 words

  for (let i = 0; i < length; i++) {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    sentence += randomWord + " ";
  }

  // Capitalize first letter + add full stop
  sentence = sentence.trim();
  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1) + ".";

  setText(sentence);
};

  // Runs only once (mount)
  useEffect(() => {
    console.log("Component Mounted");
  }, [])

  // Runs on count change
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count])

  return (
    <Section>
      <div>
        <h1 className='text-6xl text-white'>
          Lorem ipsum dolor sit amet.
        </h1>

        {/* Counter */}
        <p className='text-3xl font-bold text-white'>
          Count : {count}
        </p>

        {/* Buttons */}
        <div className="flex gap-10 my-10">
          <Button
            onClick={inc}
            btn={'Inc+'}
            className="bg-green-500 text-white hover:bg-green-600"
          />

          <Button
            onClick={dec}
            btn={'Dec-'}
            className="bg-red-500 text-white hover:bg-red-600"
          />
        </div>

        {/* Random Text */}
        <p className='text-xl text-white'>{text}</p>

        <div className="mt-5">
          <Button
            onClick={change}
            btn={'Generate Text'}
            className="bg-blue-500 text-white hover:bg-blue-600"
          />
        </div>
      </div>
    </Section>
  )
}

export default Hook2;