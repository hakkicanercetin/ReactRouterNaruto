/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Main {
  characters: Character[]
  currentPage: number
  pageSize: number
  total: number
}

export interface Character {
  id: number
  name: string
  images: string[]
  debut?: Debut
  family?: Family
  jutsu: string[]
  natureType?: string[]
  personal: Personal
  rank?: Rank
  tools?: string[]
  voiceActors?: VoiceActors
  uniqueTraits?: string[]
  香燐Karin?: Karin
}

export interface Debut {
  manga?: string
  anime?: string
  game?: string
  appearsIn?: string
  novel?: string
  movie?: string
  ova?: string
}

export interface Family {
  father?: string
  "adoptive brother"?: string
  "adoptive father"?: string
  son?: string
  nephew?: string
  "adoptive son"?: string
  ancestor?: string
  creator?: string
  sibling?: string
  grandfather?: string
  mother?: string
  grandmother?: string
  "great-grandfather"?: string
  cousin?: string
  grandson?: string
  "mother "?: string
  brother?: string
  "genetic template"?: string
  granduncle?: string
  lover?: string
  wife?: string
  granddaughter?: string
  niece?: string
  "grandmother "?: string
  aunt?: string
  sister?: string
  "first cousin once removed"?: string
  host?: string
  "genetic template/parent"?: string
  "clone/brother"?: string
  "pet "?: string
  uncle?: string
  daughter?: string
  godfather?: string
  "clone/son"?: string
  "adoptive mother"?: string
  "adoptive sons"?: string
  clone?: string
  godson?: string
}

export interface Personal {
  birthdate?: string
  sex?: string
  age?: Age
  height?: Height
  weight?: Weight
  bloodType?: string
  kekkeiGenkai: any
  classification: any
  tailedBeast?: string
  occupation: any
  affiliation: any
  team: any
  clan: any
  titles?: string[]
  status?: string
  kekkeiMōra?: string
  partner: any
  species?: string
  jinchūriki?: string[]
}

export interface Age {
  "Part II"?: string
  "Blank Period"?: string
  "Part I"?: string
  "Academy Graduate"?: string
  "Chunin Promotion"?: string
  "Boruto Movie"?: string
  "Boruto Manga"?: string
}

export interface Height {
  "Part II"?: string
  "Blank Period"?: string
  "Part I"?: string
  Gaiden?: string
  "Boruto Movie"?: string
  "Boruto Manga"?: string
}

export interface Weight {
  "Part II"?: string
  "Part I"?: string
}

export interface Rank {
  ninjaRank: NinjaRank
  ninjaRegistration?: string
}

export interface NinjaRank {
  "Part II"?: string
  "Blank Period"?: string
  "Part I"?: string
  Gaiden?: string
}

export interface VoiceActors {
  japanese: any
  english: any
}

export interface Karin {}

