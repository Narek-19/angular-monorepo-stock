import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
  selector: 'lib-stock-row',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './stock-row.component.html',
  styleUrl: './stock-row.component.css',
})
export class StockRowComponent {
  @Input() newsItem!: News;
}
