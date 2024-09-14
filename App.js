/* <div id="parrent">
     <div id="child">
        <h1>i am h1 tag</h1>
        <h1>i am h1 tag</h1>
     </div>
</div>
reactelement(object) => HTML(Browser Understand)
 */

const parent = React.createElement("div",
    { id: "parent" },[
    React.createElement("div",
        { id: "child" },
        [React.createElement("h1", {}, "I am h1 tag"),
            React.createElement("h2", {}, "I am h2 tag")]),
            React.createElement("div",
                { id: "child" },
                [React.createElement("h1", {}, "I am h1 tag"),
                    React.createElement("h2", {}, "I am h2 tag")])]
);



// const heading = React.createElement(
//     "h1",
//     {id :"heading"},
//     "Hello world from react");

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); 