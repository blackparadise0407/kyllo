import { FileQueryParams, Record } from 'pocketbase'

import { pb } from '@/lib/pb'

export const getPbImgUrl = (
  record: Record,
  filename: string,
  queryParams: FileQueryParams = {},
) => {
  if (!filename) return ''
  return pb.files.getUrl(record, filename, queryParams)
}

export function groupBy<T>(list: Array<T>, keyGetter: (obj: T) => any) {
  const map = new Map<string, Array<T>>()
  list.forEach((item) => {
    const key = keyGetter(item)
    const collection = map.get(key)
    if (!collection) {
      map.set(key, [item])
    } else {
      collection.push(item)
    }
  })
  return map
}
