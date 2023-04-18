import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./TasksInput.module.css";
import { useState } from "react";

const TasksInput = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const setTextHandler = (event) => {
    setText(event.target.value);
  };

  const setItemsHandler = () => {
    if (text !== "") {
      setItems([...items, text]);
      setText("");
    }
  };
  const deleteHandler = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <section className={classes[`tasks-list`]}>
      <Card>
        <div className={classes.input}>
          <input
            type="text"
            placeholder="Add task to list..."
            value={text}
            onChange={setTextHandler}
          />
          <input type="submit" onClick={setItemsHandler} value="ADD" />
        </div>
        <ul>
          {items.map((item, index) => (
            <li className={classes.task} key={index}>
              <span>{item}</span>

              <Button onClick={() => deleteHandler(index)} />
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default TasksInput;
