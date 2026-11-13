import { useEffect } from "react";

import { ProdCanvasGameStore } from "../features/prod-canvas-game/prod-canvas-game.store";
import {
  installSetfarmTestBridge,
  registerBridgeActionInvoker,
  registerBridgeStates,
} from "../test/bridge";

/**
 * Wires the application runtime into the Setfarm capture bridge:
 * live state snapshots are published under the canonical state refs and the
 * `invokeAction` entry point dispatches the product actions.
 */
export function useGameRuntime(store: ProdCanvasGameStore): void {
  useEffect(() => {
    registerBridgeStates(
      store.states as unknown as Record<string, unknown>,
    );
  }, [store.states]);

  useEffect(() => {
    installSetfarmTestBridge();
    registerBridgeActionInvoker((actionRef, inputValues) => {
      store.invokeAction(
        actionRef as Parameters<ProdCanvasGameStore["invokeAction"]>[0],
        inputValues,
      );
    });
  }, [store]);
}
