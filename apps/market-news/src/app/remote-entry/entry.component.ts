import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockRowComponent } from '@angular-monorepo-stock/ui';
import { NewsService } from '@angular-monorepo-stock/shared-data';

interface News {
  id: number;
  title:string,
  date:string,
  time:string,
  location:string;
  tickers:string[],
  des:string
}

@Component({
  standalone: true,
  imports: [CommonModule, StockRowComponent],
  providers: [NewsService],
  selector: 'app-market-news-entry',
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.scss',
})
export class RemoteEntryComponent {
  newsArticles: News[] = [];
  constructor(private newsService: NewsService) {
    this.newsArticles = this.newsService.newsArticles();
  }
}
