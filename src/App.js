import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}


// import { Authenticator } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';

// import awsExports from './aws-exports';
// import Amplify from 'aws-amplify';
// Amplify.configure(awsExports);

// function App() {
//   return (
//     <Authenticator>
//       {({signOut, user}) => (
//         <div className='App'>
//           <p>
//             Hey {user.username}, welcome to my channel, with auth!
//           </p>
//           <button onClick={signOut}>Sign out</button>
//         </div>
//       )};
//       <div>hi</div>
//     </Authenticator>

//   );
// }

// export default App;
