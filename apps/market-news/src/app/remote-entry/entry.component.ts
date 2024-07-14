import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockRowComponent } from '@angular-monorepo-stock/ui';
import { NewsService } from '@angular-monorepo-stock/shared-data';

@Component({
  standalone: true,
  imports: [CommonModule, StockRowComponent],
  providers: [NewsService],
  selector: 'app-market-news-entry',
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.scss',
})
export class RemoteEntryComponent {
  newsArticles: any[] = [];
  constructor(private newsService: NewsService) {
    this.newsArticles = this.newsService.newsArticles();
  }
}
