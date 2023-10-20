import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auction } from '../models/auction.model';


const STORE_BASE_URL = 'http://localhost:8443/api/v1/auctions/price'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient : HttpClient) { }

  getItems(sort = 'descending', pageIndex = 0, pageSize=12): Observable<Array<Auction>>{
    return this.httpClient.get<Array<Auction>>(
      `${STORE_BASE_URL}/${sort}?page=${pageIndex+1}&pageSize=${pageSize}`
    )
  }
}
