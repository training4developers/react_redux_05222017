import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'bootstrap-loader';
import '../scss/styles.scss';

class HelloWorld extends React.Component<{}, {}> {

    public render() {

        return <h1>Hello World!</h1>;
    }
}

ReactDOM.render(<HelloWorld />, document.querySelector('main'));

