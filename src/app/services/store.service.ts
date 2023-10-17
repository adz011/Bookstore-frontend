import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auction } from '../models/auction.model';


const STORE_BASE_URL = 'https://localhost:8443/api/v1/auctions'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient : HttpClient) { }

  getItems(limit ='12', sort='descending'): Observable<Array<Auction>>{
    return this.httpClient.get<Array<Auction>>(
      `${STORE_BASE_URL}?limit=${limit}&sort=${sort}`
    )
  }
}
