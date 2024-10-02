"use client"; 
import { useState } from "react";
import questions from "../../../data/questions";
import TitleAndSubTitleOrtherPage from "../../UI/TitleAndSubTitle-OrtherPage";
import QuestionCard from "./Question-Card";


export default function Questions() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleClick = (id) => {
    setActiveQuestion((prevActive) => (prevActive === id ? null : id));
  };

  return (
    <section className="p-4 xl:w-4/5 mx-auto mb-10">
      <TitleAndSubTitleOrtherPage
        title={"Questions fréquentes"}
        subTitle={"Retrouvez les questions les plus fréquemment posées ici."}
      />

      {/* Itérer sur les questions */}
    <div className="flex flex-col sm:w-3/4 m-auto gap-2 sm:gap-4 lg:gap-6">

      {questions.map((question) => (
        <QuestionCard
          key={question.id}
          question={question}
          open={activeQuestion === question.id} // Vérifier si la question est active
          handleClick={() => handleClick(question.id)} // Gestion du clic
        />
      ))}
      </div>
    </section>
  );
}