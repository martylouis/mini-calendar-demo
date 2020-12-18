import Layout from '../components/layout';
import MiniCalendar from '../components/mini-calendar';
import BlockEvent from '../components/mini-calendar/blockEvent';
import DotEvent from '../components/mini-calendar/dotEvent';

const today = '2020-11-26';
const datesWithEvents = [2, 4, 5, 12, 13, 16, 17, 18, 19, 20, 26, 27];
const datesNotAvailable = [[6, 7, 8], 4, 11, 18, 25, [16, 17, 18, 19, 20, 21], 29];
// const datesNotAvailable = [];

export default function Home() {
  return (
    <Layout>
      <MiniCalendar today={today} datesNotAvailable={datesNotAvailable} datesWithEvents={datesWithEvents}>
        <BlockEvent>AH Thursday Meeting 1WS</BlockEvent>
        <BlockEvent responseNeeded>AH Friday Meeting 2WS Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur provident id amet molestiae autem sunt accusantium modi sit sequi ipsa!</BlockEvent>
        <BlockEvent type="task">Task Item 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eum.</BlockEvent>
        <BlockEvent type="notAvailable">Vacation Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, sint!</BlockEvent>
        <DotEvent time="2:30 – 3:00 PM">Plumbing Rough-In</DotEvent>
        <DotEvent responseNeeded time="2:30 – 3:00 PM">
          Plumbing Rough-In
        </DotEvent>
        <DotEvent time="4:30 – 5:00 PM">Electrical Rough-In Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut debitis nemo animi sint hic odit doloremque asperiores dolorem iste perferendis.</DotEvent>
      </MiniCalendar>
    </Layout>
  );
}
