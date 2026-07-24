import { currentPass, PASSES } from "../lib/passStore";

export default function Viewport() {
  return (
    <div class="viewport-wrap">
      <div class="viewport-topbar">
        <span class="rec">LIVE VIEWPORT</span>
        <span class="cur-pass-label">
          PASS: <span class="mono">{PASSES[currentPass()].label}</span>
        </span>
      </div>

      <svg
        class="viewport"
        data-pass={currentPass()}
        viewBox="0 0 560 360"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" y="0" width="560" height="360" fill="#0b0d12" />
        <rect class="shape s-ground" x="0" y="250" width="560" height="110" />
        <ellipse class="shape s-glow" cx="290" cy="150" rx="140" ry="140" fill="#ffd166" opacity="0" />
        <ellipse class="shape s-portal-core" cx="290" cy="150" rx="92" ry="118" />
        <ellipse class="shape s-portal-ring" cx="290" cy="150" rx="92" ry="118" stroke-width="6" />
        <rect
          class="shape s-cube"
          x="118"
          y="222"
          width="46"
          height="46"
          transform="rotate(-8 141 245)"
        />
        <circle class="shape s-sphere" cx="392" cy="228" r="36" />
        <rect
          class="shape s-cube"
          x="410"
          y="272"
          width="28"
          height="28"
          opacity=".7"
          transform="rotate(12 424 286)"
        />
      </svg>

      <div class="viewport-caption">
        <span>g_buffer.pass</span>
        <span class="cur">{PASSES[currentPass()].caption}</span>
      </div>
    </div>
  );
}
