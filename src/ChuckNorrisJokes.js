import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChuckNorrisJokes = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      const data = response.data;
      setJoke(data.value);
    } catch (error) {
      console.error('Error fetching Chuck Norris joke:', error);
    }
  };

  return (
    <div>
      <h1>Chuck Norris Joke</h1>
      <p>{joke}</p>
      <button onClick={fetchJoke}>Get New Joke</button>
    </div>
  );
};

export default ChuckNorrisJokes;