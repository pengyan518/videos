interface ImageProps {
  small: string
  thumb: string
  original: string
}

export interface CategoryProps {
  itemsFeatured: any[]
  itemsLatest: any[]
  itemsShenyunIntroduction: any[]
  itemsShenyunTrailers: any[]
  itemsArtists: any[]
  itemsPersecution: any[]
  itemsStartsOfShenyun: any[]
  itemsMorefromArtists: any[]
  itemsEditorsPick: any[]
  itemsReviews: any[]
  itemsSyso: any[]
  itemsShorts: any[]
}

export interface MainProps {
  category: CategoryProps
  translation: any
  langCode: string
}

export type VideoItemProps = {
  eid: string
  title: string
  onDemandLink: string
  videoLink: string
  embeddedVideoVimeo: string
  embeddedVideoYT: string
  urlFriendlyName: string
  length: string
  imageForVideo: {
    medium: string
    original: string
  }
}

export interface ContentProps {
  content: MainProps
  status: string
}
export interface ShortsProps {
  isMuted: boolean
  status: string
}

export interface LangProps {
  readonly langCode: string
}

export interface ListItemProps {
  readonly ref: any
}

export interface FigureProps {
  dataSrc: any
}
