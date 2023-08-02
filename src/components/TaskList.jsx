import React from "react";
import Checkbox from "./Checkbox";

const TaskList = (props) => {
  // (C)
  const { list, setList } = props;

  const onChangeStatus = (e) => {
    const { name, checked } = e.target;
    
/*
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
*/
    // (E)
    const updateList = list.map((item) => ({
      ...item,
      done: item.id === name ? checked : item.done,
    }));
    setList(updateList);
  };

  // (D)
  const onClickRemoveItem = (e) => {
    const updateList = list.filter((item) => !item.done);
    setList(updateList);
  };

  // (A-2)
  const chk = list.map((item) => (
    <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
  ));
  return (
    <div className="todo-list">
      {/*(A-1)*/}
      {list.length ? chk : "No tasks"}
      {/*(B)*/}
      {list.length ? (
        <p>
          <button className="button blue" onClick={onClickRemoveItem}>
            Delete all done
          </button>
        </p>
      ) : null}
    </div>
  );
};

export default TaskList;
