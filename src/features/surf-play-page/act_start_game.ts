import { writeHighScore } from "../prod-canvas-game/prod-canvas-game.repo";
import {
  AppState,
  HighScoreState,
  ProdCanvasGameActionInput,
  ProdCanvasGameActionRef,
  ScoreState,
} from "../prod-canvas-game/prod-canvas-game.types";

export const ACT_START_GAME: ProdCanvasGameActionRef = "ACT_START_GAME";

export interface StartGameOutcome {
  actionRef: ProdCanvasGameActionRef;
  app: AppState;
  score: ScoreState;
  highScore: HighScoreState;
  persisted: boolean;
}

/**
 * ACT_START_GAME applies the canonical state deltas:
 *  - STATE_APP_STATE./status  = "playing"
 *  - STATE_SCORE_STATE./score  = 0
 *  - STATE_HIGH_SCORE_STATE./value = STATE_SCORE_STATE./score
 * and then persists the high score through PERSIST_HIGH_SCORE_POLICY.
 *
 * Navigation stays on the play route.
 */
export function startGame(
  current: { app: AppState; score: ScoreState; highScore: HighScoreState },
  _input: ProdCanvasGameActionInput = {},
): StartGameOutcome {
  const score: ScoreState = { score: 0 };
  const app: AppState = { status: "playing" };
  const highScore: HighScoreState = { value: score.score };
  const persisted = writeHighScore(highScore.value);

  return {
    actionRef: ACT_START_GAME,
    app,
    score,
    highScore,
    persisted,
  };
}
