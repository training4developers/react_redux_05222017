import * as React from 'react';

export class DecoratedBox extends React.Component<{}, {}> {

    public render() {

        const colorToolHeaderText = 'Something Else!';

        return <section>
            <header>
                <h1>{colorToolHeaderText}</h1>
            </header>
            {this.props.children}
        </section>;

    }

}