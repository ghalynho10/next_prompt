"use client";
import React from "react";
import { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.error("error");
  }, [error]);

  return (
    <div>
      <h1>ERROR</h1>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default Error;
