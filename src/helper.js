export const isAnySelectedCheck = obj => {
  return Object.values(obj).some(item => item.isChecked)
}

export const onlyCheckedData = obj => {
  let newObj = {}
  Object.keys(obj).forEach(item => {
    if (obj[item].isChecked) {
      newObj = {
        ...newObj,
        [item]: obj[item],
      }
    }
  })
  return newObj
}

export const addPauseProps = obj =>{
    let newObj = {}
    Object.keys(obj).forEach((item,index) => {
        newObj={
            ...newObj,
            [item]: {
                ...obj[item],
                isPause: !!index
            }
        }
    })
    return newObj
} 

export const objWithNonPause = obj =>{
    let newObj = {}
    Object.keys(obj).forEach((item) => {
        if(!obj[item].isPause)
        newObj={
            [item] :obj[item]
        }
    })
    return newObj
}

export const isEmptyObj = obj =>{
    return !!Object.keys(obj).length;
} 