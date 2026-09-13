import { Component } from '@angular/core';
import { Divider } from '../../shared/divider/divider';
import { Modal } from '../modal/modal';
@Component({
  imports: [Divider, Modal],
  selector: 'app-modules-home',
  styleUrl: './modules-home.css',
  templateUrl: './modules-home.html',
})
export class ModulesHome {
  modelOpen = false;

  showModal() {
    this.modelOpen = !this.modelOpen;
  }
}
