interface ImageProps {
  small: string
  thumb: string
  original: string
}

export interface MainProps {
  category: {
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
  }
  translation: any
  langCode: string
}

export type VideoItemProps = {
  eid: string
  onDemandLink: string
  videoLink: string
  embeddedVideoVimeo: string
  embeddedVideoYT: string
  imageForVideo: {
    medium: string
    original: string
  }
}

export interface ContentProps {
  content: MainProps
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
