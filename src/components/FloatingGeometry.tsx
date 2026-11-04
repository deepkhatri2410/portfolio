import { useEffect, useRef } from 'react';

/**
 * A small self-contained canvas that draws slowly rotating 3D geometric shapes.
 * Used as the decorative element in the About section.
 */
export default function FloatingGeometry({ size = 200 }: { size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = size;
    canvas.height = size;
    const cx = size / 2;
    const cy = size / 2;

    let t = 0;

    // Project a 3D point to 2D (simple orthographic with rotation)
    const project = (x: number, y: number, z: number, rx: number, ry: number, rz: number) => {
      // Rotate Y
      const cosY = Math.cos(ry), sinY = Math.sin(ry);
      const x1 = x * cosY - z * sinY;
      const z1 = x * sinY + z * cosY;
      // Rotate X
      const cosX = Math.cos(rx), sinX = Math.sin(rx);
      const y2 = y * cosX - z1 * sinX;
      const z2 = y * sinX + z1 * cosX;
      // Rotate Z
      const cosZ = Math.cos(rz), sinZ = Math.sin(rz);
      const x3 = x1 * cosZ - y2 * sinZ;
      const y3 = x1 * sinZ + y2 * cosZ;
      const scale = 200 / (200 + z2 * 0.5);
      return { x: cx + x3 * scale, y: cy + y3 * scale, scale };
    };

    const drawEdge = (
      p1: ReturnType<typeof project>,
      p2: ReturnType<typeof project>,
      color: string,
      alpha: number
    ) => {
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = color.replace(')', `, ${alpha})`).replace('rgb', 'rgba');
      ctx.lineWidth = 1.2;
      ctx.stroke();
    };

    // Cube vertices
    const cubeVerts = (r: number) => {
      const v: [number, number, number][] = [];
      for (const sx of [-1, 1]) for (const sy of [-1, 1]) for (const sz of [-1, 1])
        v.push([r * sx, r * sy, r * sz]);
      return v;
    };
    const cubeEdges: [number, number][] = [
      [0,1],[2,3],[4,5],[6,7],
      [0,2],[1,3],[4,6],[5,7],
      [0,4],[1,5],[2,6],[3,7],
    ];

    const draw = () => {
      ctx.clearRect(0, 0, size, size);
      t += 0.012;

      const rx = t * 0.7;
      const ry = t;
      const rz = t * 0.3;

      // ── Outer cube ──
      const verts = cubeVerts(60).map(([x, y, z]) => project(x, y, z, rx, ry, rz));
      cubeEdges.forEach(([a, b]) => drawEdge(verts[a], verts[b], 'rgb(124,58,237)', 0.35));

      // ── Inner cube ──
      const verts2 = cubeVerts(35).map(([x, y, z]) => project(x, y, z, rx * 1.3, ry * 0.8, rz * 1.5));
      cubeEdges.forEach(([a, b]) => drawEdge(verts2[a], verts2[b], 'rgb(6,182,212)', 0.45));

      // ── Rotating ring (ellipse) ──
      const ringPts = Array.from({ length: 48 }, (_, i) => {
        const a = (i / 48) * Math.PI * 2;
        return project(Math.cos(a) * 75, 0, Math.sin(a) * 75, rx * 0.6 + 1, ry * 0.4, rz + 0.5);
      });
      ctx.beginPath();
      ringPts.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
      ctx.closePath();
      ctx.strokeStyle = 'rgba(168,85,247,0.25)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // ── Center dot ──
      const c = project(0, 0, 0, 0, 0, 0);
      ctx.beginPath();
      ctx.arc(c.x, c.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(6,182,212,0.8)';
      ctx.fill();

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(rafRef.current);
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      aria-hidden="true"
      style={{ display: 'block', opacity: 0.85 }}
    />
  );
}

