import React, { useState } from "react";
import './Form.css'

export function Form(props){


  function handleSubmission(e){
    e.preventDefault();
    const input_field = document.querySelector("input");

    props.fetchWeather(input_field.value)
    input_field.value=''

  }

  return (
    <form className="search" onSubmit={handleSubmission}>
      <input type='text' autoFocus></input>
      <svg onClick={handleSubmission} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>
      <input type="submit" hidden></input>
    </form>
  )
}