import { useEffect, useState } from "react";

export default function useScroll() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastElement, setLastElement] = useState<HTMLElement | null>(null);
  useEffect(() => {
    if (!lastElement) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        rootMargin: "-150px 0px -150px 0px",
      }
    );
    observer.observe(lastElement);
    return () => {
      if (observer && lastElement) {
        setIsVisible(false);
        observer.unobserve(lastElement);
        observer.disconnect();
      }
    };
  }, [lastElement]);
  return {
    isVisible,
    setLastElement,
  };
}
