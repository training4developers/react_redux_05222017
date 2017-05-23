import * as React from 'react';
import * as PropTypes from 'prop-types';

interface ToolHeaderProps {
    headerText?: string;
}

export class ToolHeader extends React.Component<ToolHeaderProps, {}> {

    public static propTypes = {
        headerText: PropTypes.string.isRequired,
    };

    public static defaultProps = {
        headerText: 'Some Header Text',
    };

    public render() {
        return <header>
            <h1>{this.props.headerText}</h1>
        </header>;
    }

}
