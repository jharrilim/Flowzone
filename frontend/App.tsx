import React from 'react';
import { AppContext, appContextDefaultValue } from './App.context';
import { ServiceContainer, serviceContainerContextDefaultValue } from './services/service-container.context';
import { SafeAreaView, StatusBar } from 'react-native';
import AuthNavigation from './navigation/AuthNavigation';

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
