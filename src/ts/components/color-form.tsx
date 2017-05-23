import * as React from 'react';

import { FormState } from '../models/form-state';
import { FormControlEvent } from '../models/form-control-event';

interface ColorFormProps {
    emitColor: (color: string) => void;
}

interface ColorFormState extends FormState {
    newColor: string;
}

export class ColorForm extends React.Component<ColorFormProps, ColorFormState> {

    constructor(props: any) {
        super(props);

        this.state = {
            newColor: '',
        };
    }

    public render() {
        return <form>
            <div>
                <label htmlFor="new-color-input">New Color</label>
                <input type="text" id="new-color-input" name="newColor"
                    value={this.state.newColor} onChange={this.onChange} />
            </div>
            <button type="button" onClick={() => {
                    this.props.emitColor(this.state.newColor);
                    this.setState({
                        newColor: '',
                    });
            }}>
                Add Color</button>
        </form>;
    }

    private onChange = (e: FormControlEvent) => {

        let value: any;

        switch (e.target.type) {
            case 'checkbox':
                value = (e.target as HTMLInputElement).checked;
            case 'number':
                value = Number(e.target.value);
            default:
                value = e.target.value;
        }

        this.setState({
            [ e.target.name ]: value,
        });

    }

    // private emitColor = () => {
    //     this.props.emitColor(this.state.newColor);
    // }

}