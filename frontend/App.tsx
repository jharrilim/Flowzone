import React, { useState, useContext, useEffect } from 'react';
import { AppContext, appContextDefaultValue } from './App.context';
import { ServiceContainer, serviceContainerContextDefaultValue } from './services/service-container.context';
import { SafeAreaView, StatusBar } from 'react-native';
import { User } from './services/user/user.model';
import AuthNavigation from './navigation/AuthNavigation';

export const App = () => {
  const appContext = useContext(AppContext);
  const { userService } = useContext(ServiceContainer);
  const [user, setUser] = useState<User>();

  useEffect(() => void userService
    .getCurrentUser()
    .then(user => setUser(user))
    .catch(console.debug)
    , []);

};

export default () => {
  return (
    <ServiceContainer.Provider value={serviceContainerContextDefaultValue}>
      <AppContext.Provider value={appContextDefaultValue}>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar barStyle={"dark-content"} />
          <AuthNavigation />
        </SafeAreaView>
      </AppContext.Provider>
    </ServiceContainer.Provider>
  );
};
