export interface GlobalDataSummary{
    question ?: string,
    option1 ?: string,
    option2 ?: string,
    option3 ?: string,
    option4 ?: string,
}

export interface GlobalData{
    college?:string;
}
export interface GlobalPracticeSummary{
    id?:string,
    topic?:string;
    message?:string;
    question?:string,
    option1?:string,
    option2?:string,
    option3?:string,
    option4?:string,
    option5?:string,
    answer?:string,
}

export interface GlobalPracticeTest{
    id?:string,
    topic?:string;
    message?:string;
    question?:string,
    option1?:string,
    option2?:string,
    option3?:string,
    option4?:string,
    option5?:string,
    answer?:string,

}

export interface GlobalUserData{
    id?:string;
    firstName?:string;
    
}
