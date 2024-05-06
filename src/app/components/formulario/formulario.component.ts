import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Component,Output, EventEmitter } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';

import { Mascotas } from "../../models/mascotas.model"
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [MatCardModule,
            MatButtonModule,
            MatFormFieldModule, 
            MatInputModule,
            MatIconModule,
            MatSelectModule,
            MatRadioModule,
            ReactiveFormsModule
          ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  nombre = new FormControl();
  tipo   = new FormControl();
  id = 1;

  @Output() newItemEvent = new EventEmitter<Mascotas>();
  constructor(private share: SharedService) {}

  

  addItem(){
    const nombre = this.nombre.value;
      const tipo = this.tipo.value;
      // this.newItemEvent.emit(new Mascotas(this.id ++, nombre ,tipo));
      this.share.addMascota(new Mascotas(this.id ++, nombre ,tipo));
  }
}


