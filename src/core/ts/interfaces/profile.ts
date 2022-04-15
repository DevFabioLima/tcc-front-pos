export interface IProfile {
  name: string
  actions: Array<string>,
  users: Array<string>,

}

export interface ICreateProfile {
  name: string,
  actions: Array<number>,
}

export interface IHandleCreateProfile {
  name: string,
  actionListUser: boolean,
  actionInsertUser: boolean,
  actionUpdateUser: boolean,
  actionDeleteUser: boolean,
  actionListPlanAction: boolean,
  actionInsertPlanAction: boolean,
  actionUpdatePlanAction: boolean,
  actionDeletePlanAction: boolean,
  actionListProfile: boolean,
  actionInsertProfile: boolean,
  actionUpdateProfile: boolean,
  actionDeleteProfile: boolean,
}
