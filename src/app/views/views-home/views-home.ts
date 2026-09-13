import { Component } from '@angular/core';
import { Divider } from '../../shared/divider/divider';
import { Statistics } from '../statistics/statistics';
import { ItemList } from '../item-list/item-list';
@Component({
  imports: [Divider, Statistics, ItemList],
  selector: 'app-views-home',
  styleUrl: './views-home.css',
  templateUrl: './views-home.html',
})
export class ViewsHome {
   stats: Array<{ value: number; label: string }> = [
    { value: 22, label: '# of Users' },
    { value: 900, label: 'Revenue' },
    { value: 50, label: 'Reviews' }
  ];

    items = [
      {
        image: '/couch.jpeg',
        title: 'Couch',
        description: 'A comfortable place to sit and relax.',
      },
      {
        image: '/dresser.jpeg',
        title: 'Dresser',
        description: 'A place to store your clothes and belongings  .',
      }
    ]
}
