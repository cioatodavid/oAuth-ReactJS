import { Calendar } from "../components/Calendar"
import { Sidebar } from "../components/Sidebar"
import { Profile } from "../components/Profile"




export function HomePage() {
  return (
    <div className="flex flex-row-reverse grow h-full">
      <Calendar />
      {/*<Profile />*/}
      <Sidebar />
    </div>
  )
}

