import Text from "@/components/commonContent/TopText";
import Cards from "@/components/dashboard/Cards";
import UpcomingSchedule from "@/components/dashboard/UpcomingSchedule";
import Tasks from "@/components/tasksCard/Tasks";
import { authOptions } from "@/lib/AuthOptions";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="px-[28.4px]">
      <Text ml="">Dashboard {">"} Summary</Text>
      <Cards />
      <div className="flex justify-between">
        <Tasks email={session?.user?.email} />
        <UpcomingSchedule />
      </div>
    </div>
  );
}
