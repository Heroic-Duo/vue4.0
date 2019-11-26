import Axios from '@/axios/Interface'


/**
 * 
 * @param {搜搜} param0 
 */
export function getSearh ({

  params = {}
}) {
  return Axios({
    u: `/index/searh/searh`,
    p: params
  })
}

export function getUserData ({

  params = {}
}) {
  return Axios({
    m: 'POST',
    u: `/user/index/data`,
    p: params
  })
}
/**
 * akhsgdvkahskjvhkasjhvkjashdvkj
 * @param {name: '',id: ''  POST需要声明， get直接用}
 */
export function setlistData ({ params = {}}) {
  return Axios({
    m: 'POST',
    u: `/user/index/data`,
    p: params
  })
}
export function seteuserData ({ params = {}}) {
  return Axios({
    m: 'POST',
    u: `/user/index/setdata`,
    p: params
  })
}
/**
 * akhsgdvkahskjvhkasjhvkjashdvkj
 * @param {name: '',id: ''  POST需要声明， get直接用}
 */
// export function setlistData ({satae = null, params = {}}) {
//   return Axios({
//     m: 'POST',
//     u: `nav`,
//     p: params
//   })
// }
