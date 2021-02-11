import React from 'react';
import { AdaptivityProvider, ConfigProvider, View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { SignIn } from '../Routes/SignIn/SignIn';

const App = () => (
  <ConfigProvider>
    <AdaptivityProvider>
      <AdaptivityProvider>
        <SignIn />
      </AdaptivityProvider>
    </AdaptivityProvider>
  </ConfigProvider>
);

export { App };
