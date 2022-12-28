interface ImageProps {
  small: string;
  thumb: string;
  original: string
}

export interface MainProps {
  info: {
    title: string
    ext: {
      imageIdData: ImageProps[]
      miscData: {
        featured_video_description: string
        syzp_videos: string
      }
      position: string
      topBannerQuote: string
      bornPlace: string
      companyDebut: string
      biographyShort: string
      biography: string
      photoRelatedData: any[]
      smallGalleryData: any[]
      contentArea: string
      videoRelated: string
      RepertoireHighlights: string
      contentRelatedData: any[]
      chineseName: string
    }
  }
  translation: any
  langCode: string
  categoryDisplay: string
  categoryUrl: string
  contentNext: {
    title: string
    url: string
  }
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
