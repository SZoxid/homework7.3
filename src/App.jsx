import { useState } from "react";
import "../src/App.css";
import { MdDeleteOutline } from "react-icons/md";
import { IoCheckmarkSharp } from "react-icons/io5";

const init = [
  {
    id: 1,
    title: "Buy groceries",
    done: false,
  },
  {
    id: 2,
    title: "Walk the dog",
    done: true,
  },
  {
    id: 3,
    title: "Complete homework",
    done: false,
  },
  {
    id: 4,
    title: "Read a book",
    done: true,
  },
  {
    id: 5,
    title: "Exercise",
    done: false,
  },
];

export default function App() {
  const [todos, setTodos] = useState(init);
  const [text, setText] = useState("");

  const deleteTodo = (id) => {
    const newTodos = todos.filter((t) => {
      return t.id !== id;
    });

    setTodos(newTodos);
  };

  const addNewTodo = () => {
    const newTodo = {
      id: Date.now(),
      title: text,
      done: false,
    };

    const newTodos = [...todos];
    newTodos.push(newTodo);
    setTodos(newTodos);
    setText("");
  };

  const toggleDone = (id) => {
    const newTodos = todos.map((t) => {
      if (t.id === id) {
        return { ...t, done: !t.done };
      }
      return t;
    });
    setTodos(newTodos);
  };

  const undoneTodos = todos.filter((t) => !t.done);
  const doneTodos = todos.filter((t) => t.done);

  return (
    <div className="h-[729px] flex justify-center items-center">
      <div className="w-[530px] h-[670px] flex flex-col items-center rounded-[20px] bg-[#1D1825]">
        <div className="w-[80%] flex justify-between mt-[50px]">
          <input
            type="text"
            placeholder="Add a new task"
            value={text}
            onChange={(event) => setText(event.target.value)}
            className="w-[85%] h-[40px] rounded-[8px] border-[1px] border-[#9E78CF] bg-[#1D1825] text-[16px] font-normal text-[#777777] outline-none pl-[15px]"
          />
          <button
            disabled={text === ""}
            onClick={addNewTodo}
            className="w-10 h-10 flex bg-[#9E78CF] text-[#fff] text-[26px] rounded-[8px] items-center justify-center"
          >
            +
          </button>
        </div>
        <div className="w-[80%] mt-[40px]">
          <h1 className="text-[18px] font-normal text-[#fff] font-sans">
            Tasks to do -{" "}
            {undoneTodos.length > 0 ? undoneTodos.length : "Bo'sh"}
          </h1>
          <ul className="h-[250px] mt-[2px] text-[18px] font-medium text-[#9E78CF] overflow-y-scroll">
            {undoneTodos.map((t) => {
              return (
                <li
                  key={t.id}
                  className="w-[100%] h-[75px] flex bg-[#15101C] mt-4 rounded-md items-center justify-between pl-2 pr-2"
                >
                  <span> {t.title}</span>
                  <div className="flex justify-between w-[60px]">
                    <button onClick={() => toggleDone(t.id)}>
                      <IoCheckmarkSharp />
                    </button>
                    <button onClick={() => deleteTodo(t.id)}>
                      <MdDeleteOutline className="w-[25px] h-[25px]" />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-[80%] mt-[20px]">
          <h2 className="text-[18px] font-normal text-[#fff] font-sans">
            Done - {doneTodos.length > 0 ? doneTodos.length : "Bo'sh"}
          </h2>
          <ul className="h-[200px] mt-[2px] text-[18px] font-medium text-[#9E78CF] overflow-y-scroll">
            {doneTodos.map((t) => {
              return (
                <li
                  key={t.id}
                  className="w-[100%] h-[75px] flex bg-[#15101C] mt-4 rounded-md items-center justify-between pl-2 pr-2"
                >
                  <span> {t.title}</span>
                  <div className="flex justify-between w-[60px]">
                    <button onClick={() => toggleDone(t.id)}>
                      <IoCheckmarkSharp />
                    </button>
                    <button onClick={() => deleteTodo(t.id)}>
                      <MdDeleteOutline className="w-[25px] h-[25px]" />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
