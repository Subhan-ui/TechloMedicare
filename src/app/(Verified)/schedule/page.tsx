import Text from "@/components/commonContent/TopText";
import Table from "@/components/schedule/Table";
import { authOptions } from "@/lib/AuthOptions";
import { getServerSession } from "next-auth";



const Schedule =async ()=>{
  const session = await getServerSession(authOptions)
    return (
        <div>
        
        <Text ml='29px'>Schedule {" "}</Text>
        
      <Table name={session?.user?.name} email={session?.user?.email}/>
        </div>
    )
}

export default Schedule;