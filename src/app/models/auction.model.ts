import { Item } from "./item.model";

export interface Auction{
    item: Item,
    id: number,
    userEmail: String,
    startDate: Date,
    endDate: Date,
    price: number,
}
