export interface Member {
  id: string
  img?: string
  name: string
  date: string
  tel?: string
  mail?: string
  books: Array<string>
}

export interface MemberEditableFields {
  name: string
  date: string
  tel?: string
  mail?: string
  books: Array<string>
}
