import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ElementsHome } from "./elements/elements-home/elements-home";
import { CollectionsHome } from "./collections/collections-home/collections-home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ElementsHome, CollectionsHome],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('components');
}
