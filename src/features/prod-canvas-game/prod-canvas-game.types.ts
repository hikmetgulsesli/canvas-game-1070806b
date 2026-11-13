/**
 * Shared product types for the browser canvas game (story US-001).
 *
 * The state identifiers below are the canonical Setfarm state refs and are also
 * the keys exposed through the runtime capture bridge under `/states/<stateRef>`.
 */

export type AppStatus = "idle" | "playing";

export interface AppState {
  status: AppStatus;
}

export interface ScoreState {
  score: number;
}

export interface HighScoreState {
  value: number | null;
}

export interface ProdCanvasGameStates {
  STATE_APP_STATE: AppState;
  STATE_SCORE_STATE: ScoreState;
  STATE_HIGH_SCORE_STATE: HighScoreState;
}

export type ProdCanvasGameActionRef = "ACT_ENTER_PLAY" | "ACT_START_GAME";

export interface ProdCanvasGameActionInput {
  [field: string]: unknown;
}

/** Persistence policy key for PERSIST_HIGH_SCORE_POLICY. */
export const HIGH_SCORE_STORAGE_KEY = "setfarm.canvas_game.high_score_policy.v1";

/** Canonical route path for ROUTE_PLAY_ROUTE. */
export const ROUTE_PLAY_PATH = "/play";
