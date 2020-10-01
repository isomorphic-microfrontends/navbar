import React from "react";

export default function Root(props) {
  return (
    <section>
      {props.name} (overridden) is mounted! User {props.user.name}
    </section>
  );
}
