import Text from "@/components/commonContent/TopText";
import Cards from "@/components/dashboard/Cards";
import UpcomingSchedule from "@/components/dashboard/UpcomingSchedule";
import Tasks from "@/components/tasksCard/Tasks";

export default function Home() {
  return (
    <div className="px-[28.4px]">
      <Text ml=''>Dashboard {">"} Summary</Text>
      <Cards />
      <div className="flex justify-between">
      <Tasks />
      <UpcomingSchedule />
      </div>
    </div>
  );
}
