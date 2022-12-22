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
    <div className="bg-base-300 p-10 flex flex-col w-96 items-center">
      <ProfileInfo name="David Cioato" avatar="https://avatars.githubusercontent.com/u/55272383?s=200" title="Software Enginner" />
      <div className="flex flex-col gap-2 mt-12 w-full">
        <h1 className="text-3xl ">Tasks for today</h1>
        <Divider />

        <Table className="w-full rounded-box">
          <Table.Head>
            <span>Status</span>
            <span>Task</span>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <span>Done</span>
              <span>Quality Control Specialist</span>
            </Table.Row>
          </Table.Body>
        </Table>


        {/*<div className="flex flex-col gap-10 max-h-full overflow-y-auto ">
          <Task title="Task 1" checked />
          <Task title="Task 2" />
          <Task title="Task 3" />
          <Task title="Task 4" />
          <Task title="Task 5" />
          <Task title="Task 5" />
          <Task title="Task 5" />
          <Task title="Task 5" />
          <Task title="Task 5" />
          <Task title="Task 5" />
          <Task title="Task 5" />
          <Task title="Task 50" />
          <Task title="Task 500" />

        </div>*/}
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