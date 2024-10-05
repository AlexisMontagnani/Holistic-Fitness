"use client";
import { useState } from "react";
import Index from '../rendering/Index';
export default function IndexLogic() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleClick = (id) => {
    setActiveQuestion((prevActive) => (prevActive === id ? null : id));
  };
  return (
    <Index handleClick={handleClick} activeQuestion={activeQuestion}/>
  )
}
