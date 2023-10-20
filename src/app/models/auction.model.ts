import { Item } from "./item.model";

export interface Auction{
    item: Item,
    itemId: String,
    id: number,
    userEmail: String,
    startDate: Date,
    endDate: Date,
    price: number,
    totalItems: number,
}
