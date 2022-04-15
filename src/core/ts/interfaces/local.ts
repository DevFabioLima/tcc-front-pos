export interface ILocal {
  id: number,
  name: string,
  sectorName: string
}

export interface ILocalForSelect {
  id: number
  label: string,
}

export interface IHandleCreateLocal {
  name: string,
  sectorId: string
}
