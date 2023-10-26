import { Item } from "./item.model";

export interface Auction{
    item: Item,
    itemId: string,
    id: number,
    userEmail: String,
    startDate: Date,
    endDate: Date,
    price: number,
}

export interface Auctions{
    totalItems: number,
    auctionDTOList: Array<Auction>,
}
