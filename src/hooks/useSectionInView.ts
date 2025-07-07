// hooks/useSectionInView.ts
import { useEffect, useState } from "react";

const useSectionInView = (id: string) => {
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    const element = document.getElementById(id);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.5, // adjust sensitivity
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [id]);

  return isInView;
};

export default useSectionInView;
