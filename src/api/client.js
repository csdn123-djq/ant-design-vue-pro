import request from '@/utils/requestClient'

export function createPenetrate(parameter) {
  return request({
    url: '/createPenetrate',
    method: 'post',
    data: parameter,
  })
}
