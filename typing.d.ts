export type Massage = {
  text: string
  createdAt: FieldValue
  user: {
    _id: string
    name: string
    avater: string
  }
}
