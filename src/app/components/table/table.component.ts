import { Component } from '@angular/core';
import {FormularioComponent} from '../formulario/formulario.component';
import { Mascotas } from "../../models/mascotas.model"
import { SharedService } from '../../services/shared.service';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [FormularioComponent,MatIconModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  mascotas: Mascotas[] = [];
  constructor(private share: SharedService) {}

  addItem(newItem: Mascotas) {
    console.log("addItemTable")
    this.mascotas.push(newItem);
    console.log(this.mascotas);
  }

  ngOnInit(): void {
    this.share.curretMascota.subscribe(mascotas => {
      this.mascotas = mascotas;
      
    });
  }
}
