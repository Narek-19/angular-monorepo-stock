import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { StockRowComponent } from '@angular-monorepo-stock/ui';
import { NewsService } from '@angular-monorepo-stock/shared-data';
import { News, NewsItem } from '../shared/interfaces/market-news.interface';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, StockRowComponent],
  providers:[NewsService],
  selector: 'app-symbol-news-entry',
  templateUrl: './entry-component.html',
  styleUrl: './entry-component.scss',
})
export class RemoteEntryComponent implements OnInit {
  searchBarOpen = false;
  searchControl = new FormControl();
  filteredTickersData: any[] = [];
  filteredNewsList: NewsItem[] = [];
  resentSearch: string[] = [];
  filters: string[] = [];
  newsArticles: News[] = [];


  constructor(private newsService: NewsService) {
    this.newsArticles = this.newsService.newsArticles();
  }

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(debounceTime(400))
      .subscribe((value) => {
        this.updateSearchValue(value);
      });
  }

  removeFilter(ticker: string) {
    this.filteredNewsList = this.filteredNewsList.filter(
      (item) => !item.tickers.includes(ticker)
    );
    this.filters = this.filters.filter((item) => item !== ticker);
    this.addResentFilterList(ticker);
  }

  selectResentTicker(ticker: string){
    this.searchControl.setValue(ticker);
    this.selectTicker(ticker);
  }

  addResentFilterList(ticker: string) {
    if (!this.resentSearch.includes(ticker)) {
      this.resentSearch.push(ticker);
    }
  }

  updateSearchValue(value: string) {
    if (value) {
      const searchValue = value.toLowerCase();
      this.filteredTickersData = this.newsArticles
        .filter((item) =>
          item.tickers.some((ticker) =>
            ticker.toLowerCase().startsWith(searchValue)
          )
        )
        .map((item) => {
          const matchedTicker = item.tickers.find((ticker) =>
            ticker.toLowerCase().startsWith(searchValue)
          );
          return { ...item, matchedTicker };
        });
    } else {
      this.filteredTickersData = [];
    }
  }

  selectTicker(matchedItem: string) {
    if (!this.filters.includes(matchedItem)) {
      this.searchBarOpen = false;
      this.filters.push(matchedItem);
      this.filterNewsByFilter(matchedItem);
    }
  }

  filterNewsByFilter(ticker: string) {
    const lowerTicker = ticker.toLowerCase();
    const newSearchNews = this.newsArticles
      .filter((news) =>
        news.tickers.some((item) => item.toLowerCase().startsWith(lowerTicker))
      )
      .map((news) => {
        const matchedTicker = news.tickers.find((item) =>
          item.toLowerCase().startsWith(lowerTicker)
        );
        return { ...news, matchedTicker };
      });

    this.filteredNewsList = this.getUniqueItems(
      newSearchNews,
      this.filteredNewsList
    );
  }

  getUniqueItems(newSearchNews: any, filteredNewsList: any) {
    const filteredIds = new Set(
      filteredNewsList.map((item: any) => {
        return item.id;
      })
    );
    const uniqueItems = newSearchNews.filter((item: any) => {
      return !filteredIds.has(item.id);
    });
    return [...filteredNewsList, ...uniqueItems];
  }

  toggleSearchBar() {
    this.searchBarOpen = !this.searchBarOpen;
  }
}
