export interface CharacterStructure {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: { name: string };
  location: { name: string };
}

export type CharactersStructure = CharacterStructure[];

export interface CharactersApiStructure {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: CharactersStructure;
}

export interface ApiEndpointsStructure {
  characters: string;
}
