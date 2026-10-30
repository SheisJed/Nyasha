import {
  useRef,
  useState,
  type PointerEvent,
  type MouseEvent,
} from 'react'
import "./TakeABreakPage.css";

type Pixel = {
  id: number;
  x: number;
  y: number;
  color: string;
};

const pixelColors = [
  "#d58fa9",
  "#a95d7c",
  "#c8b5ff",
  "#ffdc78",
  "#8ee5d2",
  "#ffffff",
];

export default function TakeABreakPage() {
  const gardenRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(0);

  const [cat, setCat] = useState({ x: 50, y: 43 });
  const [pixels, setPixels] = useState<Pixel[]>([]);
  const [caught, setCaught] = useState(0);
  const [blooms, setBlooms] = useState<number[]>([]);
  const [ripples, setRipples] = useState<
    { id: number; x: number; y: number }[]
  >([]);

  function play(e: PointerEvent<HTMLDivElement>) {
    if (!gardenRef.current) return;

    const rect = gardenRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setCat({ x, y });

    const id = nextId.current++;

    setPixels((old) => [
      ...old.slice(-28),
      {
        id,
        x,
        y,
        color: pixelColors[Math.floor(Math.random() * pixelColors.length)],
      },
    ]);
  }

  function addRipple(e: MouseEvent<HTMLDivElement>) {
    if (!gardenRef.current) return;

    const rect = gardenRef.current.getBoundingClientRect();
    const id = nextId.current++;

    setRipples((old) => [
      ...old,
      {
        id,
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      },
    ]);

    window.setTimeout(() => {
      setRipples((old) => old.filter((r) => r.id !== id));
    }, 1000);
  }

  function catchButterfly() {
    setCaught((n) => n + 1);
    setPixels((old) => [
      ...old,
      {
        id: nextId.current++,
        x: 48 + Math.random() * 10,
        y: 40 + Math.random() * 10,
        color: "#ffdc78",
      },
    ]);
  }

  function growFlower(id: number) {
    setBlooms((old) =>
      old.includes(id) ? old : [...old, id]
    );
  }

  return (
    <main className="break-page">
      <header className="break-heading">
        <p className="break-eyebrow">A LITTLE CORNER OF NYASHA</p>
        <h1>Take a Break <span>♡</span></h1>
        <p>You have been doing enough. Stay a little. Play.</p>
      </header>

      <div
        className="break-garden"
        ref={gardenRef}
        onPointerMove={play}
        onClick={addRipple}
      >
        <div className="break-sky" />

        <div className="break-stars" aria-hidden="true">
          ✦　·　✧　　✦　·　✧　✦
        </div>

        <div className="break-hills" />

        <div className="break-garden-plants" aria-hidden="true">
          <span className="garden-plant plant-one">🌿</span>
          <span className="garden-plant plant-two">🌸</span>
          <span className="garden-plant plant-three">🌷</span>
          <span className="garden-plant plant-four">🌼</span>
          <span className="garden-plant plant-five">🌺</span>
          <span className="garden-plant plant-six">🌿</span>
        </div>

        <div className="break-pond">
          <span className="pond-lily lily-one">🪷</span>
          <span className="pond-lily lily-two">🌿</span>
          <span className="pond-lily lily-three">🪷</span>
        </div>

        {ripples.map((r) => (
          <span
            key={r.id}
            className="pond-ripple"
            style={{ left: `${r.x}%`, top: `${r.y}%` }}
          />
        ))}

        {pixels.map((p) => (
          <span
            key={p.id}
            className="break-pixel"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              backgroundColor: p.color,
            }}
          />
        ))}

        <div
          className="break-cat"
          style={{
            left: `${cat.x}%`,
            top: `${cat.y}%`,
          }}
          aria-label="Your playful cat"
        >
          🐈
        </div>

        <button
          className="break-butterfly butterfly-one"
          onClick={(e) => {
            e.stopPropagation();
            catchButterfly();
          }}
          aria-label="Catch the pink butterfly"
          title="Catch me!"
        >
          🦋
        </button>

        <button
          className="break-butterfly butterfly-two"
          onClick={(e) => {
            e.stopPropagation();
            catchButterfly();
          }}
          aria-label="Catch the yellow butterfly"
          title="Catch me!"
        >
          🦋
        </button>

        <div className="break-flower-row">
          {[0, 1, 2, 3, 4].map((id) => (
            <button
              key={id}
              className={`break-flower ${
                blooms.includes(id) ? "is-blooming" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                growFlower(id);
              }}
              aria-label="Help a flower bloom"
              title="Help me bloom!"
            >
              {blooms.includes(id)
                ? ["🌷", "🌼", "🌸", "🌻", "🌺"][id]
                : "🌱"}
            </button>
          ))}
        </div>

        <div className="break-instructions">
          <span>🐾</span>
          Move around. Catch butterflies. Help flowers bloom.
        </div>

        <div className="break-score">
          Butterflies found: {caught} 🦋
        </div>
      </div>

      <footer className="break-footer">
        <p>A little break goes a long way. ♡</p>
        <button
          onClick={() => {
            setCaught(0);
            setBlooms([]);
            setPixels([]);
            setRipples([]);
            setCat({ x: 50, y: 43 });
          }}
        >
          Start a little fresh ↻
        </button>
      </footer>
    </main>
  );
}
