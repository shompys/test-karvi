import { sumar, restar } from '../index'

describe('Ejemplos', () => {
  beforeAll(() => console.log('Antes de que se ejecuten todos los test'))
  beforeEach(() => console.log('Antes de que se ejecute cada test'))
  afterEach(() => console.log('Despues de cada test'))
  afterAll(() => console.log('Despues de todos los test'))
  it('Sumar', () => {
    const result = sumar(1, 2)
    expect(result).toBe(3)
  })
  it('Restar', () => {
    const result = restar(2, 2)
    expect(result).toBe(0)
  })
})
