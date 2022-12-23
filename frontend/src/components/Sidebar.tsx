import { useState } from "react"
import { Swap, Tooltip } from "react-daisyui"
import { IoSunny, IoMoon, IoSettings, IoBarChart, IoCalendar, IoDocument } from "react-icons/io5"

type SidebarFooterProps = {
  changeTheme: () => void,
  currentTheme: string
}

export function Sidebar() {


  const [currentTheme, setCurrentTheme] = useState("light")



  const handleTheme = () => {
    if (currentTheme === "light") {
      setCurrentTheme("dracula")
      document.getElementsByTagName("html")[0].setAttribute("data-theme", "dracula")
      localStorage.setItem("theme", "dracula")
    } else {
      setCurrentTheme("light")
      document.getElementsByTagName("html")[0].setAttribute("data-theme", "light")
      localStorage.setItem("theme", "light")
    }

  }

  return (
    <div className="bg-base-300 pb-2 flex flex-col justify-between">
      <SidebarBody />
      <SidebarFooter changeTheme={handleTheme} currentTheme={(currentTheme[0].toUpperCase() + currentTheme.slice(1)).toString()} />
    </div>
  )
}

function SidebarBody() {
  return (
    <ul className="menu text-xl p-2 items-center grow-0 gap-2">
      <li>
        <Tooltip message='Shift' position="right">
          <IoCalendar />
        </Tooltip>
      </li>

      <li>
        <Tooltip message='Notes' position="right">
          <IoDocument />
        </Tooltip>
      </li>
      <li>
        <Tooltip message='Statistics' position="right">
          <IoBarChart />
        </Tooltip>
      </li>
      <li>
        <Tooltip message='Settings' position="right">
          <IoSettings />
        </Tooltip>
      </li>

    </ul>
  )
}


function SidebarFooter({ changeTheme, currentTheme }: SidebarFooterProps) {
  return (
    <Tooltip message={currentTheme} position="right">
      <Swap className="text-xl p-4" onElement={<IoMoon />} offElement={<IoSunny />} rotate
        onMouseDown={changeTheme} />
    </Tooltip>
  )
}