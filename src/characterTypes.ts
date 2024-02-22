/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Root {
    id: number
    name: string
    images: string[]
    debut: Debut
    family: Family
    jutsu: string[]
    natureType: string[]
    personal: Personal
    rank: Rank
    tools: string[]
    voiceActors: VoiceActors
  }
  
  export interface Debut {
    [key: string]: string | undefined;
    manga: string
    anime: string
    novel: string
    movie: string
    game: string
    ova: string
    appearsIn: string
  }
  
  export interface Family {
    [key: string]: string | undefined;
    father: string
    mother: string
    son: string
    daughter: string
    wife: string
    "adoptive son": string
    godfather: string
  }
  
  export interface Personal {
    [key: string]: any
    birthdate: string
    sex: string
    age: Age
    height: Height
    weight: Weight
    bloodType: string
    kekkeiGenkai: string[]
    classification: string[]
    tailedBeast: string
    occupation: string[]
    affiliation: string[]
    team: string[]
    clan: string
    titles: string[]
  }
  
  export interface Age {
    "Part I": string
    "Part II": string
    "Academy Graduate": string
  }
  
  export interface Height {
    "Part I": string
    "Part II": string
    "Blank Period": string
  }
  
  export interface Weight {
    "Part I": string
    "Part II": string
  }
  
  export interface Rank {
    [key: string]: any
    ninjaRank: NinjaRank
    ninjaRegistration: string
  }
  
  export interface NinjaRank {
    "Part I": string
    Gaiden: string
  }
  
  export interface VoiceActors {
    [key: string]: any
    japanese: string[]
    english: string[]
  }
  