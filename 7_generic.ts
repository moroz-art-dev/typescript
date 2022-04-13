const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5]
const arrayOfStrings: Array<string> = ['Hello', 'Artem']

function revers<T>(array: T[]): T[] {
 return array.reverse()
}