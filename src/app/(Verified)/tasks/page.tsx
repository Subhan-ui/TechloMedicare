import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/AuthOptions";

import Text from "@/components/topText/TopText";
import Tasks from "@/components/tasks/Tasks";

const TaskPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <Text ml="23px">Dashboard {">"} Tasks</Text>
      <div className="maxi:w-[77.8vw] maxi:block md:w-[calc(100vw-260px)] max:w-[1116px] w-[calc(100vw-34px)] h_center h-[80vh] ml-[23px] -pt-">
        <Tasks email={session?.user?.email} />
      </div>
    </div>
  );
};

export default TaskPage;
