import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';


const STORE_BASE_URL = 'https://localhost:8443/api/v1/items'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient : HttpClient) { }

  getItems(): Observable<Array<Item>>{
    return this.httpClient.get<Array<Item>>(
      `${STORE_BASE_URL}`
    )
  }
}
