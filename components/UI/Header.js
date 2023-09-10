import Link from "next/link"

const Header = () => {
  return (
    <nav className="absolute top-0">
      <Link href="/">
      <p>Back</p>
      </Link>
    </nav>
  )
}

export default Header