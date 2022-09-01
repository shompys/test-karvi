
const squads = ['jonathan', 'sebastian', 'antonella', 'jano', 'thomas', 'diego', 'hugo', 'gabriel', 'gonzalo', 'abe', 'abel', 'santiago', 'nombre inventado', 'xime', 'braian', 'otro inventado']

describe('Testeando los miembros de los Squads', () => {
  test('aca no trabaja José Ramirez', () => {
    expect(squads).not.toContain('José Ramirez')
  })
  test('deben ser mas de 15 developers', () => {
    expect(squads.length).toBeGreaterThan(15)
  })
})
