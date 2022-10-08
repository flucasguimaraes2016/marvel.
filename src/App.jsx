import { useState } from "react";
import { View } from "./components/View";
import { CharacterGrid } from "./components/CharactedGrid";

import { fetchApi } from "./api";
import { useEffect } from "react";

export const App = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetchApi("/characters");
      const data = await response.json();
      setData(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data.data?.results) {
      setCharacters(data.data.results);
    }
  }, [data]);

  return (
    <View showLoader ={loading}>
      <CharacterGrid characters={characters} showLoading={loading} />
    </View>
  );
};
