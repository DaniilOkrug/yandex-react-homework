import { genres } from "@/constants/genres";

export function genresMapper(genreKey: string) {
  if (!Object.keys(genres).includes(genreKey)) return '';
  
  return genres[genreKey as keyof typeof genres];
}
