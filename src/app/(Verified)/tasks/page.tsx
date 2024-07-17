import Bar from "@/components/commonContent/TopBar";
import Text from "@/components/commonContent/TopText";
import Tasks from "@/components/tasksCard/Tasks";
import { Add } from "@/constants/react-icons";
import { authOptions } from "@/lib/AuthOptions";
import { getServerSession } from "next-auth";

const TaskPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <Text ml="23px">Dashboard {">"} Tasks</Text>
      <Bar classN="justify-between">
        <h1 className="font-mukta font-semibold text-xl">Tasks</h1>
        <div className="text-blue center font-mukta gap-2">
          New Task
          <Add className="border p-1 h-[30px] w-[30px]" size={24} />
        </div>
      </Bar>
      <div className="font-mukta w-full center h-[80vh] ml-[23px] mt-[23px]">
        <Tasks email={session?.user?.email} />
      </div>
    </div>
  );
};

export default TaskPage;
