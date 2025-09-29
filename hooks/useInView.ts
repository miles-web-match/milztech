import { useState, useEffect, useRef, RefObject } from 'react';

const supportsIntersectionObserver = () =>
  typeof IntersectionObserver !== 'undefined';

export const useInView = <T extends HTMLElement,>(
  options?: IntersectionObserverInit,
): [RefObject<T>, boolean, boolean] => {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(() => typeof window === 'undefined');
  const [hasInitialized, setHasInitialized] = useState(() => typeof window === 'undefined');

  useEffect(() => {
    if (typeof window === 'undefined' || !supportsIntersectionObserver()) {
      setIsInView(true);
      setHasInitialized(true);
      return;
    }

    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setHasInitialized(true);

      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target as T);
      } else {
        setIsInView(false);
      }
    }, options);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options?.root, options?.rootMargin, options?.threshold]);

  return [ref, isInView, hasInitialized];
};
