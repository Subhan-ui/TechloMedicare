"use client";

import useTasks from "@/hooks/useTasks";
import Task from "../task/Task";
import TaskModal from "../tasksModal/TaskModal";
import Loader from "../ui/loader/Loader";
import { Add, Right } from "@/constants/react-icons";
import { emailType } from "@/types/types";

const Tasks: React.FC<emailType> = ({ email }) => {
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
      <div className="bg-white mt-[20px] maxi:w-[60%] max:w-[709px] overflow-y-scroll h-[611px] w-full ">
        <div className="v_center justify-between h-[61.78px] pl-[22px] pr-[16px]">
          <h5 className="font-bold text-base">Tasks</h5>
          <h4
            onClick={handleShow}
            className="v_center gap-2 text-blue font-semibold text-sm cursor-pointer"
          >
            New Tasks <Add size={24} />
          </h4>
        </div>
        {data?.length === 0 ? (
          <p className="h_center">You don't have any task yet..</p>
        ) : !loading ? (
          <div className="flex flex-col max:gap-[19px] gap-4 px-[16.65px]">
            {data?.map((task) => (
              <Task
                handleChange={handleChange}
                key={task?.id}
                id={task?.id}
                date={task?.date}
                title={task?.task}
                checked={task?.completed}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        ) : (
          <Loader />
        )}
        {data?.length > 5 && (
          <p className="mr-[16px] text-blue v_center justify-end pt-8 pb-9 gap-3">
            View all
            <Right
              className="border-2 ml-1 border-gray-300 h-[17.6px] w-[17.6px]"
              size={17}
            />
          </p>
        )}
      </div>
    </>
  );
};

export default Tasks;
