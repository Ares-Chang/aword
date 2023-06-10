export default eventHandler(async () => {
  const file = await useStorage('github').getItem('version.json')
  return file
})
