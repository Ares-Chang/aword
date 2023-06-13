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

async function getConfig() {
  const { version, categories } = await useStorage(repo).getItem('version.json') as VersionProp

  return {
    version,
    categories: categories.replace('./', ''),
  }
}

export async function getCataLog() {
  const { categories } = await getConfig()
  const { path: url, catalogs } = await useStorage(repo).getItem(categories) as CatalogProp

  const path = url.replace('./', '')

  return {
    path,
    catalogs,
  }
}

export async function getDetail(id: string) {
  const { path } = await getCataLog()
  const info = await useStorage(repo).getItem(`${path}/${id}.json`) as DetailProp[]

  return info
}
