const Copyright = async () => {
  const currentYear = new Date().getFullYear()
  const copyright = `2022-${String(currentYear)} Alecia Vogel. All rights reserved.`

  return <span>&copy; {copyright}</span>
}

export default Copyright
