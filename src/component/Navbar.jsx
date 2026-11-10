export default function Navbar({initials}){
    return(
        <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur">
            <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
                <a href="#home" className="flex items-center gap-2 font-bold">
                    <span className="grid size-9 place-items-center rounded-lg bg-brand text-sm text-white">
                        {initials}
                    </span>
                    <span className="hidden sm:inline">Portofolio</span>
                </a>
                <ul className="hidden item-center gap-8 md:flex">
                    <li><a href="#about" className="text-sm font-medium text-muted hover:text-brand">About</a></li>
                    <li><a href="#skills" className="text-sm font-medium text-muted hover:text-brand">Skills</a></li>
                    <li><a href="#projects" className="text-sm font-medium text-muted hover:text-brand">Projects</a></li>
                    <li><a href="#contact" className="text-sm font-medium text-muted hover:text-brand">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}