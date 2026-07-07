import Link from "next/link";

export default function Header() {
  return (
    <header className="w-[90vw] mx-auto rounded-full border-b border-zinc-100 bg-white/80 backdrop-blur-md sticky top-5 z-50 px-4 py-2">
      <nav className="w-full mx-auto flex items-center justify-between min-div">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-zinc-900"
          >
            Apex<span className="text-blue-600">Medical</span>
          </Link>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          <li>
            <Link href="/" className="transition-colors hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/sobre"
              className="transition-colors hover:text-blue-600"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/servicos"
              className="transition-colors hover:text-blue-600"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/contato"
              className="transition-colors hover:text-blue-600"
            >
              Process
            </Link>
          </li>
          <li>
            <Link
              href="/contato"
              className="transition-colors hover:text-blue-600"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              href="/contato"
              className="transition-colors hover:text-blue-600"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <Link
            href="/agendar"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Agendar Consulta
          </Link>
        </div>
      </nav>
    </header>
  );
}
