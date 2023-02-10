export interface CharacterStructure {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
}

export type CharactersStructure = CharacterStructure[];

export interface CharactersApiStructure {
  info: {
    count: number;
    pages: number;
    next: null | string;
    prev: null | string;
  };
  results: CharactersStructure;
}
