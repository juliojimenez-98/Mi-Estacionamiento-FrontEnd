export interface AuthResponse {
  usuario: {
    estado: boolean;
    nombre: string;
    correo: string;
    comuna: string;
    direccion: string;
    apellido: string;
    role: string;
    uid: string;
  };

  token: string;
  msg: string;
  ok: boolean;
}

export interface User {
  estado: boolean;
  nombre: string;
  correo: string;
  comuna: string;
  direccion: string;
  apellido: string;
  role: string;
  uid: string;
}
