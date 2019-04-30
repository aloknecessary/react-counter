import './App.css';
import React, { Component } from 'react';


class Counter extends Component {
    state = { 
        count: 0,
     }
     constructor(){
         super();
         this.handleIncrement = this.handleIncrement.bind(this);
         this.handleDecrement = this.handleDecrement.bind(this);
         this.reset = this.reset.bind(this);
     }
     
    render() { 
        return (
        <div className="parent-div">
          <p>Counter Sample - React</p>
            <span className={this.getBadgeClasses()} >{this.state.count}</span>
            <div className="action-buttons">
              <button className="btn btn-info btn-sm" onClick={this.handleDecrement}>Decrement</button>
              <button className="btn btn-light btn-sm inc-btn" onClick={this.reset}>Reset</button>
              <button className="btn btn-success btn-sm inc-btn" onClick={this.handleIncrement}>Increment</button>
            </div>
            
        </div>
        );
    }
    getBadgeClasses(){
        return "badge m-2 badge-style badge-" + (this.state.count === 0 ? 'warning' : this.state.count > 0 ? 'primary' : 'danger');
    }
    
    handleIncrement(){
        this.setState({
            count: this.state.count + 1
        })
    }

    handleDecrement(){
      this.setState({
          count: this.state.count - 1
      })
    }

    reset = () => {
        this.setState({count: 0 });
    }
}
 
export default Counter;