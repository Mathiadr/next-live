"use client"
import { Navigation } from "@/components/Navigation";
import { SurveyQuestionList } from "@/components/SurveyQuestionList";

export default function QuestionsPage(){
    return(
        <div>
            <header>
                <Navigation />
            </header>
            <SurveyQuestionList />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-6">Submit</button>
        </div>
        
    )
}