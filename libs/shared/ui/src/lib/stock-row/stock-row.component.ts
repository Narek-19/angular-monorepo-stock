import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-stock-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-row.component.html',
  styleUrl: './stock-row.component.css',
})
export class StockRowComponent {
  @Input() label="";
}
