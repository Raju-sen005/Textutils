import React from "react";

function Alert(props) {
  const cap = (word) => {
    //[This function is used because the First character change in to the Uppercase.]
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong> {cap(props.alert.type)}</strong>:{props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
