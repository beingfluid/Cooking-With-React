import React, { Component } from 'react';
import { ThemeContext } from "./App";

export default class Counter extends Component {

    constructor ( props ) { 
        super( props );
        
        this.state = {
            count: props.initialCount
        };
    }

    render () {
        console.log( "Render Counter" );
        return (
            <ThemeContext.Consumer>
                { style => (
                     <div>
                        <button style={style} onClick={()=>this.changeState(-1)}>-</button>
                        <span>{this.state.count}</span>
                        <button style={style} onClick={()=>this.changeState(1)}>+</button>
                    </div>
                )}
            </ThemeContext.Consumer>
  );
    }
    changeState ( ammount ) {
        // this.setState({count:this.state.count+ammount});
        this.setState( prevState => {
            return {count:prevState.count+ammount}
        } ); 
    }
}
