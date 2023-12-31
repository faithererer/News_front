import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: 'user/list',
    method: 'get',
    params: query
  })
}

export function createUser(data) {
  return request({
    url: 'user/create',
    method: 'post',
    data
  })
}
export function updateUser(data) {
  return request({
    url: 'user/update',
    method: 'post',
    data
  })
}
export function delUser(data) {
  return request({
    url: 'user/del',
    method: 'post',
    data
  })
}
