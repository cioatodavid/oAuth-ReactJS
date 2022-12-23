import { Table, Badge, Checkbox, Button } from "react-daisyui"
import { EnumDate } from "../utils/EnumDate"


type TableRowProps = {
  date: string,
  startTime: string,
  startBreak?: string,
  endBreak?: string,
  endTime?: string,
  total: string,
}


export function Calendar() {
  return (
    <div className="bg-base-300 p-10 grow">
      <Table align="center" zebra className="rounded-box">
        <Table.Head>

          <span>Date</span>
          <span>shift start</span>
          <span>start of break</span>
          <span>break</span>
          <span>end of shift</span>
          <span>Status</span>
          <span>Total</span>
          <span />
        </Table.Head>
        <Table.Body>
          <TableRow date="2022-12-23" startTime="09:00" startBreak="12:00" endBreak="13:00" endTime="18:00" total="05:00" />
          <TableRow date="2022-12-22" startTime="09:00" endTime="12:00" total="03:00" />
          <TableRow date="2022-12-21" startTime="09:00" endTime="12:00" total="03:00" />
          <TableRow date="2022-12-20" startTime="09:00" endTime="12:00" total="03:00" />

        </Table.Body>
      </Table>
    </div >
  )
}

function TableRow({ date, startTime, startBreak, endBreak, endTime, total }: TableRowProps) {

  const isOpen: boolean = endTime ? false : true
  const dateObj = new Date(date.replace(/-/g, '/'));
  const monthAndDay = dateObj.toLocaleDateString('pt-BR', { month: 'numeric', day: 'numeric' });
  const dayOfWeek = dateObj.getDay()


  return (
    <Table.Row>
      <div className="flex items-center space-x-3 truncate">
        <div>
          <div className="font-bold">{monthAndDay}</div>
          <div className="text-xs opacity-60">{EnumDate[dayOfWeek]}</div>
        </div>
      </div>

      <div className="font-semibold">{startTime}</div>

      <div className="font-semibold">{startBreak ?? '...' }</div>

      <div className="font-semibold">{endBreak ?? '...'}</div>

      <div className="font-semibold">{endTime ?? '...'}</div>

      <Badge variant="outline" color={isOpen ? 'success' : 'error'} size="sm">
        {isOpen ? "Open" : "Closed"}
      </Badge>

      <div className="font-semibold">{total}</div>

      <Button color="ghost" size="sm">
        details
      </Button>
    </Table.Row>
  )
}