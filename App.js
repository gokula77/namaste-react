const parent = React.createElement(
  "div",
  { id: "parent", className: "parent" },
  [
    React.createElement("div", { id: "child", className: "child" }, [
      React.createElement("h1", {}, "I'm a h1 tag"),
      React.createElement("h2", {}, "I'm a h2 tag"),
    ]),
    React.createElement("div", { id: "child", className: "child" }, [
      React.createElement("h1", {}, "I'm a h1 tag"),
      React.createElement("h2", {}, "I'm a h2 tag"),
    ]),
  ]
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World for React!"
// );

console.log(parent); // object

var root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);
