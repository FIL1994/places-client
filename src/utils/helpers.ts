import * as React from "react";

type ReactKeyEvent = (event: React.KeyboardEvent) => void;

export function onKey(key, callback, handler?: ReactKeyEvent) {
  return event => {
    if (event.which === key) {
      event.preventDefault();
      callback(event);
    }
    if (handler) {
      handler(event);
    }
  };
}

export const onSpace = (callback, handler?: ReactKeyEvent) =>
  onKey(32, callback, handler);

export const onEnter = (callback, handler?: ReactKeyEvent) =>
  onKey(13, callback, handler);
