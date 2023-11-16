import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auction, Auctions } from '../models/auction.model';


const STORE_BASE_URL = 'http://localhost:8080/api/v1'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient : HttpClient) { }

  getItems(sort = 'descending', pageIndex = 0, pageSize=12, category ='undefined'): Observable<Auctions>{
    return this.httpClient.get<Auctions>(
      `/api/v1/auctions/pageable?sort=${sort}&page=${pageIndex+1}&pageSize=${pageSize}&category=${category}`
    )
  }

  getBooksCategories():Observable<Array<string>>{
    return this.httpClient.get<Array<string>>(
      `/api/v1/items/books`
    )
  }
}
