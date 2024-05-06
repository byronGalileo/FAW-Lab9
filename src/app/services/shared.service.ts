import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Mascotas } from "../models/mascotas.model"

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // private mascotas: Mascotas[] = [];

  private mascotas = new BehaviorSubject<Array<Mascotas>>([]);
  curretMascota = this.mascotas.asObservable();
  // private imgSource : BehaviorSubject<Mascotas[]> = new BehaviorSubject(undefined);
  // private imgSource : BehaviorSubject<Mascotas[] | undefined> = new BehaviorSubject(undefined);
  // currentImg = this.imgSource.asObservable();

  addMascota(mascota: Mascotas) {
    let arrayMascota: Array<Mascotas> = this.mascotas.getValue();
    arrayMascota.push(mascota);
    this.mascotas.next(arrayMascota);
    console.log(this.mascotas);
  }

  constructor() { }
  
}
