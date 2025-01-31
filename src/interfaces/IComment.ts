export interface IComment {
  author: string; // ID del autor del comentario
  content: string; // Contenido del comentario
  date: Date; // Fecha del comentario
  likes: number; // Número de likes
  likesD: string[]; // Lista de IDs de usuarios que dieron like
  post: string; // ID del post al que pertenece el comentario
  typeMedia: string; // Tipo de medio adjunto (si aplica)
  urlMedia: string; // URL del medio adjunto (si aplica)
}