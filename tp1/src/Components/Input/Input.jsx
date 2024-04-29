import style from "./Input.module.css"; //No se esta utilizando
const Input = ({
  tipo,
  value,
  placeholder,
  onChangeHandler,
  onKeyDown,
  classNameProp,
}) => {
  return (
    <input
      className={`${classNameProp}`}
      type={tipo}
      value={value}
      placeholder={placeholder}
      onChange={onChangeHandler}
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;
