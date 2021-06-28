export interface Estacionamiento {
  titulo: string;
  descripcion: string;
  latitud: number;
  longitud: number;
  direccion: string;
  comuna: string;
  estado?: string;
  _id?: string;
  precio_arriendo?: number;
}
