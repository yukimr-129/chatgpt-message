export type SessionType = {
  expires: string | null | undefined
  user: {
    email?: string | null | undefined
    image?: string | null | undefined
    name?: string | null | undefined
  }
}
