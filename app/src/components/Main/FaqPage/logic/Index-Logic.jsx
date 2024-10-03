"use client";
import { useState } from "react";
import QuesitonsRendering from '../rendering/Index';
export default function IndexLogic() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleClick = (id) => {
    setActiveQuestion((prevActive) => (prevActive === id ? null : id));
  };
  return (
    <QuesitonsRendering handleClick={handleClick} activeQuestion={activeQuestion}/>
  )
}
