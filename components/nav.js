import Link from 'next/link';

const Nav = ({ navItems }) => {
  return (
    <nav class="nav">
      {navItems.map(({ title, url }) => (
        <Link key={title} href={url}>
          <a className="nav__item">{title}</a>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
