// interface Children {
//   parentId: string[]
//   updateTime: string
//   createTime: string
//   _id: string
//   menuType: string
//   menuState: string
//   menuName: string
//   path: string
//   component: string
//   children: Children1[]
//   action: Children1[]
// }
//
// interface Children1 {
//   parentId: string[]
//   updateTime: string
//   createTime: string
//   _id: string
//   menuType: string
//   menuState: string
//   menuName: string
//   menuCode: string
// }
//
// interface MenuType {
//   parentId: string[]
//   updateTime: string
//   createTime: string
//   _id: string
//   menuType: string
//   menuName: string
//   menuCode?: string
//   path: string
//   icon: string
//   order?: string
//   component?: string
//   menuState: string
//   children: Children[]
//   __v?: number
// }

export enum DialogTypeEnum {
  'CREATE',
  'EDIT'
}
