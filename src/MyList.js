import React, {Component} from 'react'
import './App.css';
import ListItem from './ListItem.js'




class MyList extends Component {

  state={
    toDoItemArray: this.props.theList,
    newItem: ''
  }

  clearList (e) {
    console.log('Clearing List!')
    this.setState({
      toDoItemArray:[]
    })
  }

  newItemChange = (e) => {
    this.setState({
      newItem: e.target.value
    })
  }


  addItem = (e) => {
    console.log('Adding item!')
    e.preventDefault()
    this.setState({
      toDoItemArray: [...this.state.toDoItemArray, this.state.newItem]
    })
    console.log(this.state.toDoItemArray)
  }  
 

  render(){
    let toDoItems = this.state.toDoItemArray.map((item, index) => (
      <ListItem doThis={item} key={'todo' + index} />
    ))

    return(
      <div>
        <h1>Things I should stop procrasinating:</h1>
        <ul>
          {toDoItems}
        </ul>
        <button onClick={(e) => this.clearList(e)}>Finished the list!</button>
        <form>
          <input type="text"
          placeholder="Type an item here"
          onChange={(e) => this.newItemChange(e)}
          value={this.state.newItem}
          />
          <button onClick={(e) => this.addItem(e)}>Add it!</button>
        </form>
      </div>
    )
  }
}

export default MyList;
