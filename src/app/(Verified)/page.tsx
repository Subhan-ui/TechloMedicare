import Text from "@/components/topText/TopText";
import Cards from "@/components/cards/Cards";
import UpcomingSchedule from "@/components/upcomingSchedule/UpcomingSchedule";
import Tasks from "@/components/tasks/Tasks";
import { authOptions } from "@/lib/AuthOptions";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <div className="px-[12.4px] box-border max:pr-[27.46px] max:pl-[26.48px]">
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
