import React from 'react';
import Modules from './Modules';
import Generic from './Generic';
import { Analytics } from '@vercel/analytics/react';
function App() {
  return (
    <div style={{height:'100vh'}}>
      <Modules/>
      <Analytics />
    </div>
  );
}

export default App;
