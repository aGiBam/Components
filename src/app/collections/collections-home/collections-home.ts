import { Component } from '@angular/core';
import { Table } from '../table/table';
import { Divider } from '../../shared/divider/divider';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';
@Component({
  imports: [Table, Divider, RouterOutlet, RouterLinkActive, RouterLink ],
  selector: 'app-collections-home',
  styleUrl: './collections-home.css',
  templateUrl: './collections-home.html',
})
export class CollectionsHome {
  partOfLink = 'Some part of the link';

  data = [
    { name: 'H.Kakeh', age: 27, job: 'Senior FE Team Lead', employed: true },
    { name: 'M.Agiba', age: 26, job: 'Mid-Level FE ', employed: false },
    { name: 'Shouq', age: 25, job: 'Junior FE', employed: true },
  ];

  header = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'employed', label: 'Has a Job?' },
  ];
}
