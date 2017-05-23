import * as React from 'react';

import { Color } from '../models/color';
import { FormControlEvent } from '../models/form-control-event';
import { FormState } from '../models/form-state';

import { ToolHeader } from './tool-header';
import { ItemList } from './item-list';
import { ColorForm } from './color-form';
import { DecoratedBox } from './decorated-box';

interface ColorToolProps {
    colors: Color[];
}

interface ColorToolState extends FormState {
    colors?: Color[];
}

export class ColorTool extends React.Component<ColorToolProps, ColorToolState> {

    constructor(props: ColorToolProps) {
        super(props);

        this.state = {
            colors: [], // this.props.colors.concat(),
        };
    }

    public componentDidMount() {

        fetch('http://localhost:3010/colors').then( (res) => res.json() ).then( (results) => {
            this.setState({
                colors: results,
            });
        } );

        setTimeout(() => {

            this.setState({
                colors: this.state.colors.slice(0, 1).concat(this.state.colors.slice(2)),
            });

        }, 3000);

        // fetch(url, {
        //    method: 'post',
        //    headers: {
        //        'Content-Type': 'application/json'
        //    },
        //    body: JSON.stringify(newCar)
        // }).then( (res) => res.json() ).then();

    }

    public render() {

        return <div>
            <ToolHeader headerText="Color Tool" />
            <ItemList items={this.state.colors} />
            <ColorForm emitColor={this.addColor} />
        </div>;
    }

    private addColor = (newColor: string) => {

        const color = {
            id: this.state.colors.reduce( (maxId, nextItem) =>
                Math.max(maxId, nextItem.id), 0) + 1,
            name: newColor,
        };

        this.setState({
            colors: this.state.colors.concat(color),
        });

    }
}
