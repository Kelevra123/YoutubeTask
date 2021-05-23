export type ProductBody = {
  developer: string,
  freetogame_profile_url: string,
  genre: string,
  platform: string,
  thumbnail: string,
  title: string,
  id: number
}

export type Product = {
  description: string,
  minimum_system_requirements: {
    graphics: string,
    memory: string,
    os: string,
    processor: string,
    storage: string
  };
  screenshots: Array<{id: number, image: string}>,
  title: string
}
