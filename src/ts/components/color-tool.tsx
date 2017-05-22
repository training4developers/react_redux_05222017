import * as React from 'react';

import { Color } from '../models/color';
import { FormControlEvent } from '../models/form-control-event';
import { FormState } from '../models/form-state';

interface ColorToolProps {
    colors: Color[];
}

interface ColorToolState extends FormState {
    newColor?: string;
    colors?: Color[];
}

export class ColorTool extends React.Component<ColorToolProps, ColorToolState> {

    constructor(props: ColorToolProps) {
        super(props);

        this.state = {
            newColor: '',
            colors: this.props.colors.concat(),
        };

        // this.onChange = this.onChange.bind(this);
    }

    public render() {

        return <div>
            <header>
                <h1>Color Tool</h1>
            </header>
            <ul>{this.state.colors.map( (color) => <li>{color.name}</li> )}</ul>
            <form>
                <div>
                    <label htmlFor="new-color-input">New Color</label>
                    <input type="text" id="new-color-input" name="newColor"
                        value={this.state.newColor} onChange={this.onChange} />
                </div>
                <button type="button" onClick={this.onClick}>Add Color</button>
            </form>
        </div>;
    }

    private onChange = (e: FormControlEvent) => {
        this.setState({
            [ e.target.name ]: e.target.value,
        });
    }

    private onClick = () => {

        const color = {
            id: this.state.colors.reduce( (maxId, nextItem) =>
                Math.max(maxId, nextItem.id), 0) + 1,
            name: this.state.newColor,
        };

        this.setState({
            colors: this.state.colors.concat(color),
            newColor: '',
        });

    }
}
