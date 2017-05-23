import * as React from 'react';

import { ListItem } from './list-item';

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
                (item, index, items) => <ListItem key={index} value={item[this.props.propName]} />,
            )}
        </ul>;
    }
}