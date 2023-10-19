import { SurveyQuestion } from "@/types";
import { NextResponse } from "next/server";

const data: SurveyQuestion[] = [{
    id: "1",
    question: "When was Cao Cao defeated in the Battle of Red Cliffs?",
    isRequired: true,
    options: ["209", "225", "200", "263"],
    subtitle: "It occurred about 12 years before the start of the Three Kingdoms era"
},
{
    id: "2",
    question: "Which of the constituent republics was the last to declare independence from Yugoslavia?",
    isRequired: false,
    options: [
        "Bosnia and Herzegovina",
        "Montenegro",
        "Albania",
        "Croatia and Slovenia"
    ],
    subtitle: "The Federal Republic of Yugoslavia changed name in 2003 (Therefore exclude whatever happened afterwards...)"
},
{
    id: "3",
    question: "What year did Constantinople fall to the Ottoman Empire?",
    isRequired: true,
    options: [
        "1204",
        "1453",
        "1261",
        "1549"
    ],
    subtitle: "The fall of Constantinople is often marked as the end of the medieval period"
},
{
    id: "4",
    question: "When did the battle of Stalingrad FIRST take place?",
    isRequired: false,
    options: [
        "June, 1940",
        "August, 1941",
        "February, 1943",
        "August, 1942"
    ],
    subtitle: "It occured after the Second Battle of Kharkov/Kharkiv"
}]
    
export function GET(){
    return NextResponse.json(data, { status: 200})
}