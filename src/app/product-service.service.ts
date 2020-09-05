import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private httpClient: HttpClient) { }

  get(link: string, ...data: any) {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`https://fakestoreapi.com/products`)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
