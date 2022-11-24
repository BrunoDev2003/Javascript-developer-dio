const list = [1,2,3,4,5,6,7,8,9,10]

list.forEach((val, i, listRef) => {
    console.log(val, i, listRef)
})

list.forEach(cb)

for (let i = 0; i < list.length; i++) {
    const element = array[i];
    cb(element,i,list)
}