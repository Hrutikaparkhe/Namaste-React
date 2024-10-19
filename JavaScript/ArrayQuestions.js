//reversing a string program

const reverseString = (string) => {
    let arr = string.split('');
    let result = [];
    //also  can use reverseString method directly
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i])
    }
    return result.join('')
}
console.log(reverseString('hello'))

//palindrome

const isPalindrome = (string) => {
    const result = [];

    for (let i = string.split('').length - 1; i >= 0; i--) {
        result.push(string.split('')[i])

    }
    if (string === result.join('')) {
        console.log('is palindrome')
        return true
    }
    else {
        console.log('is not palindrome')
        return false
    }
}
console.log(isPalindrome('aca'))
//or we can use reverse String function as above
const palindrome = (string) => {
    if (reverseString(string) === string) {
        return true
    }
    else {
        return false
    }
}
console.log(palindrome('namn'))

//reverse integer
const intReversal = (int) => {
    const intreverse = reverseString(int.toString())
    return parseFloat(intreverse)
}
console.log(intReversal(1234))

//capitalize first letter of the each word in sentence

const capitalizeFirstLetter = (string) => {
    return string.split(' ').map((item) => (item[0].toUpperCase() + item.slice(1))).join(' ')
}
console.log(capitalizeFirstLetter('I am a girl'))

//fizbuz problem
const fizbuz = (n) => {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizubuz')
        }
        else if (i % 3 === 0) {
            console.log('fizz');

        }
        else if (i % 5 === 0) {
            console.log('buzz');

        }
        else {
            console.log(i);

        }
    }
}
fizbuz(15)

//MaxProfit problem

const MaxProfit = (n) => {
    let minPrice = n[0]
    let maxProfit = 0
    for (let i = 1; i < n.length; i++) {
        const currentPrice = n[i]
        minPrice = Math.min(minPrice, currentPrice)
        const potentialProfit = currentPrice - minPrice
        maxProfit = Math.max(maxProfit, potentialProfit)
    }
    return maxProfit
}
console.log(MaxProfit([7, 1, 5, 3, 6, 4]))

//Array chunk problem
// [1,2,3,4,5,6,7,8],3 ---> [[1,2,3],[4,5,6],[7,8]]
// [1,2,3,4,5]---->[[1,2],[3,4],[5]]
const chunk = (arr, size) => {
    const chunked = []
    let index = 0
    while (index < arr.length) {
        const chunk = arr.slice(index, index + size);
        chunked.push(chunk)
        index = index + size
    }
    return chunked
}
console.log(chunk([1, 2, 3, 4, 5], 2))

//two sum
// [2,7,11,15] , target --->9 
// o/p--->[0,1],[1,2,3,4]
//This is not an optimal solution can be achived by Maps
const twoSum = (list, target) => {
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[i] + list[j] === target) {
                return [i, j]
            }
        }
    }

}
console.log(twoSum([1, 2, 3, 4], 7))