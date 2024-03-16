import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = "https://localhost:44322/api/Categories/getall"

  constructor(private httpClient:HttpClient) { }
  
  getCategory():Observable<ListResponseModel<Category>> {
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl)
  }

}
