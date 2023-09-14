'use client'

import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import React from 'react';
Amplify.configure(awsExports);


function App({ signOut, user }) {
  return (
    <body>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
      </body>
  );
}

export default withAuthenticator(App);