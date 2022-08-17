import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, skipWhile, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { List } from '../interfaces/listData';

@Injectable({
  providedIn: 'root',
})
export class TblColServicesService {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:3000';
  getTblData() {
    return this.http.get(`${this.baseUrl}/gettblname`).pipe(
      map((response: []) =>
        response.map((item: List) => {
          return { description: item.description, id: item.id + 100000 };
        })
      )
    );
  }

  getColData(id) {
    const query = id ? `?tblId=${id - 100000}` : ``;
    return this.http.get(`${this.baseUrl}/getcolname/${query}`).pipe(
      map((response: []) => {
        return response.map((item: List) => {
          return {
            id: item.id.map((i) => i + 200000),
            description: item.description,
          };
        });
      })
    );
  }
}
