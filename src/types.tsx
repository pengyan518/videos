interface ImageProps {
  small: string
  thumb: string
  original: string
}

export type VideoItemProps = {
  eid: string
  id: string
  title: string
  descriptionLong: string
  description: string
  onDemandLink?: strings
  videoLink: string
  embeddedVideoVimeo: string
  embeddedVideoYT: string
  urlFriendlyName: string
  length: string
  imageForVideo: {
    medium: string
    original: string
  }
  image?: {
    medium: string
    original: string
  }
}

export interface CategoryProps {
  itemsFeatured: VideoItemProps[]
  itemsLatest: VideoItemProps[]
  itemsShenyunIntroduction: VideoItemProps[]
  itemsShenyunTrailers: VideoItemProps[]
  itemsArtists: VideoItemProps[]
  itemsPersecution: VideoItemProps[]
  itemsStartsOfShenyun: VideoItemProps[]
  itemsMorefromArtists: VideoItemProps[]
  itemsEditorsPick: VideoItemProps[]
  itemsReviews: VideoItemProps[]
  itemsSyso: VideoItemProps[]
  itemsShorts: VideoItemProps[]
}

export interface MainProps {
  category: CategoryProps
  translation: any
  langCode: string
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
