import style from "./Input.module.css";
const Input = ({ tipo, value, placeholder, onChangeHandler }) => {
    return <input
                className={style.buscador}
                type={tipo}
                value={value}
                placeholder={placeholder}
                onChange={onChangeHandler} 
            />;
  };
  
export default Input;