import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/AuthOptions";

import Text from "@/components/topText/TopText";
import Table from "@/components/scheduleTable/ScheduleTable";

const Schedule = async () => {
  const session = await getServerSession(authOptions);
  return (
    <>
      <div className="maxi:w-[78vw]">
        <Text ml="29px">Schedule </Text>
        <Table name={session?.user?.name} email={session?.user?.email} />
      </div>
    </>
  );
};

export default Schedule;
