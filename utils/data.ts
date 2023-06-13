interface VersionProp {
  version: string
  categories: string
}
interface CatalogProp {
  path: string
  catalogs: TypeProp[]
}
interface TypeProp {
  id: string
  name: string
  key: string
}
export interface DetailProp {
  text: string
  source: string
  author: string
  explain: string
}

const repo = 'github'

/**
 * 获取配置信息
 */
async function getConfig() {
  const { version, categories } = await useStorage(repo).getItem('version.json') as VersionProp

  return {
    version,
    categories: categories.replace('./', ''),
  }
}

/**
 * 获取分类及路径信息
 */
export async function getCataLog() {
  const { categories } = await getConfig()
  const { path: url, catalogs } = await useStorage(repo).getItem(categories) as CatalogProp

  const path = url.replace('./', '')

  return {
    path,
    catalogs,
  }
}

/**
 * 获取指定分类的详情数据
 * @param id 分类id
 */
export async function getDetail(id: string) {
  const { path } = await getCataLog()
  const info = await useStorage(repo).getItem(`${path}/${id}.json`) as DetailProp[]

  return info
}
