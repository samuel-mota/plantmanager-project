import React, { useEffect } from "react";
// import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import * as Notifications from "expo-notifications";

import {
  useFonts,
  Jost_300Light,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";

import Routes from "./src/routes";
import { PlantProps } from "./src/libs/storage";

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_300Light,
    Jost_400Regular,
    Jost_600SemiBold,
  });

  useEffect(() => {
    // ### VISUALIZAR NOTIFICAÇÕES DISPARADAS ###
    const subscription = Notifications.addNotificationReceivedListener(
      async (notification) => {
        const data = notification.request.content.data.plant as PlantProps;
        console.log(data);
      }
    );

    return () => subscription.remove();

    // ### VER NOTIFICAÇÕES AGENDADAS ###
    // async function notification() {
    //   const data = await Notifications.getAllScheduledNotificationsAsync();
    //   console.log("######### NOTIFICAÇÕES AGENDADAS #########");
    //   console.log(data);
    // }

    // notification();

    // ### REMOVER NOTIFICAÇÕES AGENDADAS ###
    // async function removeAllNotifications() {
    //   await Notifications.cancelAllScheduledNotificationsAsync();

    //   const data = await Notifications.getAllScheduledNotificationsAsync();

    //   console.log("######### NOTIFICAÇÕES AGENDADAS #########");
    //   console.log(data);
    // }

    // removeAllNotifications();
  }, []);

  // segura a tela de loading até que as fontes carreguem
  if (!fontsLoaded) return <AppLoading />;

  return (
    <>
      <Routes />
    </>
  );
}
