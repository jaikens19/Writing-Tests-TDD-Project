const myMap = (arr,cb) => {
    const newArr = []
    arr.forEach(el => {
        newArr.push(cb(el))
    })
    // arr.map(el => {
    //     return cb(el)
    // })
    return newArr
}

module.exports = myMap
