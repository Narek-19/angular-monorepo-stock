import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '@angular-monorepo-stock/shared-data';

interface News {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  tickers: string[];
  des: string;
}

@Component({
  standalone: true,
  imports: [CommonModule],
  providers: [NewsService],
  selector: 'app-article-details-entry',
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.scss',
})
export class RemoteEntryComponent implements OnInit {
  article: News | undefined;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.article = this.newsService.getNewsById(id);
    }
  }

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}
}
