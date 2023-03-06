const Input = (props) => {
  const { title, type, onChange, defaultValue,maxlength } = props;
  return (
    <div className="mb-3">
      <label>{title}</label>
      <input
        onChange={onChange}
        defaultValue={defaultValue ? defaultValue : ""}
        type={type ? type : "text"}
        maxlength={maxlength}
        className="form-control"
      ></input>
    </div>
  );
};

export default Input;
