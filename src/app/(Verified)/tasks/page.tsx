import Text from "@/components/text/TopText";
import Tasks from "@/components/tasks/Tasks";
import { authOptions } from "@/lib/AuthOptions";
import { getServerSession } from "next-auth";

const TaskPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <Text ml="23px">Dashboard {">"} Tasks</Text>
      <div className="font-mukta w-full center h-[80vh] ml-[23px] mt-[23px]">
        <Tasks email={session?.user?.email} />
      </div>
    </div>
  );
};

export default TaskPage;
