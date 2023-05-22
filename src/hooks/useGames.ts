import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = (): { games: Game[]; error: string } => {
  // Set up state variables to store the fetched games and any errors.
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Create a new AbortController instance to handle cancellation of the API request.
    const controller = new AbortController();

    // Send a GET request to the API to fetch the games data, passing in the AbortController's signal.
    apiClient
      .get<FetchGamesResponse>("/games", {
        signal: controller.signal,
      })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        // Handle any errors thrown by the API request, ignoring any cancellations due to aborting.
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    // Return a cleanup function that will abort the API request if the component unmounts or the dependencies change.
    return () => controller.abort();
  }, []);

  // Return the fetched games and any error messages as an object.
  return { games, error };
};

export default useGames;
