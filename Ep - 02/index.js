import React  from "react";
import ReactDOM from "react-dom";

const parent = React.createElement('div', {id: 'parent'}, 
    [
        React.createElement('div', {id: 'child1'}, 
            [
                React.createElement('h1', {id: "heading", className: "heading"}, "I'm Bhargav Talpada and i'm a React Developer."),
                React.createElement('h2', {id: "heading", className: "heading"}, "This is a Sibling of H1 tag.")
            ]
        ),
        React.createElement('div', {id: 'child2'}, 
            [
                React.createElement('h1', {id: "heading", className: "heading"}, "I'm Bhargav Talpada and i'm a React Developer."),
                React.createElement('h2', {id: "heading", className: "heading"}, "This is a Sibling of H1 tag.")
            ]
        )
    ]
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)
console.log(parent);