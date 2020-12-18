import Layout from '../components/layout';
import MiniCalendar from '../components/mini-calendar';

const today = '2020-11-23';
const datesWithEvents = [];
const datesNotAvailable = [];

export default function Home() {
  return (
    <Layout>
      <MiniCalendar today={today} datesNotAvailable={datesNotAvailable} datesWithEvents={datesWithEvents}>
        <div className="ba-mc__schedule__events--hasNoEvents">Nothing Scheduled</div>
      </MiniCalendar>
    </Layout>
  );
}
