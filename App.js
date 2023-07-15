

const heading = React.createElement(
  "div",
  { className: "container", id: "heading" },
  React.createElement(
    "h1",
    { className: "container", id: "heading" },
    "Hello World!"
  ),
  React.createElement(
    "h2",
    { className: "container", id: "heading" },
    "Hello World!"
  ),
  React.createElement(
    "h3",
    { className: "container", id: "heading" },
    "Hello World!"
  ),
  React.createElement(
    "h4",
    { className: "container", id: "heading" },
    "Hello World!"
  ),
  React.createElement(
    "h5",
    { className: "container", id: "heading" },
    "Hello World!"
  )
);


const subHeading = React.createElement(
  "div",
  { className: "container", id: "heading" },
  React.createElement(
    "h1",
    { className: "container", id: "heading" },
    "Hello World!"
  ),
  React.createElement(
    "h2",
    { className: "container", id: "heading" },
    "Hello World!"
  ),
  React.createElement(
    "h3",
    { className: "container", id: "heading" },
    "Hello World!"
  ),
  React.createElement(
    "h4",
    { className: "container", id: "heading" },
    "Hello World!"
  ),
  React.createElement(
    "h5",
    { className: "container", id: "heading" },
    "Hello World!"
  )
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([heading, subHeading]);
