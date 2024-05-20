/* <div id="root">
    <div id="parent"></div>
    <div id="child">
        <h1>Hello World</h1>    
        <h2>Hello World</h2>    
    </div>
    <div id="child2">
        <h1>H1 tag</h1>
        <h2>H2 tag</h2> 
    </div>
</div>
  */

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Hello World"),
    React.createElement("h2", { id: "heading2" }, "Hello World2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading1" }, "Hello World"),
    React.createElement("h2", { id: "heading2" }, "This is Heading 2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
