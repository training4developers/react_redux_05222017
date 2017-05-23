import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'bootstrap-loader';

import { Color } from './models/color';
import { ColorTool } from './components/color-tool';

interface MyAppProps {
    colors: Color[];
}

class MyApp extends React.Component<MyAppProps, {}> {

    public render() {

        return <ColorTool colors={this.props.colors} />;
    }
}


const colorList = [
    { id: 1, name: 'red' },
    { id: 2, name: 'white' },
    { id: 3, name: 'yellow' },
    { id: 4, name: 'blue' },
    { id: 5, name: 'gold' },
    { id: 6, name: 'green' },
];

ReactDOM.render(<MyApp colors={colorList} />, document.querySelector('main'));
// ReactDOM.render(<CarTool cars={carList} />, document.querySelector('main'));

