// pages/index.js

import React from 'react';
import QAbox from './QAbox';

function Home() {
  return (
    <>
      <div className="border-solid border-2 border-sky-500 m-4 p-4">
        <h1 className="text-2xl font-bold">This is a sample post.</h1>
        <QAbox />
      </div>
      
    </>
  );
}

export default Home;
