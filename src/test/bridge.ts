/**
 * Runtime capture bridge (setfarm.browser-state-capture.v1).
 *
 * Exposes `window.__SETFARM_TEST_BRIDGE__` with an `invokeAction` method and the
 * live state snapshot bound to the canonical state refs, plus the manual
 * scenario mode flag.
 */

export type BridgeActionInvoker = (
  actionRef: string,
  inputValues: Record<string, unknown>,
) => void;

export interface SetfarmTestBridge {
  invokeAction: (actionRef: string, inputValues?: Record<string, unknown>) => void;
  readonly states: Record<string, unknown>;
}

declare global {
  interface Window {
    __SETFARM_TEST_BRIDGE__?: SetfarmTestBridge;
    __SETFARM_SCENARIO_MODE__?: string;
  }
}

let stateSnapshot: Record<string, unknown> = {};
let actionInvoker: BridgeActionInvoker | null = null;

export function registerBridgeStates(states: Record<string, unknown>): void {
  stateSnapshot = states;
}

export function registerBridgeActionInvoker(invoker: BridgeActionInvoker): void {
  actionInvoker = invoker;
}

export function installSetfarmTestBridge(): SetfarmTestBridge {
  if (typeof window === "undefined") {
    throw new Error("SETFARM_BRIDGE_WINDOW_UNAVAILABLE");
  }

  const bridge: SetfarmTestBridge = {
    invokeAction: (actionRef: string, inputValues?: Record<string, unknown>) => {
      if (!actionInvoker) {
        throw new Error("SETFARM_ACTION_INVOKER_UNAVAILABLE");
      }
      actionInvoker(actionRef, inputValues ?? {});
    },
    get states(): Record<string, unknown> {
      return stateSnapshot;
    },
  };

  window.__SETFARM_TEST_BRIDGE__ = bridge;
  window.__SETFARM_SCENARIO_MODE__ = "manual";
  return bridge;
}
