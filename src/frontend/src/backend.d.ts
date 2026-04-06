import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface QuizScore {
    total: bigint;
    user: string;
    score: bigint;
}
export interface ContactMessage {
    name: string;
    email: string;
    message: string;
}
export interface NewsItem {
    title: string;
    date: string;
    summary: string;
    category: string;
}
export interface QuizQuestion {
    question: string;
    correctIndex: bigint;
    explanation: string;
    options: Array<string>;
}
export interface backendInterface {
    addNewsItem(newsItem: NewsItem): Promise<bigint>;
    addQuestion(question: QuizQuestion): Promise<bigint>;
    deleteNewsItem(id: bigint): Promise<void>;
    getMessages(): Promise<Array<ContactMessage>>;
    getNewsItem(id: bigint): Promise<NewsItem>;
    getNewsItems(): Promise<Array<NewsItem>>;
    getQuestions(): Promise<Array<QuizQuestion>>;
    getScores(): Promise<Array<QuizScore>>;
    seedData(): Promise<void>;
    submitMessage(message: ContactMessage): Promise<bigint>;
    submitScore(user: string, score: bigint, total: bigint): Promise<void>;
    updateNewsItem(id: bigint, newsItem: NewsItem): Promise<void>;
}
