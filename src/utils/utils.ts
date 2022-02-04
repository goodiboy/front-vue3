/**
 * 格式化请求的参数，删除不需要传到后端的字段和移除空字符串
 * @param params 需要格式化的参数
 * @param removeAttr 需要移除的属性
 */
export const formatterParams = <T = any>(params: any, removeAttr?: string[]): T => {
  const res: any = {}
  for (const key in params) {
    if (params[key] !== '' && params[key] !== null && !removeAttr?.includes(key)) {
      res[key] = params[key]
    }
  }
  return res
}
