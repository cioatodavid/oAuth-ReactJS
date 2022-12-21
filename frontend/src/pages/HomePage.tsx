import { Main } from "../components/Main"
import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"




export function HomePage() {
  return (
    <div className="flex flex-row grow">
      <Sidebar />
      <div className="flex grow flex-col">
        <Navbar />
        <Main />
      </div>

    </div>
  )
}

