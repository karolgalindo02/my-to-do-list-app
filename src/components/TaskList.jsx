import React, { useState } from "react";
import Checkbox from "./Checkbox";

const TaskList = (props) => {
  const { list, setList } = props;

  const onChangeStatus = (e) => {
    const { name, checked } = e.target;

    const updateList = list.map((item) => ({
      ...item,
      done: item.id === name ? checked : item.done,
    }));
    setList(updateList);
  };

  const onClickRemoveItem = (e) => {
    const updateList = list.filter((item) => !item.done);
    setList(updateList);
  };

  const [isSoundPlaying, setIsSoundPlaying] = useState(false);

  const playSound = () => {
	setIsSoundPlaying(true);
	const audio = new Audio("public/all-done.mp3");
	audio.oncanplay = () => {
	  audio.play();
	};
	audio.onended = () => setIsSoundPlaying(false);
  };

  const handleDeleteDoneClick = () => {
    onClickRemoveItem();
    playSound();
  };

  const chk = list.map((item) => (
    <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
  ));
  return (
    <div className="todo-list">
      {list.length ? chk : "No tasks"}
      {list.length ? (
        <p>
          {}
          <button className="button blue" onClick={handleDeleteDoneClick}>
            Delete all done
          </button>
        </p>
      ) : null}
    </div>
  );
};

export default TaskList;