function customRender(reactElement, mainContainer) {
  //   const domElement = document.createElement(reactElement.type);
  //   domElement.innerHTML = reactElement.children;
  //   domElement.setAttribute("href", reactElement.props.href);
  //   domElement.setAttribute("target", reactElement.props.target);

  const element = document.createElement(reactElement.type);
  element.innerHTML = reactElement.children;

  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    element.setAttribute(prop, reactElement.props[prop]);
  }
  mainContainer.appendChild(element);
}

const reactElement = {
  type: "a",
  props: {
    href: "https:www.fb.com",
    target: "_blank",
  },
  children: "Click me to visit facebook",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
