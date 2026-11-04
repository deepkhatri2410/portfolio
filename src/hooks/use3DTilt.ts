import { useRef, useCallback } from 'react';

/**
 * Returns mouse-event handlers that apply a subtle 3D tilt transform
 * to the element. Works on desktop only; is a no-op on touch devices.
 */
export function use3DTilt(intensity = 12) {
  const elementRef = useRef<HTMLElement | null>(null);
  const ref = useCallback((element: HTMLElement | null) => {
    elementRef.current = element;
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const el = elementRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;   // 0–1
      const y = (e.clientY - rect.top)  / rect.height;  // 0–1
      const rotX = (y - 0.5) * -intensity;
      const rotY = (x - 0.5) *  intensity;
      el.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(6px)`;
      el.style.transition = 'transform 0.08s linear';
    },
    [intensity]
  );

  const onMouseLeave = useCallback(() => {
    const el = elementRef.current;
    if (!el) return;
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)';
    el.style.transition = 'transform 0.5s ease';
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
