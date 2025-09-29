import { useState, useEffect, useRef, RefObject } from 'react';

export const useInView = <T extends HTMLElement,>(
  options?: IntersectionObserverInit,
): [RefObject<T>, boolean, boolean] => {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(() => typeof window === 'undefined');
  const [hasInitialized, setHasInitialized] = useState(() => typeof window === 'undefined');

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsInView(true);
      setHasInitialized(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setHasInitialized(true);
      if (entry.isIntersecting) {
        setIsInView(true);
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      } else {
        setIsInView(false);
      }
    }, options);

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return [ref, isInView, hasInitialized];
};
