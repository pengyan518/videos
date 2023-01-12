const loginLangCode = 'en-us'
// const loginLangCode = 'ko'
export const crossdomainDev = `.sydev.info`
export const crossdomain = `.shenyun.com`
// @ts-ignore
const subDomain = loginLangCode === 'en-us' ? 'www' : loginLangCode
export const prefix = process.env.NODE_ENV === 'development' ? `//${subDomain}.sydev.org` : ``
// export const prefix: string = process.env.NODE_ENV === 'development' ? `//${subDomain}.shenyun.org` : ``
export const controller = `videos2`
export default Object.freeze({
  wisyAPI: `${prefix}/api-home/what-is-shen-yun`,
  artistAPI: `${prefix}/artists/view/api/e/`,
  videosAPI: `${prefix}/${controller}/api`,
  loginLangCode,
  cnLang: ['zh-tw', 'zh-cn'],
  xlmns: 'http://www.w3.org/2000/svg',
  crossdomainDev: `www.sydev.info/`,
  crossdomain: `www.shenyun.com/`,
  promoLanguage: ['en-us'],
  controller, // Angela Xiao
  breakpoint: {
    mobile: 767,
    desk: 768,
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
    xxxl: 1500,
  },
  videoOptions: {
    youtube: {
      autoplay: 1,
      cc_load_policy: 1,
      color: null,
      controls: 1,
      disablekb: 0,
      enablejsapi: 0,
      end: null,
      fs: 1,
      h1: null,
      iv_load_policy: 1,
      list: null,
      listType: null,
      loop: 0,
      modestbranding: null,
      origin: null,
      playlist: null,
      playsinline: null,
      rel: 0,
      showinfo: 1,
      start: 0,
      wmode: 'transparent',
      theme: 'dark',
      mute: 0,
    },
  },
})

export const sectionMap: {[index: string]: any} = {
  'about-shen-yun': {
    title: 'About Shen Yun',
    banner: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    content: ['itemsShenyunTrailers'],
  },
  artists: {
    title: 'The Artists',
    banner: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    content: ['itemsPersecution', 'itemsStartsOfShenyun', 'itemsMorefromArtists'],
  },
  reviews: {
    title: 'Reviews',
    banner: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    content: ['itemsReviews'],
  },
  music: {
    title: 'Music',
    banner: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    content: ['itemsSyso'],
  },
}
