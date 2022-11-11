/*
todo: create the min & max
todo:  create error messager
*/

import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

//^ these asre for styled components

const Container = styled.div`
  display: flex;
  justify-content: center;
`
const Text = styled.p`
  margin: 0px 10px;
`

const Form = () => {
  
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
    <Container >
            <Text>Minutes:</Text>
            
          <form  noValidate onSubmit={handleSubmit(onSubmit)}  id="pomodoro-form">
              <input 
                type="number"
                name="minutes"
                id="minutes-input" 
                {...register("minutes", {
                  required: {value: true, message: "Enter the number of minutes you want to focus for, please."},
                  min: {value: .01, message: "Please enter a number between 0.01 and 100."},
                  max: {value: 100, message: "Please enter a number between 0.01 and 100."},
                })} 
                
                placeholder="enter session length here!"/> 
            
              <input type="submit"></input>
          {errors.minutes && <p>{errors.minutes.message}</p>}
          </form>
    </Container >
    </>

  )
}

export default Form