import React from "react";

import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
const YoutubeForm = () => {
  const form = useForm();
  const { register } = form;

  //the below commented part are the elaborated syntax to hook the state in the form fields

  //while using register
  // const { name, ref, onChange, onBlur } = register("username");

  return (
    <div>
      <form>
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
      <DevTool />
    </div>
  );
};

export default YoutubeForm;
