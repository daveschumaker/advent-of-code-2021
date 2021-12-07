// https://adventofcode.com/2021/day/1

const fetchData = require('../utils/fetchData')

const data = fetchData('./input.txt')

// PART I
const checkDepth = (input = []) => {
  let result = 0

  /** PSEUDO CODE BLOCK:
   *	Loop through array
			Check if current element is bigger than last element.
				If so, add 1 to result.

		Return result
   */

  input.forEach((val, i) => {
    if (i === 0) {
      return
    }

    if (Number(val) > Number(input[i - 1])) {
      result++
    }
  })

  console.log('checkDepth:', result)
  return result
}

checkDepth(data)

// PART II

const checkSlidingDepth = (input = []) => {
  let result = 0
  let lastSum = null

  input.forEach((val, i) => {
    if (val < 2) {
      return
    } else if (val === 2) {
      lastSum = Number(val) + Number(input[i - 1]) + Number(input[i - 2])
    }

    const currentSum = Number(val) + Number(input[i - 1]) + Number(input[i - 2])

    if (currentSum > lastSum) {
      result++
    }

    lastSum = currentSum
  })

  console.log('checkSlidingDepth:', result)
  return result
}

checkSlidingDepth(data)
