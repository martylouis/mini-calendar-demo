import Layout from '../components/layout';
import MiniCalendar from '../components/mini-calendar';
import BlockEvent from '../components/mini-calendar/blockEvent';
import DotEvent from '../components/mini-calendar/dotEvent';

const today = '2020-11-11';
const datesWithEvents = [2, 4, 5, 11, 25];
const datesNotAvailable = [21, 28];

export default function Home() {
  return (
    <Layout>
      <MiniCalendar today={today} datesNotAvailable={datesNotAvailable} datesWithEvents={datesWithEvents}>
        <BlockEvent>AH Thursday Meeting 1WS</BlockEvent>
        <BlockEvent type="task">Task Item 1</BlockEvent>
        <DotEvent time="2:30 – 3:00 PM">Plumbing Rough-In</DotEvent>
        <DotEvent responseNeeded time="2:30 – 3:00 PM">
          Plumbing Rough-In
        </DotEvent>
      </MiniCalendar>
    </Layout>
  );
}
