import { Component } from '@angular/core';
import clients from '../../../data/clients.json';
import { Client } from '../../../Models/Client';

@Component({
  selector: 'app-client-section',
  templateUrl: './client-section.component.html',
  styleUrls: ['./client-section.component.css']
})
export class ClientSectionComponent {
  clientData: Client[] = clients;
}
