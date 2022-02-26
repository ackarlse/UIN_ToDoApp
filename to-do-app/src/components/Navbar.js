export default function Navbar({ username }) {
    return (
      <header>
        <nav>
          <h1>
            <a href="index.html">HIOF</a>
          </h1>
          <ul>
            <li>{username}</li>
          </ul>
        </nav>
      </header>
    )
  }
  