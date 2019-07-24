import React, { Component } from 'react';
import MovieTable from './MovieTable';
import './App.css';

class App extends Component {
  render() {

    const headings = [
      'Title',
      'Vote Count',
      'Average Vote',
      'Popularity',
      'Poster',
      'Overview'
    ];

    const rows = []; // TODO: Get row data through API

    return (
      <main>
        <MovieTable headings={headings} rows={rows} />
      </main>
    );
  }
}

export default App;
