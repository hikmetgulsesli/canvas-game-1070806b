import { readHighScore } from "../features/prod-canvas-game/prod-canvas-game.repo";
import {
  AppState,
  HighScoreState,
  ScoreState,
} from "../features/prod-canvas-game/prod-canvas-game.types";

export interface ProdCanvasGameFixture {
  app: AppState;
  score: ScoreState;
  highScore: HighScoreState;
}

/**
 * Initial application state for the browser canvas game.
 *
 * STATE_HIGH_SCORE_STATE is rehydrated during initialization from the
 * PERSIST_HIGH_SCORE_POLICY storage key; when nothing was persisted the
 * high score is unknown (null).
 */
export function createProdCanvasGameFixture(): ProdCanvasGameFixture {
  return {
    app: { status: "idle" },
    score: { score: 0 },
    highScore: { value: readHighScore() },
  };
}
