export interface IMeta {
    title: string;
    // сделаем необязательно чтобы поле не индексировалось
    description?: string;
}