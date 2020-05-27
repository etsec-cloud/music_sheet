import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuddioService {

  url = 'https://api.audd.io/';
  apiKey = '';

  constructor(private http: HttpClient) { }

  search(query: string) {
    // Pas encore impl
    return null;
  }
}
