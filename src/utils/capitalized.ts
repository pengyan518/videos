const capitalized = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export default capitalized