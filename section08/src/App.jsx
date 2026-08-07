import './App.css'
import Header from './components/Header.jsx'
import Editor from './components/Editor'
import List from './components/List'
import TodoItem from './components/TodoItem.jsx'

function App() {
  return (
    <div>
      <section><>Todo List</></section>
      <Header/>
      <Editor />
      <List />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
);
}

export default App
