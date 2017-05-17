import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {reactLocalStorage} from 'reactjs-localstorage';
import Time from 'react-time';
import './App.css';

import 'react-datepicker/dist/react-datepicker.css';


class App extends Component {

  constructor (props) {
    super(props)
        this.state = {
          startDate: moment(),
            todo:'',
        };
    this.handleChange = this.handleChange.bind(this);
    this.handleTodo = this.handleTodo.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
      
           this.state1 = {
             data: 
             [

             ]
           }

      
     
      var a=reactLocalStorage.getObject('setDataList');
     
      for (var i = 0; i < a.length; i++) {
            var list={
             
              Todo:a[i].Todo,
              Date: a[i].Date
    }
          
           this.state1.data.push(list);
          
  
        }
      
     
      
       
      
      
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
   
    var list={
             
              Todo:this.state.todo,
              Date: this.state.startDate
    }
    
  
    
    this.state1.data.push(list);
    const newState = this.state1.data;
    this.setState({data: newState})

    reactLocalStorage.setObject('setDataList',  this.state1.data);
    console.log(reactLocalStorage.getObject('setDataList'))
}

    
      delete(item){
    const newState = this.state1.data;
    if (newState.indexOf(item) > -1) {
      newState.splice(newState.indexOf(item), 1);
         reactLocalStorage.setObject('setDataList',  this.state1.data);
      this.setState({data: newState})
    }
  }

  render() {
      
       const listItem = this.state1.data.map((item,index)=>{
        return <div key={index}>
            <center>
       
          <table className="table table-bordered">
               <tbody>
                   <tr>
            <td><Time value={item.Date} format="YYYY/MM/DD" /></td>
            <td>{item.Todo}</td>
            
           <td> <button onClick={this.delete.bind(this, item)}>Delete</button></td>
         </tr>              
               </tbody>
            </table>
           </center>
            
            
           
      </div>
    })
      
    return <div>
   
    <form className="center_fields">
       <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
    />
          <input type="text" name="Todo" placeholder="Todo" value={this.state.todo} onChange={this.handleTodo} />
                    <button type="button" onClick={this.handleLogin}>Add Data</button>
        </form>
      
       {listItem}
    </div>
      
  }
}

export default App;
