/*
todo: create the min & max
todo:  create error messager
todo: a little bit of jquery/ajax! 
*/

import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import * as $ from 'jquery';

//^ these asre for styled components

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Text = styled.p`
  margin: 0px 10px;
  color: #f9d65b;
  text-shadow: 2px 2px black;
  font-size: 40px;
`

const InputButton = styled.input`
  color: #f9d65b;
  background-color: #000000;
  font-size: 20px;
  border-color: #f9d65b;
`
const InputField = styled.input`
  width: 50%;
  color: #f9d65b;
  background-color: #000000;
  font-size: 20px;
  border-color: #f9d65b;
  padding: 10px;
  margin-top: 20px;
  margin-right: 15px;
  width: 60%;
  ;
`
const Form = ({setTimeLeft, setIsPaused}) => {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    $('#pomodoit-form').trigger("reset");
    setTimeLeft(data.minutes*60)
    setIsPaused(false);
  }

  return (
    <>
    <Container >
            <Text>How long will it take you?</Text>
            
          <form  noValidate onSubmit={handleSubmit(onSubmit)}  id="pomodoit-form">
              <InputField
                type="number"
                name="minutes"
                id="minutes-input" 
                {...register("minutes", {
                  required: {value: true, message: "Enter the number of minutes you want to focus for, please."},
                  min: {value: .01, message: "Please enter a number between 0.01 and 100."},
                  max: {value: 100, message: "Please enter a number between 0.01 and 100."},
                })} 
                
                placeholder="enter time in minutes."/> 
            
              <InputButton type="submit"></InputButton>
          {errors.minutes && <p>{errors.minutes.message}</p>}
          </form>
    </Container >
    </>

  )
}

export default Form