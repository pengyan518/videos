const getFriendlyUrl = (str: string) => str.replace(/\s+/g, '-').toLowerCase()
export default getFriendlyUrl
