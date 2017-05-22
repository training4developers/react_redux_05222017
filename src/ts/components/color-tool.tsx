import * as React from 'react';

export class ColorTool extends React.Component<{}, {}> {

    public render() {

        const colors = [
            'red', 'white', 'yellow', 'blue', 'gold', 'green',
        ];

        return <div>
            <header>
                <h1>Color Tool</h1>
            </header>
            <ul>{colors.map( (color) => <li>{color}</li> )}</ul>
        </div>;
    }
}