import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function TodoForm(props) {
  const {
    updateList,
    handleComplete,
    handleClearAll
  } = props;

  const [state, setState] = useState({ inputText: '' });

  const classes = useStyles();

  const handleChange = (e) => {
    setState({
      inputText: e.target.value
    });
    // console.log(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.value === '') {
      console.log('THERE IS NO TASK ENTERED');
    } else {
      updateList(state.inputText);
      setState({
        inputText: ''
      });
    }
  };

  return (
    <>
      <StyledTaskOnboarding>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <div className="addInputs">
            <TextField
              id="outlined-basic"
              label="New Task"
              variant="outlined"
              value={state.inputText}
              onChange={handleChange}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              id="addButton"
            >
              Add
            </Button>
          </div>
          <div className="clearInputs">
            <Button
              variant="contained"
              color="primary"
              onClick={handleComplete}
            >
              Clear Completed
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClearAll}
            >
              Clear All
            </Button>
          </div>
        </form>
      </StyledTaskOnboarding>
    </>
  );
}

const StyledTaskOnboarding = styled.div`
  width: 80%;
  margin: 1rem auto;

  form {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .addInputs {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 50%;
  }
  #addButton {
    margin: 1%;
  }
  .clearInputs {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40%;
    padding: 0.5%;
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch'
    }
  }
}));
