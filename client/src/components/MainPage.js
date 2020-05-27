import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import styled from 'styled-components';


function AddTodo({ addTodo }) {
    const [value, setValue] = useState('');
    const [displayTodo, setDisplayTodo] = useState([]);

    useEffect(() => {
        const handleOnChange = (e) => {
            setValue(e.target.value)
        }

        const handleAdd = () => {
            addTodo(value)
            setValue('')

        }


        const handleSubmit = (e) => {
            e.preventDefault();
            handleAdd()
            fetch("/todo", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    value
                }),
            })
                .then((res) => res.json())
                .then((json) => {
                    console.log("json", json);
                    setDisplayTodo(json)
                })
                .catch((err) => {
                    console.log("message", err.message);
                });
        };


        return (
            <Wrapper>
                <SelectContainer>
                    <>
                        <Input type="text" onChange={handleOnChange} value={value} placeholder="Your text here" />
                        <StyledButton onClick={handleSubmit}>Add</StyledButton>

                    </>
                </SelectContainer>
                <WrapperDisplayTodo><strong>Display TODO list items from database</strong>
                    <div>

                        {displayTodo.map(item => {
                            return (
                                <>
                                    <div>
                                        {item.value}
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </WrapperDisplayTodo>
            </Wrapper>
        )
    }, []);
}


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

const StyledButton = styled.button`
  background: hsl(258deg, 100%, 50%);
  margin-left: 5px;
  font-size: 15px;
  border-radius: 5px;
  color: white;
  width: 100px;
  height: 40px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
`;

const WrapperDisplayTodo = styled.div`
    border-radius: 5px;
    width: 100%;
    height: 300px;
    background-color: grey;
    padding: 20px;
  `

export default connect(null, { addTodo })(AddTodo);
