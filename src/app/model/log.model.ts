
interface IQuestionChildItem {
    parentAnswer: string;
    title: string;
    type: string;
    options?: string[];
    childItems?: IQuestionChildItem[];
}

export interface IQuestionItem {
    type: string;
    title: string;
    childItems?: IQuestionChildItem[];
    options?: string[];
}

export interface IQuestions {
    patientQuestions?: IQuestionItem[];
} 