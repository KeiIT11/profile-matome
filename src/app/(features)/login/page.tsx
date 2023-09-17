'use client'

import { Amplify, Auth } from 'aws-amplify';
import { withAuthenticator, WithAuthenticatorProps } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import React, { useEffect, useState } from 'react';
Amplify.configure(awsExports);

function App({ signOut, user }: WithAuthenticatorProps) {
  const [userAuth, setUserAuth] = useState(null)
  //useEffectはレンダリングした後に処理を行う。
  useEffect(() => {
    // Accessing the userAuth session on the client
    Auth.currentAuthenticatedUser()
      .then(userAuth => {
        console.log("User: ", userAuth)
        setUserAuth(userAuth)
      })
      .catch(err => setUserAuth(null))
  }, [])

  return (
    <body>
      <h1>Hello {user?.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </body>
  );
}

export default withAuthenticator(App);