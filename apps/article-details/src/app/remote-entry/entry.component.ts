import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-article-details-entry',
  templateUrl:'./entry.component.html',
  styleUrl:'./entry.component.scss'
})
export class RemoteEntryComponent {}
