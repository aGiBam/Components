import { Component } from '@angular/core';
import { Divider } from "../../shared/divider/divider";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  imports: [Divider, RouterLink, RouterLinkActive, RouterOutlet],
  selector: 'app-tabs',
  styleUrl: './tabs.css',
  templateUrl: './tabs.html',
})
export class Tabs {}
