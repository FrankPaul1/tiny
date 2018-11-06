/* eslint-disable */
export function compile(str, options) {
  return (data) => {
    const templ = str.replace(/<%= ([^<%>]*) %>/g, (s, matched) => matched);
    const compl = new Function(...Object.keys(data), `return ${templ}`);
    return compl(...Object.values(data))
  };
}

export function render(str, data = {}, options = {}) {
  return compile(str, options)(data);
}
