import React from 'react';
import './App.css';
import { PhotoEditorSDK } from './PhotoEditorSDK';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Welcome to Photo Editor</h1>
        <p className="description">Edit your photos with ease using our powerful editor!</p>
      </header>
      <PhotoEditorSDK />
    </div>
  );
}

export default App;
