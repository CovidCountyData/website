import React, { createContext, useContext } from "react";
import mixpanel from "mixpanel-browser";

export const context = createContext(null);
export const Consumer = context.Consumer;
export const Provider = context.Provider;
export const useMixpanel = () => useContext(context);

const MixpanelProvider = ({ children, config, name }) => {
  mixpanel.init("437a8c8ce6a8c11a2ff26bf4b284741f", config, name);
  return <Provider value={mixpanel}>{children}</Provider>;
};

export default MixpanelProvider;
