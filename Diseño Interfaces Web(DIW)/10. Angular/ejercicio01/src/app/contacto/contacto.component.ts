import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent{

  contacto : String = "┬íContacto!"
  nombre : String = "Nombre : Alberto";
  correo : String = "Correo : gallardo.alb.1998@gmail.com";
}
