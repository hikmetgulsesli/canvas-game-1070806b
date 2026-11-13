import {
  AppState,
  ProdCanvasGameActionInput,
  ProdCanvasGameActionRef,
  ROUTE_PLAY_PATH,
} from "../prod-canvas-game/prod-canvas-game.types";

export const ACT_ENTER_PLAY: ProdCanvasGameActionRef = "ACT_ENTER_PLAY";

export interface EnterPlayOutcome {
  actionRef: ProdCanvasGameActionRef;
  route: string;
  state: AppState;
}

/**
 * ACT_ENTER_PLAY is a route triggered action for ROUTE_PLAY_ROUTE.
 *
 * It performs no state delta and no navigation away from the play route: the
 * play page stays active and remains the current route.
 */
export function enterPlay(
  state: AppState,
  _input: ProdCanvasGameActionInput = {},
): EnterPlayOutcome {
  return {
    actionRef: ACT_ENTER_PLAY,
    route: ROUTE_PLAY_PATH,
    state: { ...state },
  };
}
