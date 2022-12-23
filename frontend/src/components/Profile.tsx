import { Avatar, Divider, Badge, Checkbox, Table } from "react-daisyui"

type ProfileInfoProps = {
  name: string,
  title: string,
  avatar: string
}

type TaskProps = {
  title: string
  checked?: boolean
}


export function Profile() {
  return (
    <div className="bg-base-300 p-10 flex flex-col w-96 max-w-sm items-center">
      <ProfileInfo name="David Cioato" avatar="https://avatars.githubusercontent.com/u/55272383?s=200" title="Software Enginner" />
      <div className="flex flex-col gap-2 mt-12 w-full">
        <h1 className="text-3xl ">Notes</h1>
        <Divider />

        
      </div>
    </div>
  )
}


function Task({ title, checked }: TaskProps) {
  return (
    <div className="flex gap-4 items-center">
      <Checkbox size="xs" color="primary" defaultChecked={checked} />
      <p className="text-base-">{title}</p>
    </div>

  )
}



function ProfileInfo({ name, title, avatar }: ProfileInfoProps) {
  return (
    <div className="flex gap-4 items-center rounded-box w-full  justify-center p-3">
      <Avatar size="sm" shape="circle" src={avatar} />
      <div>
        <h1 className="text-lg mb-1 font-semibold">
          {name}
        </h1>
        <p className="text-xs uppercase text-zinc-400 tracking-wider text-base-">
          {title}
        </p>
      </div>
    </div>
  )
}