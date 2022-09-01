
const fruits = ['manzana', 'melon', 'banana']

test('there are banana', () => {
  expect(fruits).toContain('banana')
})

test('mayor que', () => {
  expect(10).toBeGreaterThan(9)
})

test('Verdadero', () => {
  expect(true).toBeTruthy()
})

const reverseString = (str: string, callback: (str: string) => void): void => {
  callback(str.split('').reverse().join(''))
}

test('Probar un callback', () => {
  reverseString('Hola', (str: string) => {
    expect(str).toBe('aloH')
  })
})
// Me quedo raro
const reverseString2 = async (str: string): Promise<string> => {
  return await new Promise((resolve, reject) => {
    if (str === '') {
      reject(Error('Error'))
    }
    resolve(str.split('').reverse().join(''))
  })
}
// test('Probar async/await', async () => {
//   const string = await reverseString2('string')
//   expect(string).toBe('aloH')
// })
