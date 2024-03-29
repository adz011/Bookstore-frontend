export interface CartItem {
    name : string,
    price: number,
    quantity: number,
    id : number;
    thumbnail: string
}
export interface Cart{
    items: Array<CartItem>;
}