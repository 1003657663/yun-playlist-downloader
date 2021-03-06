// Generated by https://quicktype.io

export interface AlbumResponse {
  songs: Song[]
  code: number
  album: Album
}

export interface Album {
  songs: any[]
  paid: boolean
  onSale: boolean
  mark: number
  alias: any[]
  artists: Artist[]
  copyrightId: number
  picId: number
  artist: Artist
  publishTime: number
  company: string
  briefDesc: string
  commentThreadId: string
  blurPicUrl: string
  companyId: number
  picUrl: string
  pic: number
  tags: string
  description: string
  status: number
  subType: string
  name: ResourceTitleEnum
  id: number
  type: string
  size: number
  info: Info
}

export interface Artist {
  img1v1Id: number
  topicPerson: number
  alias: Alia[]
  picId: number
  briefDesc: string
  musicSize: number
  albumSize: number
  followed: boolean
  img1v1Url: string
  trans: string
  picUrl: string
  name: ArtistName
  id: number
  picId_str?: string
  img1v1Id_str: string
}

export enum Alia {
  Vae = 'Vae',
}

export enum ArtistName {
  许嵩 = '许嵩',
}

export interface Info {
  commentThread: CommentThread
  latestLikedUsers: InfoLatestLikedUser[]
  liked: boolean
  comments: null
  resourceType: number
  resourceId: number
  commentCount: number
  likedCount: number
  shareCount: number
  threadId: string
}

export interface CommentThread {
  id: string
  resourceInfo: ResourceInfo
  resourceType: number
  commentCount: number
  likedCount: number
  shareCount: number
  hotCount: number
  latestLikedUsers: CommentThreadLatestLikedUser[]
  resourceId: number
  resourceOwnerId: number
  resourceTitle: ResourceTitleEnum
}

export interface CommentThreadLatestLikedUser {
  s: number
  t: number
}

export interface ResourceInfo {
  id: number
  userId: number
  name: ResourceTitleEnum
  imgUrl: string
  creator: null
  encodedId: null
  subTitle: null
  webUrl: null
}

export enum ResourceTitleEnum {
  苏格拉没有底 = '苏格拉没有底',
}

export interface InfoLatestLikedUser {
  locationInfo: null
  avatarUrl: string
  userId: number
  nickname: string
  authStatus: number
  expertTags: null
  userType: number
  remarkName: null
  vipType: number
  experts: null
}

export interface Song {
  rtUrls: any[]
  ar: Ar[]
  al: Al
  st: number
  noCopyrightRcmd: null
  djId: number
  no: number
  fee: number
  v: number
  mv: number
  cd: string
  rtype: number
  rurl: null
  pst: number
  t: number
  alia: any[]
  pop: number
  rt: string
  mst: number
  cp: number
  crbt: null
  cf: string
  dt: number
  h: H
  l: H
  rtUrl: null
  ftype: number
  a: null
  m: H
  name: string
  id: number
  privilege: Privilege
}

export interface Al {
  id: number
  name: ResourceTitleEnum
  picUrl: string
  pic_str: string
  pic: number
}

export interface Ar {
  id: number
  name: ArtistName
  alia: Alia[]
}

export interface H {
  br: number
  fid: number
  size: number
  vd: number
}

export interface Privilege {
  id: number
  fee: number
  payed: number
  st: number
  pl: number
  dl: number
  sp: number
  cp: number
  subp: number
  cs: boolean
  maxbr: number
  fl: number
  toast: boolean
  flag: number
  preSell: boolean
  playMaxbr: number
  downloadMaxbr: number
  chargeInfoList: ChargeInfoList[]
}

export interface ChargeInfoList {
  rate: number
  chargeUrl: null
  chargeMessage: null
  chargeType: number
}
