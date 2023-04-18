import { FaTrash } from 'react-icons/fa';
import classes from './Button.module.css'

function Button(props) {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <FaTrash />
    </button>
  );
}

export default Button