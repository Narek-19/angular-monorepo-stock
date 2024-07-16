import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockRowComponent } from '@angular-monorepo-stock/ui';
import { NewsService } from '@angular-monorepo-stock/shared-data';
import { News } from '../shared/interfaces/market-news.interface';

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
