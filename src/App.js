import React, { Component } from 'react';
import s from './App.module.css';
import Header from './components/Header/Header';
import { createTodo } from './utils/creators';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      todos: [], 
    };

    this._inputRef = React.createRef();

    this.onChangeInputText = this.onChangeInputText.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  onChangeInputText(inputValue) {
    this.setState({ inputValue });
  }

  handleAddTodo() {
    const { inputValue } = this.state;

    if (inputValue.trim().length === 0) {
      return;
    }


    const todo = createTodo(this.state.inputValue);
    this.setState({
      inputValue: '',
      todos: [todo].concat(this.state.todos),
    });

    this._inputRef.current.focus();
  }

  render() {
    return (
      <div className={s.App}>
        <Header 
          inputRef={this._inputRef}
          value={this.state.inputValue}
          onChangeText={this.onChangeInputText}
          onClick={this.handleAddTodo}
        />

        <TodoList 
          
        />
      </div>
    );
  }

}

export default App;
