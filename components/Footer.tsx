const navItems = [
  { id: 'about', text: 'Who dis?', href: '#about' },
  { id: 'books', text: 'Books', href: '#books' },
  { id: 'contact', text: 'Contact', href: '#contact' },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full mt-24 bg-thunder-surface rounded-t-2xl border-t border-thunder-border">
      <div className="flex flex-col lg:flex-row justify-between items-center min-h-24 max-w-[1600px] mx-auto px-4 py-4 text-white w-full gap-4">
        <p className="text-white/50 text-xs order-2 lg:order-1">© {year} Thunder</p>

        <nav aria-label="Footer">
          <ul className="flex items-center gap-2 sm:gap-4 order-1 lg:order-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="block px-3 py-1 text-xs font-semibold rounded-lg hover:bg-thunder-pink-soft hover:text-thunder-pink transition-colors"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
