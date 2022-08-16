import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, skipWhile, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface GraphData {
  id: number;
  description: string;
  parent: number;
  link: number;
}

@Injectable({
  providedIn: 'root',
})
export class GraphServicesService {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:3000';

  getGraph(value) {
    const tblId = value.table;
    const colId = value.column;
    const query = colId
      ? `?colId=${colId.map((col) => col - 200000)}`
      : `?tblId=${tblId - 100000}`;
    return this.http.get(`${this.baseUrl}/getlinktbl/${query}`).pipe(
      map((response: []) => {
        return response.map((item: GraphData) => {
          let addId, addParent;
          if (!item.parent) {
            addId = 100000;
            addParent = null;
          } else if (!item.link) {
            addId = 200000;
            addParent = 100000;
          } else {
            addId = 300000;
            addParent = 200000;
          }
          return {
            key: item.id + addId,
            name: item.description,
            parent: item.parent + addParent,
            id: item.id + addId,
            link: item.link,
            parentId: item.parent + addParent,
            pathClicked: false,
          };
        });
      })
    );
  }

  deleteLink(value) {
    const link = value;
    console.log(link);
    return this.http
      .delete(`${this.baseUrl}/dellink/` + link)
      .subscribe((res) => console.log(res));
  }
}
