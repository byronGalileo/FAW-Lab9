export class Mascotas {
    public id: number = 0;
    public nombre: string = "";
    public tipo: string = "";
    
    constructor(id:number,nombre: string, tipo: string) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
    }
}