export interface TableConfig {
  tree?: {
    props: {
      children: string
    }
    key: string
  }
  action: {
    type: string
    label: string
    handle: (a: any, b?: any) => void
  }[]
  columns: {
    type?: string
    label: string
    prop?: string
    width?: number | string
    fixed?: string
    formatter?: (row: any, column: number, value: any) => string
    template?: {
      type: string
      style?: string
      label: string
      handle: (a: any, b?: any) => void
    }[]
  }[]
}

export interface FormConfig {
  type: string
  label: string
  prop: string
  option?: { value: unknown; label: string }[]
}
