import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(public modal: ModalService) { }

  openModal($event: Event) {
    $event.preventDefault(); // this i here in order to prevent anchor from html template to add the
    //link and do a redirect, in our case be have an diez # there
    // here we call the function in order to toggle the boolean on and off
    this.modal.toggleModal();
  }

}
