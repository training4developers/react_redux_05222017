import * as React from 'react';

interface ToolHeaderProps {
    headerText: string;
}

export class ToolHeader extends React.Component<ToolHeaderProps, {}> {

    public render() {
        return <header>
            <h1>{this.props.headerText}</h1>
        </header>;
    }

}
