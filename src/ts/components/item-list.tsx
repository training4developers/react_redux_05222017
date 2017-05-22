import * as React from 'react';

interface ItemListProps {
    items: object[];
    propName?: string;
}

export class ItemList extends React.Component<ItemListProps, {}> {

    public static defaultProps = {
        propName: 'name',
    };

    public render() {
        return <ul>
            {this.props.items.map(
                (item) => <li>{item[this.props.propName]}</li>
            )}
        </ul>;
    }
}