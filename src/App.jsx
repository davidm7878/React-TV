/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
import { useState } from "react";
import EpisodeDetails from "./episodes/EpisodeDetails";
import EpisodeList from "./episodes/EpisodeList";
import ShowDetails from "./shows/ShowDetails";
import ShowSelection from "./shows/ShowSelection";
import { tvShows } from "./shows/data";

export default function App() {
  const [selectedShow, setSelectedShow] = useState();
  const [shows] = useState(tvShows);
  return (
    <>
      <header>
        <h1>React TV</h1>
        <ShowSelection shows={shows}></ShowSelection>
      </header>
      <main>
        <ShowDetails>
          <EpisodeList></EpisodeList>
        </ShowDetails>
        <EpisodeDetails></EpisodeDetails>
      </main>
    </>
  );
}
