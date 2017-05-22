import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'bootstrap-loader';

import { ColorTool } from './components/color-tool';

interface MyAppProps {
    colors: string[];
}

class MyApp extends React.Component<MyAppProps, {}> {

    public render() {

        return <ColorTool colors={this.props.colors} />;
    }
}


const colorList = [
    'red', 'white', 'yellow', 'blue', 'gold', 'green',
];

ReactDOM.render(<MyApp colors={colorList} />, document.querySelector('main'));

