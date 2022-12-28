const useUrlParameter = (parameter: string, url = window.location.href) => {
  const stringArray: any = url?.split('/')
  const index = stringArray.findIndex((item: string) => item === parameter)

  return index !== -1 ? stringArray[index + 1] : null
}

export default useUrlParameter
