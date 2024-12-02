// src/index.tsx
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Amplify } from 'aws-amplify';

interface ConfigData {
  awsRegion: string;
  userPoolId: string;
  userPoolWebClientId: string;
}

const Root: React.FC = () => {
  const [isConfigured, setIsConfigured] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5001/api/config')
      .then(response => response.json())
      .then((data: ConfigData) => {
        const config = {
          Auth: {
            Cognito: {
              region: data.awsRegion,
              userPoolId: data.userPoolId,
              userPoolClientId: data.userPoolWebClientId,
              loginWith: {
                email: true
              }
            },
          },
        };
        Amplify.configure(config);
        setIsConfigured(true);
      })
      .catch(error => {
        console.error('Error fetching config:', error);
        setIsConfigured(true);
      });
  }, []);

  if (!isConfigured) {
    return <div>Loading...</div>;
  }

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
