export interface News {
    id: number;
    title:string,
    date:string,
    time:string,
    location:string;
    tickers:string[],
    des:string,
  }

  export interface NewsItem {
    id: number;
    title:string,
    date:string,
    time:string,
    location:string;
    tickers:string[],
    des:string,
    matchedTicker:string,
  }