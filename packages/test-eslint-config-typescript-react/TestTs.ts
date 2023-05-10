import { useEffect, useMemo, useRef, type RefObject } from 'react';

// eslint-disable-next-line no-console
console.log('test-eslint-config-typescript-react');

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = (): void => {};

function useRafCallback(callback: FrameRequestCallback): () => void {
  let raf = 0;

  return () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(callback);
  };
}

function useResizeObserver(target: RefObject<Element>, callback: () => void): ResizeObserver {
  const resizeObserver = useMemo(() => new ResizeObserver(callback), [callback]);

  useEffect(() => {
    const element = target.current;

    if (element === null) {
      return;
    }

    resizeObserver.observe(element);

    return () => {
      resizeObserver.unobserve(element);
    };
  }, [resizeObserver, target]);

  useEffect(
    () => () => {
      resizeObserver.disconnect();
    },
    [resizeObserver],
  );

  return resizeObserver;
}

// eslint-disable-next-line no-underscore-dangle, @typescript-eslint/no-unused-vars
function _MyComponent(): null {
  useResizeObserver(useRef(document.createElement('div')), useRafCallback(noop));

  useResizeObserver(
    useRef(document.createElement('div')),
    // eslint-disable-next-line @mediamonks/react/throttle-use-resize-observer-callback
    noop,
  );

  return null;
}
