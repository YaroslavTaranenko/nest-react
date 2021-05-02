"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dom_1 = require("react-dom");
const App = () => {
    const [text, setText] = React.useState({});
    React.useEffect(() => {
        fetch('/api/hello')
            .then((res) => res.json())
            .then((res) => setText(res.text));
    }, []);
    return React.createElement("h1", null, text);
};
react_dom_1.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=App.js.map