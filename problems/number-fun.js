let returnsThree = () => 3

let reciprocal = (num) => {
    if (num > 0 && num <= 1000000)
        return 1 / num
    else
        throw new TypeError('please provide a number between 1 and 1 million')
}

module.exports = { returnsThree, reciprocal }
