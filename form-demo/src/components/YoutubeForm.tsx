import React from "react";

import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;
type FormValues = {
  username: string;
  email: string;
  channel: string;
};
const YoutubeForm = () => {
  const form = useForm<FormValues>();
  const { register, control, handleSubmit } = form;

  //the below commented part are the elaborated syntax to hook the state in the form fields

  //while using register
  // const { name, ref, onChange, onBlur } = register("username");

  renderCount++;

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data);
  };

  return (
    <div>
      <h1>Youtube Form ({renderCount / 2})</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        {/* <input
          type="text"
          id="username"
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
        /> */}

        <input type="text" id="username" {...register("username")} />

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")} />

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default YoutubeForm;
