import * as React from "react";
import * as ReactDOM from "react-dom";

class HelloWorld extends React.Component<{}, {}> {

    public render() {

        return <h1>Hello World!</h1>;
    }
}

ReactDOM.render(<HelloWorld />, document.querySelector("main"));

