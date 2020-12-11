import Nav from './nav';

const navItems = [
  { title: 'Kitchen Sink', url: '/' },
  { title: 'Nothing Scheduled', url: '/blank' },
];

const Layout = ({ children, ...rest }) => (
  <div className="app" {...rest}>
    <Nav navItems={navItems} />
    {children}
  </div>
);

export default Layout;
