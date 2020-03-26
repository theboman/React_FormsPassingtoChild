import React from "react";

export default function Child(props) {
  //props.reset.handlerResetState();
  const { firstName, lastName } = props.userNames;
  console.log(props);
  console.log("this is first name: " + firstName + lastName);
  return <div>Hello I am child!</div>;
}
