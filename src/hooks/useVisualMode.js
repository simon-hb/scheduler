import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    /* ... */
    console.log('transition initial', history)
    if (replace) {
      const newHistory = history.slice(0, -1)
      setHistory([...newHistory, newMode])
      console.log('transition replace true', history)
    } else {
      setHistory([...history, newMode])
      console.log('transition replace false', history)
    }
    setMode(newMode)
    console.log('transition default', history)
  }

  function back() {
    console.log('transition initial', history)
    if (history.length <= 1) {
      return
    }
    const newHistory = history.slice(0, -1)
    setHistory(newHistory)
    console.log('back history >1', history)
    setMode(newHistory[newHistory.length - 1]);
    console.log('back history default', history)
  }

  return { mode, transition, back };
}