import { Component } from '@angular/core';
import { Table } from '../table/table';
import { Divider } from '../../shared/divider/divider';
@Component({
  imports: [Table, Divider],
  selector: 'app-collections-home',
  styleUrl: './collections-home.css',
  templateUrl: './collections-home.html',
})
export class CollectionsHome {}
