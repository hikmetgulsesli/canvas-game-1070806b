// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Play Page - Browser Canvas Game
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type PlayPageBrowserCanvasGameActionId = "start-game-1";

export interface PlayPageBrowserCanvasGameProps {
  actions?: {
    "start-game-1"?: () => void;
  };

}

export type PlayPageBrowserCanvasGameActionCallbacks = NonNullable<PlayPageBrowserCanvasGameProps["actions"]>;

export function PlayPageBrowserCanvasGame({ actions }: PlayPageBrowserCanvasGameProps) {
  return (
    <>
      <div data-surface-id="SURF_PLAY_PAGE" data-route="/play" className="flex-1 flex flex-col w-full min-h-screen" data-setfarm-element-ref="E000001" data-observable-refs="OBS_ENTER_PLAY_OBS_PLAY_ROUTE_ACTIVE OBS_START_GAME_OBS_STAY_ON_PLAY_ROUTE">
          {/* Header bar */}
          <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur px-8 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 text-white font-bold text-xl">
                PA
              </div>
              <div>
                <h1 className="text-lg font-bold tracking-tight text-white">Pixel Arcade</h1>
                <p className="text-xs text-slate-400">Browser Canvas Game — Route: /play</p>
              </div>
            </div>
      
            <div className="flex items-center space-x-4">
              {/* High Score Display Surface */}
              <div data-surface-id="SURF_HIGH_SCORE_DISPLAY" className="bg-slate-800/80 border border-slate-700/80 rounded-xl px-5 py-2.5 flex flex-col items-center min-w-[120px]" data-setfarm-element-ref="E000002" data-observable-refs="OBS_START_GAME_OBS_HIGH_SCORE_PERSISTED">
                <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">High Score</span>
                <span className="text-2xl font-black text-amber-400 tracking-tight" data-value="0">0</span>
              </div>
      
              {/* Score Display Surface */}
              <div data-surface-id="SURF_SCORE_DISPLAY" className="bg-slate-800/80 border border-slate-700/80 rounded-xl px-5 py-2.5 flex flex-col items-center min-w-[120px]" data-setfarm-element-ref="E000003" data-observable-refs="OBS_START_GAME_OBS_SCORE_VALUE">
                <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">Score</span>
                <span className="text-2xl font-black text-emerald-400 tracking-tight" data-value="0">0</span>
              </div>
            </div>
          </header>
      
          {/* Main Game Section */}
          <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-8 flex flex-col items-center justify-center space-y-6">
            {/* Game Canvas Surface */}
            <div data-surface-id="SURF_GAME_CANVAS" className="relative w-full aspect-[16/9] max-h-[580px] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center justify-center" data-setfarm-element-ref="E000004">
              {/* Subtle canvas background grid */}
              <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-25"></div>
      
              <div className="relative z-10 flex flex-col items-center text-center p-8 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21" strokeWidth="2"></line>
                    <line x1="12" y1="17" x2="12" y2="21" strokeWidth="2"></line>
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Game Stage Ready</h2>
                  <p className="text-sm text-slate-400 max-w-md mt-1">Press the Start button below to launch the canvas engine and commence gameplay.</p>
                </div>
              </div>
      
              {/* Canvas bottom metadata indicators */}
              <div className="absolute bottom-4 left-6 text-[11px] text-slate-500 font-mono">
                CANVAS: 1280 × 720
              </div>
              <div className="absolute bottom-4 right-6 text-[11px] text-slate-500 font-mono">
                FPS: 60
              </div>
            </div>
      
            {/* Controls and Status Deck */}
            <div className="w-full flex items-center justify-between bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-lg backdrop-blur">
              {/* Status Panel Surface */}
              <div data-surface-id="SURF_STATUS_PANEL" className="flex items-center space-x-3 px-4 py-2 bg-slate-950/60 rounded-xl border border-slate-800/80" data-setfarm-element-ref="E000005" data-observable-refs="OBS_START_GAME_OBS_STATUS_TEXT">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <div className="text-sm font-medium text-slate-300">
                  Status: <span className="text-emerald-400 font-semibold">Game started</span>
                </div>
              </div>
      
              {/* The declared Start Game button */}
              <div>
                <button type="button" data-action="ACT_START_GAME" data-control-slot="CSLOT_START_GAME_START_BUTTON_PLACEMENT" className="inline-flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-indigo-600/30 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-950 cursor-pointer" data-setfarm-element-ref="E000006" data-observable-refs="OBS_START_GAME_OBS_START_BUTTON_STATE" data-action-id="start-game-1" onClick={actions?.["start-game-1"]}>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"></path>
                  </svg>
                  <span>Start Game</span>
                </button>
              </div>
            </div>
          </main>
      
          {/* Footer decoration without actionable links */}
          <footer className="py-6 border-t border-slate-900 text-center text-xs text-slate-600">
            <p>© 2025 Browser Canvas Game. All rights reserved.</p>
          </footer>
        </div>
    </>
  );
}
