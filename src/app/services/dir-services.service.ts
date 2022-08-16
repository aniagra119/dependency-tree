import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, skipWhile, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface FileList {
  id: number;
  description: string;
  parent: number;
}

@Injectable({
  providedIn: 'root',
})
export class DirServicesService {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:3000';

  getPathService(value) {
    const fileId = value.id - 300000;
    const query = `?fileId=${fileId}`;
    return this.http.get(`${this.baseUrl}/getFilePath/${query}`).pipe(
      map((response: {}) => {
        return response['data'].map((item: FileList) => {
          return {
            key: item.id + 400000,
            name: item.description,
            parent: item.parent == fileId ? value.key : item.parent + 400000,
            id: item.id + 400000,
            isClicked: false,
            parentId: item.parent + 400000,
          };
        });
      })
    );
  }
}
