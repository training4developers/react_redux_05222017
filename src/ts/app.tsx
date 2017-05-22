import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ColorTool } from './components/color-tool';

class MyApp extends React.Component<{}, {}> {

    public render() {

        // return React.createElement('div', null, 'Color Tool');

        return <ColorTool />;
    }
}

ReactDOM.render(<MyApp />, document.querySelector('main'));

