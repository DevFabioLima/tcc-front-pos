export interface IUser {
  id: number
  firstName: string
  lastName: string
  email: string
  password?: string
  profileName: string
  sectorName: string
  status?: boolean
  bossId?: number
}

export interface IUserSelect {
  id: number,
  label: string
}

export interface IHandleCreateUser {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  sectorId: string,
  profileId: string,
  bossId: string
}
