import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(
    public modal: ModalService,
    public auth: AuthService,
    private afAuth: AngularFireAuth) {}

  openModal($event: Event) {
    $event.preventDefault(); // this i here in order to prevent anchor from html template to add the
    //link and do a redirect, in our case be have an diez # there
    // here we call the function in order to toggle the boolean on and off
    this.modal.toggleModal('auth');
  }

  async logout($event: Event){
    $event.preventDefault();
    await this.afAuth.signOut();
  }

}
