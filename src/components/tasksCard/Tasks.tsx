"use client";

import Task from "./Task";
import { Add, Right } from "@/constants/react-icons";

import useTasks from "@/hooks/useTasks";
import TaskModal from "./TaskModal";
import Loader from "../ui/Loader";

const Tasks: React.FC<{ email: string | undefined | null }> = ({ email }) => {
  const {
    data,
    loading,
    show,
    loadAdd,
    title,
    handleSubmit,
    handleChange,
    handleDelete,
    handleShow,
    handleTitle,
  } = useTasks({ email });
  return (
    <>
      {show && (
        <TaskModal
          title={title}
          handleTitle={handleTitle}
          handleShow={handleShow}
          handleSubmit={handleSubmit}
          loadAdd={loadAdd}
        />
      )}
      <div className="bg-white mt-[17px] w-[709px] px-[16.67px]">
        <div className="v_center justify-between h-[61.78px]">
          <h5 className="font-bold text-base font-mukta">Tasks</h5>
          <h4
            onClick={handleShow}
            className="v_center gap-2 font-mukta text-blue font-semibold text-sm cursor-pointer"
          >
            New Tasks <Add size={24} />
          </h4>
        </div>
        {!loading ? (
          <div className="flex flex-col gap-4">
            {data.map((task) => (
              <Task
                handleChange={handleChange}
                key={task.id}
                id={task.id}
                date={task.date}
                title={task.task}
                checked={task.completed}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        ) : (
          <Loader />
        )}
        <p className="font-mukta text-blue v_center justify-end py-9 gap-3">
          View all{" "}
          <Right
            className="border-2 border-gray-300 h-[17.6px] w-[17.6px]"
            size={17}
          />
        </p>
      </div>
    </>
  );
};

export default Tasks;
