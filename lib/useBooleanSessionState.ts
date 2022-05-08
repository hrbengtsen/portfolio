import React from "react";

/**
 * Custom hook to create one-way session state. After the initial render the returned state will never be true until a new session is started.
 * @param sessionKey
 * @returns Boolean state. Initially true until after first render.
 */
export function useBooleanSessionState(sessionKey: string) {
  const [state, setState] = React.useState(true);

  React.useEffect(() => {
    if (sessionStorage.getItem(sessionKey) === "true") {
      setState(false);
    }

    sessionStorage.setItem(sessionKey, "true");
  }, []);

  return state;
}
