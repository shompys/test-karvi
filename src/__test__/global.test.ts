
describe('classroom 1', () => {
  const text = 'Hola Mundo'

  test('Debe contener un texto', () => {
    expect(text).toMatch(/Mundo/)
  })

  const username = 'jonathan'
  const email = 'jonathangomezit@gmail.com'
  const password = '12345678aA'

  test('Debe venir string en la variable username', () => {
    expect(typeof username).toBe('string')
  })

  test('email debe contener @ y no debe contener carácteres especiales', () => {
    expect(email).toMatch(/@/)
    //   expect(email).not.toMatch('{}') falta!!
  })

  test('Debe contener mas de 8 caracteres y una letra mayuscula', () => {
    expect(password.length).toBeGreaterThanOrEqual(8)
    expect(password).toMatch(/[A-Z]/)
  })
})
