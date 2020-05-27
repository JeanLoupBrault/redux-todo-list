import React from 'react';
import TodoList from './components/todoList';
import './App.css';
import AddTodo from './components/AddTodo';
import MainPage from './components/MainPage';
import VisibilityFilter from './components/visibilityFilter';
import { Provider } from 'react-redux';
import store from './store';
import styled from 'styled-components';
import Header from './Header/Header';
import { BrowserRouter, Switch, Route } from "react-router-dom";

const filters = ['all', 'completed', 'incomplete'];

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <AddTodo />
          </Route>
          <Route path="/todo">
            <MainPage />
          </Route>

          <Wrapper>
            <Header1>TODO Managers</Header1>
            <div className="App">

              <AddTodo />
              <TodoList todos={[{ content: 'Task 1' }, { content: 'Task 2' }]} />
              <VisibilityFilter filters={filters} />
            </div>
          </Wrapper>

        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

const Header1 = styled.h1`
font-family: 'Montserrat', sans-serif;
padding-left: 200px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  font-size: 18px;
  option {
    font-size: 18px;
  }
`;
const SelectContainer = styled.div`
  width: 400px;
  background-color: white;
  height: 96px;
  margin-top: 105px;
  margin-right: 560px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 10px 20px;
`;

const StyledList = styled.li`
  width: 300px;
  height: 40px;
  font-size: 18px;
  option {
    font-size: 18px;
  }
`;

export default App;
