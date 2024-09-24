import React from "react";

class ClassComponent extends React.Component {
    //클래스 컴포넌트가 마운트 될 때 constructor()를 호출
    constructor(props) {
        super(props);
        console.log("hi");
    }

    state = {
        count: 0
    };

    add = () => {
        console.log("add");
        this.setState(current => ({count: current.count + 1}));
    };

    minus = () => {
        console.log("minus");
        this.setState(current => ({count: current.count - 1}));
    };

    componentDidMount() {
        console.log("컴포넌트가 마운트 되었습니다.");
    }
    componentDidUpdate() {
        console.log("업데이트 됨");
    }
    componentWillUnmount() {
        console.log("컴포넌트 언마운트");
    }

    render() {
        console.log("렌더링 되었습니다.");
        return (
            <div>
                <h1>Class Component</h1>
                <h1>The number is {this.state.count} </h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    }
}

export default ClassComponent;