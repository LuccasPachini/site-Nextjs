import Link from 'next/link';

export function Header() {
  const links = [
    { label: 'Quem Somos', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <header className="hidden md:block bg-[#25a3f1]">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center">
          <nav className="flex-1 flex justify-center">
            <ul className="flex space-x-12 text-xl font-medium text-white">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="relative transition-transform duration-300 hover:scale-105 after:content-[''] after:block after:h-[2px] after:w-0 hover:after:w-full after:bg-white after:transition-all after:duration-300"
                    data-aos="fade-up"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
