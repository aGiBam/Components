import { Component, Input } from '@angular/core';
@Component({
  imports: [],
  selector: 'app-statistics',
  styleUrl: './statistics.css',
  templateUrl: './statistics.html',
})
export class Statistics {
  @Input() data: Array<{ value: number; label: string }> = [];
}
