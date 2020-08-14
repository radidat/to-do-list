import React, {Component, PureComponent}from'react';

import './App.css';

class Add extends Component{
   
        constructor (props){
          super(props)
          
           
         this.handleChangeInput = this.handleChangeInput.bind(this)
        }
      
       
   handleChangeInput(e){
     this.props.onChange(e.target.value)
     
  }
 
   
  render(){
  return<div className='inputhead'>
      <input type='text' name='newtask' value ={this.props.value} onChange={this.handleChangeInput} className='newtask' placeholder='ajouter une nouvelle tâche' ></input>
      <button type='submit'  className="addtask" disabled ={!this.props.value} onClick ={this.props.handleSubmit}>Ajouter</button>
    </div>
  }
}



class List extends PureComponent{
          
         
  render(){
    let list = this.props.list.slice()

     let tasks = list.map((element, index)=>{
         return<div className ='list' key={ index}>
    <input type ="checkbox" className ='check'></input>
<label className ='task-words' >{element}</label>
<button type='button' className ='button-delete' onClick = {(index)=>this.props.onDelete(index)}>Supprimer</button>
  </div>

      })
    return(
      <div>
        {tasks}
      </div>
    )
  }
}

class App extends Component{
  constructor (props){ 
    super(props)
    this.state= { 
      value:'',
      list : [],
    }
    this.handleChange= this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handledeleteTask = this.handledeleteTask.bind(this)
    
  }
  handleChange(inputTask){ 
    this.setState({ value: inputTask })
  }
  handleSubmit(){ 
  
    const list = [...this.state.list];
    list.push(this.state.value);
    this.setState({ list, value:''});
  
    }

    
  handledeleteTask(index){ 
    let deleteTasks = this.state.list.slice()
     deleteTasks.splice(index,1)
     this.setState({ list: deleteTasks})
     
     
 
  }
 

  render(){
    return(<div className="app">
      <h1>Chose à faire</h1>
       <Add value ={this.state.value} onChange={this.handleChange} handleSubmit ={this.handleSubmit}  />
       <List list ={this.state.list} onDelete ={this.handledeleteTask}/>
    </div>
  );
  }
}

export default App;
