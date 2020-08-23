import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../_model/Item';
import { environment } from 'src/environments/environment';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json'
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseUrl = environment.apiUrl;

  model: any;
  constructor(private http: HttpClient) { }

  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.baseUrl + 'inventory');
  }

  addItem(fd: FormData): Observable<any> {
    return this.http.post(this.baseUrl + 'inventory/add', fd);
  }

  deleteItem(id: number) {
    return this.http.delete(this.baseUrl + 'inventory/' + id);
  }

  getItem(id: number) {
    return this.http.get<Item>(this.baseUrl + 'inventory/' + id);
  }
}
