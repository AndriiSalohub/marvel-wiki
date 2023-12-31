export interface RandomChar {
  code: number
  status: string
  copyright: string
  attributionText: string
  attributionHTML: string
  etag: string
  data: Data
}

export interface Data {
  offset: number
  limit: number
  total: number
  count: number
  results: Character[]
}

export interface Character {
  id: number
  name: string
  description: string
  modified: string
  thumbnail: Thumbnail
  resourceURI: string
  comics: Comics
  series: Series
  stories: Stories
  events: Events
  urls: Url[]
}

export interface Thumbnail {
  path: string
  extension: string
}

export interface Comics {
  available: number
  collectionURI: string
  items: any[]
  returned: number
}

export interface Series {
  available: number
  collectionURI: string
  items: any[]
  returned: number
}

export interface Stories {
  available: number
  collectionURI: string
  items: any[]
  returned: number
}

export interface Events {
  available: number
  collectionURI: string
  items: any[]
  returned: number
}

export interface Url {
  type: string
  url: string
}
