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
