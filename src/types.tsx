interface ImageProps {
  small: string;
  thumb: string;
  original: string
}

export interface MainProps {
  category: {
    itemsFeatured: any[]
    itemsLatest: any[]
    itemsShenyunIntroduction: any[]
    itemsShenyunTrailers: any[]
    itemsArtists: any[]
    itemsReviews: any[]
    itemsSyso: any[]
  }
  translation: any
  langCode: string
}

export type ItemProps = {
  isVisible?: boolean
  style?: object
  item: {
    id: string
    ext: {
      imageIdData: any[]
      introductionShort: string
    }
    title: string
    url: string
  }
  translation: any
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
