import { Main } from "../components/Main"
import { Sidebar } from "../components/Sidebar"
import { Profile } from "../components/Profile"




export function HomePage() {
  return (
    <div className="flex flex-row grow h-full">
      <Sidebar />
      <Main />
      <Profile />
    </div>
  )
}

