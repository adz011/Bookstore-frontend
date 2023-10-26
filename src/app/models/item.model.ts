import { Author } from "./author.model";
import { Category } from "./category.model";
import { ImageLinks } from "./imageLinks.model";

export interface Item{
    itemType: string,
    title: string,
    publisher: string,
    authors: Array<Author>,
    publishedDate: string,
    description: string,
    pageCount: number,
    category: Array<Category>,
    imageLinks: ImageLinks,
    language: string,
    id: string
}