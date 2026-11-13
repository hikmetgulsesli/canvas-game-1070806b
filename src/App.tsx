import { ReactElement, useEffect, useMemo, useState } from "react";

import {
  ProdCanvasGameStoreProvider,
  useProdCanvasGameStore,
} from "./features/prod-canvas-game/prod-canvas-game.store";
import { ROUTE_PLAY_PATH } from "./features/prod-canvas-game/prod-canvas-game.types";
import { useGameRuntime } from "./game/game-runtime";
import { PlayPageBrowserCanvasGame } from "./screens/PlayPageBrowserCanvasGame";

function useCurrentPath(): string {
  const [path, setPath] = useState(() =>
    typeof window === "undefined" ? "/" : window.location.pathname,
  );

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return path;
}

function PlayRoute(): ReactElement {
  const store = useProdCanvasGameStore();
  useGameRuntime(store);

  const actions = useMemo(
    () => ({
      "start-game-1": () => store.startGame(),
    }),
    [store],
  );

  return (
    <PlayPageBrowserCanvasGame
      actions={actions}
      score={store.states.STATE_SCORE_STATE.score}
      highScore={store.states.STATE_HIGH_SCORE_STATE.value}
      status={store.states.STATE_APP_STATE.status}
    />
  );
}

function RuntimeHost({ path }: { path: string }): ReactElement {
  const isPlayRoute = path === ROUTE_PLAY_PATH || path.startsWith(`${ROUTE_PLAY_PATH}/`);

  if (!isPlayRoute) {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-slate-400">
        Pixel Arcade
      </div>
    );
  }

  return <PlayRoute />;
}

export default function App(): ReactElement {
  const path = useCurrentPath();

  return (
    <div
      data-setfarm-root="baseline"
      data-testid="setfarm-app-root"
      className="min-h-screen bg-slate-950 text-slate-100"
    >
      <ProdCanvasGameStoreProvider>
        <RuntimeHost path={path} />
      </ProdCanvasGameStoreProvider>
    </div>
  );
}
