import { useState } from "react"
import { Swap, Tooltip, useTheme } from "react-daisyui"
import { CgSun, CgMoon } from "react-icons/cg"

type SidebarFooterProps = {
  changeTheme: () => void,
  currentTheme: string
}

export function Sidebar() {

  const [currentTheme, setCurrentTheme] = useState('light')

  



  const handleTheme = () => {
    if (currentTheme === "light") {
      setCurrentTheme("dark")
      document.getElementsByTagName("html")[0].setAttribute("data-theme", "dark")
    } else {
      setCurrentTheme("light")
      document.getElementsByTagName("html")[0].setAttribute("data-theme", "light")
    }

  }

  return (
    <div className="bg-base-100 rounded-box mb-2 flex flex-col justify-between">
      <SidebarBody />
      <SidebarFooter changeTheme={handleTheme} currentTheme={(currentTheme[0].toUpperCase() + currentTheme.slice(1)).toString()} />
    </div>
  )
}

function SidebarBody() {
  return (
    <ul className="menu bg-base-100 p-2 items-center grow-0">
      <li>
        <div className="tooltip tooltip-right" data-tip="Home">
          <a>
            <CgMoon />
          </a>
        </div>

      </li>

    </ul>
  )
}



function SidebarFooter({ changeTheme, currentTheme }: SidebarFooterProps) {
  return (
    <Tooltip message={currentTheme} position="right">
      <Swap className="text-xl p-4" onElement={<CgMoon />} offElement={<CgSun />} rotate
        onMouseDown={changeTheme} />
    </Tooltip>

  )
}