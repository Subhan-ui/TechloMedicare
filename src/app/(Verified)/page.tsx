import Text from "@/components/commonContent/TopText";
import Cards from "@/components/dashboard/Cards";
import UpcomingSchedule from "@/components/dashboard/UpcomingSchedule";
import Tasks from "@/components/tasksCard/Tasks";
import { authOptions } from "@/lib/AuthOptions";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <div className="med:px-[28.4px] px-[20px]">
        <Text ml="">Dashboard {">"} Summary</Text>
        <Cards email={session?.user?.email} />
        <div className="flex max:flex-row max:justify-between flex-col ">
          <Tasks email={session?.user?.email} />
          <UpcomingSchedule
            email={session?.user?.email}
            name={session?.user?.name}
          />
        </div>
      </div>
    </>
  );
}
