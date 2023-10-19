import { SurveyQuestion } from "@/types";
import { useEffect, useState } from "react";

export function SurveyQuestionList(){
    const [surveyQuestions, setSurveyQuestions] = useState<SurveyQuestion[]>([])

    useEffect(() => {
        getQuestion()
    }, [])

    const getQuestion = async () => {
        const response = await fetch("/api/questions",{
            method: "GET"
        })
        const result = (await response.json()) as SurveyQuestion[]
        setSurveyQuestions(result)
    }

    const displayOptions = (question: string, group: string) => {
        return (
                <li><input type="radio" name={group} radioGroup={group}/> {question}</li>
            )
    }
    

    return(
    <div className="mx-auto mt-8 w-full max-w-4xl flex flex-col gap-10">
        {surveyQuestions.map((question) => (
                    <section className="flex gap-2 flex-col">
                        <h3 className={`text-2xl ${question.isRequired ? "text-red-400" : ""}`}>
                            {question.question}{question.isRequired ? " * Required" : ""}
                        </h3>
                        <h4 className="text-sm italic">Hint: {question.subtitle}</h4>
                        <ul>
                            {question.options.map((option) => displayOptions(option, question.id))}
                        </ul>
                    </section>
        ))}
    </div>
    )
}