export enum UserStatus {
  loading = 'loading',
  loaded = 'loaded',
  error = 'error',
}

export interface UserData {
  voteFor: number | null,
  isStudent: boolean,
  isAdmin: boolean,
  isuId: number,
}

export type UserState = UserStateLoading | UserStateLoaded | UserStateError

export interface UserStateError {
  data: null,
  status: UserStatus.error
}

export interface UserStateLoading {
  data: null,
  status: UserStatus.loading
}


export interface UserStateLoaded {
  data: UserData
  status: UserStatus.loaded
}