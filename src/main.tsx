import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

import App from './app/App';

import { GlobalStyle } from './styles/global';

import 'antd/dist/reset.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <BrowserRouter>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: '#DB1F26',
                  fontFamily: 'Inter',
                  borderRadius: 12,
                },
              }}
            >
              <App />
            </ConfigProvider>
          </BrowserRouter>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
