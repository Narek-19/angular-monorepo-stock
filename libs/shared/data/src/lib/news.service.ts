import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private _news : any[] = [
    {
      id: 0,
      title: 'J. Staut Merw Locdifer Dans',
      date: '06 MAY 2024',
      time: '11:28:10',
      location: 'BENZINGA',
      tickers: ['GOOG', 'GOOGL'],
      des: 'Some data goes here...',
    },
    {
      id: 1,
      title: 'R. Staut Yerw Locdifer Dans',
      date: '02 MAY 2024',
      time: '11:28:10',
      location: 'BENZINGA',
      tickers: ['TSLA', 'GOOGL'],
      des: 'Somer data goes here...',
    },
    {
      id: 2,
      title: 'R. Staut Yerw Locdifer Dans',
      date: '05 MAY 2022',
      time: '11:27:10',
      location: 'BENZINGA',
      tickers: ['AAPL', 'GOOGL'],
      des: 'Somer data goes here...',
    },
  ];

  newsArticles(){
    return this._news;
  }
  
  constructor() {}
}
