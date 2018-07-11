export function formatPermission(array) {
  console.log('come to format')
  for (let i = 0, len = array.length; i < len; i++) {
    let val = array[i].permission.isNaN ? 0 : array[i].permission
    let type = array[i].type
    let symbols = ['---', '--x', '-w-', '-wx', 'r--', 'r-x', 'rw-', 'rwx']
    let vInt = parseInt(val, 8)
    let sticky = (vInt & (1 << 9)) !== 0
    let res = ''
    for (let j = 0; j < 3; ++j) {
      res = symbols[val % 10] + res
      val = Math.floor(val / 10)
    }
    if (sticky) {
      var otherExec = (vInt & 1) === 1
      res = res.substr(0, res.length - 1) + (otherExec ? 't' : 'T')
    }
    if (type === 'DIRECTORY') {
      res = 'd' + res
    }
    array[i].permission = res
  }
  return array
}
export function formatPermission2(array) {
  const array1 = array
  array1.forEach(item => {
    let val = item.permission.isNaN ? 0 : item.permission
    console.log(val)
    let type = item.type
    let symbols = ['---', '--x', '-w-', '-wx', 'r--', 'r-x', 'rw-', 'rwx']
    let vInt = parseInt(val, 8)
    let sticky = (vInt & (1 << 9)) !== 0
    let res = ''
    for (let j = 0; j < 3; ++j) {
      res = symbols[val % 10] + res
      val = Math.floor(val / 10)
    }
    if (sticky) {
      var otherExec = (vInt & 1) === 1
      res = res.substr(0, res.length - 1) + (otherExec ? 't' : 'T')
    }
    if (type === 'DIRECTORY') {
      res = 'd' + res
    }
    item.permission = res
  })
}
export function formatPermission3(array) {
  array = array.map(item => {
    let val = item.permission.isNaN ? 0 : item.permission
    let type = item.type
    let symbols = ['---', '--x', '-w-', '-wx', 'r--', 'r-x', 'rw-', 'rwx']
    let vInt = parseInt(val, 8)
    let sticky = (vInt & (1 << 9)) !== 0
    let res = ''
    for (let j = 0; j < 3; ++j) {
      res = symbols[val % 10] + res
      val = Math.floor(val / 10)
    }
    if (sticky) {
      var otherExec = (vInt & 1) === 1
      res = res.substr(0, res.length - 1) + (otherExec ? 't' : 'T')
    }
    if (type === 'DIRECTORY') {
      res = 'd' + res
    }
    item.permission = res
  })
  return array
}
