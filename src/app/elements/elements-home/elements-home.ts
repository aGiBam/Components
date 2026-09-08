import { Component } from '@angular/core';
import { Placeholder } from '../placeholder/placeholder';
import { Divider } from '../../shared/divider/divider';
import { Segment } from "../segment/segment";
@Component({
  imports: [Placeholder, Divider, Segment],
  selector: 'app-elements-home',
  styleUrl: './elements-home.css',
  templateUrl: './elements-home.html',
})
export class ElementsHome {}
