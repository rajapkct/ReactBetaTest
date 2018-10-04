import './index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';


// Amplify.configure({
//   Storage: {
//     region: config.s3.REGION,
//     bucket: config.s3.BUCKET
//   },
//   API: {
//     endpoints: [
//       {
//         name: "notes",
//         endpoint: config.apiGateway.URL,
//         region: config.apiGateway.REGION
//       },
//     ]
//   }
// });

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
