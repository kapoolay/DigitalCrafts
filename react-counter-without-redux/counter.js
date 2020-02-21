class Counter extends React.Component {

    constructor(props) {
        
        super(props)

        console.log("constructor called")
        this.state = {
            value: 0
        };
    }

    sayHello() {
        console.log("Hello");
    }

    handleClick() {
        let newState = {
            value: this.state.value + 1
        }

        this.setState(newState);
        console.log('newState', newState);
        console.log("you clicked me!");
    }

    render() {
        console.log("rendering");
        console.log(this.state.value);
        return (
        <div>
            <span>{this.state.value}</span>
            <button onClick={() => this.handleClick()}>count</button>
        </div>
        )
    }
}