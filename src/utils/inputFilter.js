const addListener = function (el, type, fn) { // 事件监听
  el.addEventListener(type, fn, false)
}
// const spaceFilter = function (el) { //其他过滤器，可添加
//   addListener(el, 'keyup', () => {
//     el.value = el.value.replace(/\s+/, '')
//   })
// }

const specialFilter = function (el) {
  addListener(el, 'keyup', () => {
    // eslint-disable-next-line no-useless-escape
    el.value = el.value.replace(/\\+|\~+|\!+|\@+|¥+|\￥+|\^+|\&+|\*+|\(+|\)+|\'+|(\")+|\$+|`+|\“+|\”+|\‘+|\’+|\n+|\t/g, '')
      .replace('None', '') // 特殊字符
  })
}

export default {
  bind (el, binding) {
    if (el.tagName.toLowerCase() !== 'input') {
      el = el.getElementsByTagName('input')[0]
    }
    specialFilter(el)
    // switch (binding.arg) { //

    //   case 'special':
    //     specialFilter(el)
    //     break

    //   default:
    //     break
    // }
  }
}
