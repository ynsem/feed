export type TFeedItem = {
  author?: string
  createdAt?: string
  id?: string
  image?: string
  name?: string
  text?: string
  views?: string
}

export type TFeed = TFeedItem[]

export type TComment = {
  id: string
  newsId: string
  createdAt: string
  avatar: string
  author: string
  text: string
}

export type TCommentList = TComment[]