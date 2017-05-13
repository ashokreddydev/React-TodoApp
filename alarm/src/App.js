import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {reactLocalStorage} from 'reactjs-localstorage';

import 'react-datepicker/dist/react-datepicker.css';

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleTodo = this.handleTodo.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
    
  }

handleTodo (e) {
   this.setState({todo:e.target.value});
   
}

handleLogin() {
    console.log("Todo: " + this.state.todo);
    console.log("Date: " + this.state.startDate);
    var list={
              Todo:this.state.todo,
              Date: this.state.startDate
    }

    reactLocalStorage.setObject('setDataList', list);
    console.log(reactLocalStorage.getObject('setDataList'))
}


  render() {
    return <div>
   
    <form>
       <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
    />
          <input type="text" name="Todo" placeholder="Tod" value={this.state.todo} onChange={this.handleTodo} />
                    <button type="button" onClick={this.handleLogin}>Add Data</button>
        </form>
    </div>
  }
}

export default App;
