import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Third extends React.Component<{}, {}> {

    public componentWillMount() {
        console.log('third: component will mount');
    }

    public componentDidMount() {
        console.log('third: component did mount');
    }

    public componentWillUpdate() {
        console.log('third: component will update');
    }

    public componentDidUpdate() {
        console.log('third: component did update');
    }

    public componentWillReceiveProps() {
        console.log('third: component will receive props');
    }

    public componentWillUnmount() {
        console.log('third: component will unmount');
    }

    public render() {
        console.log('render third');
        return <div>
            3
        </div>;
    }
}

class Second extends React.Component<{}, {}> {

    public componentWillMount() {
        console.log('second: component will mount');
    }

    public componentDidMount() {
        console.log('second: component did mount');
    }

    public componentWillUpdate() {
        console.log('second: component will update');
    }

    public componentDidUpdate() {
        console.log('second: component did update');
    }

    public shouldComponentUpdate() {
        console.log('second: should component update');
        return false;
    }

    public componentWillReceiveProps() {
        console.log('second: component will receive props');
    }

    public componentWillUnmount() {
        console.log('second: component will unmount');
    }

    public render() {
        console.log('render second');
        return <div>
            2
            <Third />
        </div>;
    }
}

class First extends React.Component<{
    showSecond: boolean,
}, {}> {

    public componentWillMount() {
        console.log('first: component will mount');
    }

    public componentDidMount() {
        console.log('first: component did mount');
    }

    public componentWillUpdate() {
        console.log('first: component will update');
    }

    public componentDidUpdate() {
        console.log('first: component did update');
    }

    public componentWillReceiveProps() {
        console.log('first: component will receive props');
    }

    public render() {
        console.log('render first');
        return <div>
            1
            {this.props.showSecond ? <Second /> : null}
        </div>;
    }
}



// ReactDOM.render(<First showSecond={true} />, document.querySelector('main'));

// setTimeout(() => {
//     console.log('re-rendering');
//     ReactDOM.render(<First showSecond={false} />, document.querySelector('main'));
// }, 5000);
