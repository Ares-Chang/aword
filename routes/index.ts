import { randomInt } from '../utils/utils'
import { getCataLog, getDetail } from '../utils/data'

export default eventHandler(async () => {
  const { catalogs } = await getCataLog()
  const keyList = catalogs.map(item => item.key)

  const type = randomInt(0, keyList.length - 1)

  const id = catalogs[type].key
  const list = await getDetail(id)

  const num = randomInt(0, list.length - 1)

  const info = list[num]

  return info
})
