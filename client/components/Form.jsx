import React from "react";

const Form = (props) => {
  console.log('form props', props);
  return (
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="City" />
      <input type="text" name="country" placeholder="Country" />
      <button>Check Weather</button>
    </form>
  );
}
export default Form;