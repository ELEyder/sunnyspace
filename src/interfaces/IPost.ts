export interface IPost {
  id: string;
  author: string; // ID del autor del post
  action?: string; // Acción del usuario (ej. "se ha unido a Senatinet")
  content: string; // Texto del post
  date: Date; // Fecha del post
  likes: number;
  likesD: string[]; // Lista de IDs de usuarios que dieron like
  comments: number;
  commentsD: string[]; // Lista de IDs de comentarios
  privacy: string; // Nivel de privacidad ("Public", "Friends", etc.)
  privacyD: string[]; // Detalles adicionales sobre privacidad
  searchs: number; // Número de veces buscado
  searchsD: string[]; // Lista de búsquedas relacionadas
  typeMedia: string; // Tipo de medio adjunto (imagen, video, etc.)
  urlMedia: string; // URL del medio adjunto
}
