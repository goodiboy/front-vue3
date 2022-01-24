/**
 * rsa 加密方法
 */

import { pki } from 'node-forge'
import { LoginForm } from '@/types/login'

// rsa公钥
const key = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0JV1lyNBs78rcuXed7C4
EgBiwvMAGwpb3uG4lyyQlwAWVrNKc+xzS2JRp9+a+KbJX8M88SUm8zEY8P4pKXqg
ddDQDtaeAhGCAS3fqYCnk7knjB4YpyY9CwBy3Oo9iWz71nXIC1lmMj4YMHQa6mYB
D0bsXrzyyWgqhH6uIgeK8YRj6nW8YykOKNh20jq7Y/Doq/f+eZubgxY+RiPSLKxb
WSNeIFPWJRzuD/GzzEt++N9LgIEjDn7dJ4a+GAiWJW/2ebiwtNK4Ht/kanqoClRA
cqNTLO0qlnE7osdv1pq5dMWtijEKC8oC03RtdqhDW5/P7lTfl75RyE5JvTqm6B05
BwIDAQAB
-----END PUBLIC KEY-----
`
export const encryptRsa = (message: string) => {
  const publicKey = pki.publicKeyFromPem(key)
  return publicKey.encrypt(message)
}

/**
 * 把密码转换成rsa加密后的密码
 * @param data 登录的表单数据
 */
export const transData = (data: LoginForm) => {
  const password = encryptRsa(data.password)
  let password2: string | undefined
  if (data.password2) {
    password2 = encryptRsa(data.password2)
  }
  return Object.assign({}, data, { password, password2 })
}
