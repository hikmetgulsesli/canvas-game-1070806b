import {
  createContext,
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { createProdCanvasGameFixture } from "../../__fixtures__/prod-canvas-game.fixture";
import { ACT_ENTER_PLAY, enterPlay } from "../surf-play-page/act_enter_play";
import { ACT_START_GAME, startGame } from "../surf-play-page/act_start_game";
import {
  AppState,
  HighScoreState,
  ProdCanvasGameActionInput,
  ProdCanvasGameActionRef,
  ProdCanvasGameStates,
  ScoreState,
} from "./prod-canvas-game.types";

export interface ProdCanvasGameStore {
  states: ProdCanvasGameStates;
  enterPlay: (input?: ProdCanvasGameActionInput) => void;
  startGame: (input?: ProdCanvasGameActionInput) => void;
  invokeAction: (
    actionRef: ProdCanvasGameActionRef,
    input?: ProdCanvasGameActionInput,
  ) => void;
}

const ProdCanvasGameStoreContext = createContext<ProdCanvasGameStore | null>(null);

export function ProdCanvasGameStoreProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const fixture = useMemo(() => createProdCanvasGameFixture(), []);

  const [app, setApp] = useState<AppState>(fixture.app);
  const [score, setScore] = useState<ScoreState>(fixture.score);
  const [highScore, setHighScore] = useState<HighScoreState>(fixture.highScore);

  const handleEnterPlay = useCallback(
    (input: ProdCanvasGameActionInput = {}) => {
      const outcome = enterPlay(app, input);
      // The action stays on the play route and declares no state delta.
      setApp(outcome.state);
    },
    [app],
  );

  const handleStartGame = useCallback(
    (input: ProdCanvasGameActionInput = {}) => {
      const outcome = startGame({ app, score, highScore }, input);
      setApp(outcome.app);
      setScore(outcome.score);
      setHighScore(outcome.highScore);
    },
    [app, score, highScore],
  );

  const invokeAction = useCallback(
    (actionRef: ProdCanvasGameActionRef, input: ProdCanvasGameActionInput = {}) => {
      if (actionRef === ACT_START_GAME) {
        handleStartGame(input);
        return;
      }
      if (actionRef === ACT_ENTER_PLAY) {
        handleEnterPlay(input);
        return;
      }
      throw new Error(`SETFARM_UNKNOWN_ACTION:${actionRef}`);
    },
    [handleEnterPlay, handleStartGame],
  );

  const states = useMemo<ProdCanvasGameStates>(
    () => ({
      STATE_APP_STATE: app,
      STATE_SCORE_STATE: score,
      STATE_HIGH_SCORE_STATE: highScore,
    }),
    [app, score, highScore],
  );

  const store = useMemo<ProdCanvasGameStore>(
    () => ({
      states,
      enterPlay: handleEnterPlay,
      startGame: handleStartGame,
      invokeAction,
    }),
    [states, handleEnterPlay, handleStartGame, invokeAction],
  );

  return (
    <ProdCanvasGameStoreContext.Provider value={store}>
      {children}
    </ProdCanvasGameStoreContext.Provider>
  );
}

export function useProdCanvasGameStore(): ProdCanvasGameStore {
  const store = useContext(ProdCanvasGameStoreContext);
  if (!store) {
    throw new Error("SETFARM_STORE_CONTEXT_MISSING");
  }
  return store;
}
