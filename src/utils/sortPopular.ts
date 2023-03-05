function sortPopular(a: {totalCount: string}, b: {totalCount: string}) {
  return Number(b.totalCount) - Number(a.totalCount)
}

export default sortPopular
