import { randomInt } from '../utils/utils'
import { getCataLog, getDetail } from '../utils/data'

export default eventHandler(async () => {
  // 获取分类列表
  const { catalogs } = await getCataLog()
  const keyList = catalogs.map(item => item.key)

  // 随机获取一个分类
  const type = randomInt(0, keyList.length - 1)

  // 获取分类详情
  const id = catalogs[type].key
  const list = await getDetail(id)

  // 随机获取一条数据
  const num = randomInt(0, list.length - 1)
  const info = list[num]

  return info
})
