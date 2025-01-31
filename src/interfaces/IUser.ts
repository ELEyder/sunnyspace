export interface IUser {
  address: string; // Dirección del usuario
  chats: string[]; // Lista de IDs de chats
  country: string; // País del usuario
  email: string; // Correo electrónico del usuario
  firstName: string; // Nombre del usuario
  firstRegistration: Date; // Fecha de primer registro
  friendRequestR: string[]; // Lista de IDs de solicitudes de amistad recibidas
  friendRequestS: string[]; // Lista de IDs de solicitudes de amistad enviadas
  friends: string[]; // Lista de IDs de amigos
  lastAccess: Date; // Fecha del último acceso
  lastName: string; // Apellido del usuario
  nicknames: string[]; // Lista de apodos
  phoneNumber: string; // Número de teléfono del usuario
  posts: number; // Número de publicaciones
  postsD: string[]; // Lista de IDs de publicaciones
  status: string; // Estado del usuario (ej. "Online")
  studies: string[]; // Lista de estudios
  urlAvatar: string; // URL del avatar del usuario
  username: string; // Nombre de usuario
  works: string[]; // Lista de trabajos
}