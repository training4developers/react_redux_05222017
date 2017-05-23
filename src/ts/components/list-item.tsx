import * as React from 'react';

interface ListItemProps {
    value: string;
}

interface ListItemState {
    value: string;
}

export class ListItem extends React.Component<ListItemProps, ListItemState> {

    constructor(props: ListItemProps) {
        super(props);

        console.log('list item constructor executed');

        this.state = {
            value: props.value,
        };
    }

    public shouldComponentUpdate(nextProps: ListItemProps) {
        
        if (nextProps.value === this.props.value) {
            return false;
        }
        
        return true;
    }

    // public componentWillReceiveProps(nextProps: ListItemProps) {
    //     console.log(nextProps);

    //     this.setState({
    //         value: nextProps.value,
    //     });
    // }

    public render() {
        console.log('list item render: ' + this.props.value);
        return <li>{this.state.value} - {this.props.value}</li>;
    }
}
