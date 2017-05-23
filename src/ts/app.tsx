import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore, bindActionCreators, Action, Reducer, Dispatch, Unsubscribe } from 'redux';
import { Provider, connect } from 'react-redux';

enum ActionTypes {
    Add, Subtract,
}

interface AppState {
    result: number;
}

interface CalcAction extends Action {
    value: number;
}

const addActionCreator: (value: number) => CalcAction = (value) => ({ type: ActionTypes.Add, value });
const subtractActionCreator = (value: number) => ({ type: ActionTypes.Subtract, value });

const calcReducer: Reducer<AppState> = (state: AppState = { result: 0 }, action: CalcAction) => {

    switch (action.type) {
        case ActionTypes.Add:
            return Object.assign({}, state, { result: state.result + action.value });
        case ActionTypes.Subtract:
            return Object.assign({}, state, { result: state.result - action.value });
        default:
            return state;
    }
};

const store = createStore<AppState>(calcReducer);

interface CalculatorProps {
    add: (value: number) => CalcAction;
    subtract: (value: number) => CalcAction;
    result: number;
}

const mapStateToProps = (state: AppState) => ({ result: state.result });

const mapDispatchToProps = (dispatch: Dispatch<AppState>) => bindActionCreators({
    add: addActionCreator,
    subtract: subtractActionCreator,
}, dispatch);

// const connect = (mapStateToPropsFn: any, mapDispatchToPropsFn: any) => {

//     return (ComponentToWrap: any) => {

//         return class ContainerComponent extends React.Component<{ store: any }, {}> {

//             private storeUnsubscribe: Unsubscribe;
//             private dispatchProps: any;
//             private componentProps: any;

//             public componentWillMount() {

//                 this.dispatchProps = mapDispatchToPropsFn(this.props.store.dispatch);
//                 this.componentProps = Object.assign({}, this.dispatchProps,
//                     mapStateToPropsFn(this.props.store.getState()));
//             }

//             public componentDidMount() {

//                 this.storeUnsubscribe = this.props.store.subscribe(() => {
//                     this.componentProps = Object.assign({}, this.dispatchProps,
//                         mapStateToPropsFn(this.props.store.getState()));
//                     this.forceUpdate();
//                 });
//             }

//             public componentWillUnmount() {
//                 this.storeUnsubscribe();
//             }

//             public render() {
//                 return <ComponentToWrap {...this.componentProps} />;
//             }

//         };


//     };

// };

class Calculator extends React.Component<CalculatorProps, {}> {

    public render() {
        let calcInput: HTMLInputElement;
        return <div>
            <input type="number" defaultValue="0" ref={ (input) => calcInput = input } />
            <button onClick={() => this.props.add(Number(calcInput.value))}>Add</button>
            <button onClick={() => this.props.subtract(Number(calcInput.value))}>Subtract</button>
            <div>
                Result: {this.props.result}
            </div>
        </div>;
    }
}

const CalculatorContainer = connect(mapStateToProps, mapDispatchToProps)(Calculator);

ReactDOM.render(<Provider store={store}>
    <CalculatorContainer />
</Provider>, document.querySelector('main'));
