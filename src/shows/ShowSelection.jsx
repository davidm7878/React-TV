import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ shows, setSelectedShow }) {
  return (
    <nav className="shows">
      <a
        href=""
        className="show"
        key={shows.name}
        onClick={() => setSelectedShow(shows)}
      >
        {shows.name}
      </a>
    </nav>
  );
}
