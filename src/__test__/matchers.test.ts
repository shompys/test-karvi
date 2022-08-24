describe('matchers', () => {
  const obj = {
    id: 1,
    social: [{ name: 'facebook' }, { name: 'google' }],
    lala: {
      lele: {
        lili: ':)'
      }
    }
  }
  it('toEqual para objetos y arrays', () => {
    expect(obj).toEqual({
      id: 1,
      social: [{ name: 'facebook' }, { name: 'google' }],
      lala: {
        lele: {
          lili: ':)'
        }
      }
    })
  })
})
