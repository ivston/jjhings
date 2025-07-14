// hooks/useSectionInView.ts
import { useEffect, useState } from "react";

const useSectionInView = (
  ref: React.RefObject<HTMLElement>,
  threshold = 0.3
) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      {
        root: null,
        threshold,
        rootMargin: "-80px", // adjust for navbar height
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, threshold]);

  return isInView;
};

export default useSectionInView;
