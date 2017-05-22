import * as React from 'react';

interface ColorToolProps {
    colors: string[];
}

export class ColorTool extends React.Component<ColorToolProps, {}> {

    public render() {

        return <div>
            <header>
                <h1>Color Tool</h1>
            </header>
            <ul>{this.props.colors.map( (color) => <li>{color}</li> )}</ul>
        </div>;
    }
}