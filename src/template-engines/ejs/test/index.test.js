import { render, compile } from '..';

describe('[ejs]: test for the render method', () => {
  test('render will exec js syntax', () => {
    const people = ['geddy', 'neil', 'alex'];
    const html = render('<%= people.join(", "); %>', { people });
    expect(html).toBe('geddy, neil, alex');
  });
});

describe('[ejs]: test for the compile method', () => {
  const template = 'Hello World';
  test('compile method will string and return a function', () => {
    expect(typeof compile(template)).toBe('function');
  });

  test('compile method will equal render exec', () => {
    const people = ['geddy', 'neil', 'alex'];
    const str = '<%= people.join(", "); %>';
    expect(compile(str)({ people })).toBe(render(str, { people }));
  });
});
