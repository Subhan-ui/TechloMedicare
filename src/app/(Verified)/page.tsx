import { authOptions } from "@/lib/AuthOptions";
import { getServerSession } from "next-auth";

import Text from "@/components/topText/TopText";
import Cards from "@/components/cards/Cards";
import UpcomingSchedule from "@/components/upcomingSchedule/UpcomingSchedule";
import Tasks from "@/components/tasks/Tasks";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <div className="px-[12.4px]  max:w-[1152px] box-border max:pl-[26.48px]">
        <Text ml="">Dashboard {">"} Summary</Text>
        <Cards email={session?.user?.email} />
        <div className="flex max:flex-row max:gap-[19.61px] flex-col ">
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
