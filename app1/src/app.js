export const initSource = (name) => {
  const source = navigationMap[name].source;
  return import(source).then((module) => {
    module.default();
  })
}
