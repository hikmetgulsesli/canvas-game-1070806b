import { HIGH_SCORE_STORAGE_KEY } from "./prod-canvas-game.types";

/**
 * ENTITY_HIGH_SCORE payload shape persisted through PERSIST_HIGH_SCORE_POLICY.
 */
export interface HighScoreEntity {
  value: number;
}

function browserStorage(): Storage | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

/**
 * Reads the persisted high score. Returns null when nothing has been persisted
 * yet (rehydration happens during initialization of STATE_HIGH_SCORE_STATE).
 */
export function readHighScore(): number | null {
  const storage = browserStorage();
  if (!storage) return null;
  try {
    const raw = storage.getItem(HIGH_SCORE_STORAGE_KEY);
    if (raw === null) return null;
    const parsed = JSON.parse(raw) as Partial<HighScoreEntity>;
    const value = parsed?.value;
    if (typeof value !== "number" || !Number.isFinite(value)) return null;
    return value;
  } catch {
    return null;
  }
}

/**
 * Writes the high score entity under the canonical persistence policy key.
 */
export function writeHighScore(value: number): boolean {
  const storage = browserStorage();
  if (!storage) return false;
  try {
    const payload: HighScoreEntity = { value };
    storage.setItem(HIGH_SCORE_STORAGE_KEY, JSON.stringify(payload));
    return true;
  } catch {
    return false;
  }
}
