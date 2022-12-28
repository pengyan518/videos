const loginLangCode = 'en-us'
// const loginLangCode = 'ko'
export const crossdomainDev = `.sydev.info`
export const crossdomain = `.shenyun.com`
// @ts-ignore
const subDomain = loginLangCode === 'en-us' ? 'www' : loginLangCode
export const prefix = process.env.NODE_ENV === 'development' ? `//${subDomain}.sydev.org` : ``
// export const prefix: string = process.env.NODE_ENV === 'development' ? `//${subDomain}.shenyun.org` : ``
export default Object.freeze({
  wisyAPI: `${prefix}/api-home/what-is-shen-yun`,
  artistAPI: `${prefix}/artists/view/api/e/`,
  loginLangCode,
  cnLang: ['zh-tw', 'zh-cn'],
  xlmns: 'http://www.w3.org/2000/svg',
  article: `${prefix}/content/article-api/e/`,
  city: `/city-info-frame/ajax/1/sc/1/`,
  getCityApi: `/get-city-api`,
  cityListAction: `/city-list`,
  cityGroupInfoListAction: `/city-group-info-list`,
  getEventInfoAction: `${prefix}/api-home/get-event-info`,
  crossdomainDev: `www.sydev.info/`,
  crossdomain: `www.shenyun.com/`,
  promoLanguage: ['en-us'],
  // eid: 'W_4hYb1yT14', // a wang
  // eid: 'XfrMcQct-Bg', // Tiffany Lin
  // eid: 'qM1qEGNf4Yk', // Melody Qin
  // eid: '1RC0PMqP5dE', // Carol Huang
  // eid: 'hBFlGVpHELU', // Piotr Huang
  // eid: 'XTRMqjEVHyM', // zhou xiao
  // eid: 'LeyEh28lcFo', // Kenji Kobayashi
  eid: 'lyFl9FseCf0', // Angela Xiao
  // eid: 'pmayvBKAikU',
  // eid: '8PDL6kcecNM', // Milen Nachev
  // eid: '1zP37y90TjQ', // Rachael Yu Ming Bastick
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
})
