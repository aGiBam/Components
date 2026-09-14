import { Component } from '@angular/core';
import { Divider } from '../../shared/divider/divider';
import { Modal } from '../modal/modal';
import { Accordion } from '../accordion/accordion';
@Component({
  imports: [Divider, Modal, Accordion],
  selector: 'app-modules-home',
  styleUrl: './modules-home.css',
  templateUrl: './modules-home.html',
})
export class ModulesHome {
  modelOpen = false;
  items = [
    { title:'Why is the sky blue?', content:'The sky is blue because of the way light is scattered by the atmosphere.' },
    { title:'Why is the grass green?', content:'The grass is green because of the chlorophyll in the plant cells.' },
    { title:'Why is the sun yellow?', content:'The sun appears yellow because of the way its light is scattered by the atmosphere.' }
  ]

  showModal() {
    this.modelOpen = !this.modelOpen;
  }
}
