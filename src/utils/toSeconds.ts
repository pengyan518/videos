function toSeconds(timeStr: string) {
  // const [hours, minutes, seconds] = timeStr.split(':').map(Number)
  // return hours * 3600 + minutes * 60 + seconds

  const [minutes, seconds] = timeStr.split(':').map(Number)
  return minutes * 60 + seconds
}

export default toSeconds
