import React from "react";

function Alert(props) {
  const cap = (word) => {
    //[kisi word m first letter ko capitalize krne ke liye use function method is here.]
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong> {cap(props.alert.type)}</strong>:{props.alert.msg}
      </div>
    )
  );
}

export default Alert;
