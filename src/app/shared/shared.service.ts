import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  news: any[] = [];
  constructor() {

   }
   LatestNews(data:any[]){
    this.news=data;
  }
  getNews(){
    return this.news;
  }
}
