import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';


export default function Rostering() {
    // Get the current date
const today = new Date();

// Get the year, month, and day
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');

// Format the date as YYYY-MM-DD
const currentDate = `${year}-${month}-${day}`;

  return (
    <div className='px-12 py-2'>

    <Paper>
    <Scheduler
    >
      <ViewState
        currentDate={currentDate}
      />
      <MonthView />
      <Appointments />
    </Scheduler>
  </Paper>
  </div>
  )
}
