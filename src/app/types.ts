export interface UserInfo {
  username: string
  password?: string
  expire?: number
}

export enum TabFilterStatus {
  all = 1,
  active = 2,
  completed = 3
}

export enum TodoStatus {
  unCompleted = 1,
  completed = 2
}

export interface Todo {
  id: any
  status: TodoStatus
  content: string
}
