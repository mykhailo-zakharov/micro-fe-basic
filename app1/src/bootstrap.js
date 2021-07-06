// import { initSource } from "./app";

const navigationMap = {
  app2: {
    name: "app2",
    link: "/app2",
    title: "App 2",
    source: () => import('app2/bootstrap'),
  },
  app3: {
    name: "app3",
    link: "/app3",
    title: "App 3",
    source: () => import('app3/bootstrap'),
  }
};

const initSource = (name) => {
  const source = navigationMap[name].source;
  return source().then((module) => {
    module.default();
  })
}

const onCLick = (event) => {
  event.preventDefault();
  const name = event.target.dataset.name
  initSource(name);
};

document.querySelectorAll("#appNavigation a").forEach((node) => {
  node.addEventListener("click", onCLick)
})

export default true;
