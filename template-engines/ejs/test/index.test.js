const { test } = require('../index');

describe('[ejs]: test for jest', () => {
  it('test', () => {
    expect(test()).toBe('test')
  })
})
