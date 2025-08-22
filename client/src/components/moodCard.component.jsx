export default function MoodCard({ emoji, image, label, selected = false }) {
  const content = image ?? (
    <span className="text-5xl select-none" aria-hidden>
      {emoji || "🙂"}
    </span>
  );

  return (
    <div
      className={`relative w-[180px] h-[220px] cursor-pointer transition-transform duration-300 hover:-translate-y-1 ${
        selected ? "scale-[1.02]" : ""
      }`}
    >
      {/* Gradient frame */}
      <div className="absolute inset-0 rounded-[1.2em] bg-[linear-gradient(135deg,var(--color-light-primary),var(--color-light-accent))] dark:bg-[linear-gradient(135deg,var(--color-dark-primary),var(--color-dark-accent))]" />
      {/* Soft glow */}
      <div className="absolute inset-0 rounded-[1.2em] blur-[30px] opacity-60 bg-[linear-gradient(135deg,var(--color-light-primary),var(--color-light-accent))] dark:bg-[linear-gradient(135deg,var(--color-dark-primary),var(--color-dark-accent))]" />
      {/* Inner card */}
      <div
        className={`absolute inset-[6px] rounded-[1em] bg-light-card dark:bg-dark-card ${
          selected
            ? "ring-2 ring-[var(--color-light-primary)] dark:ring-[var(--color-dark-primary)]"
            : ""
        }`}
      >
        {/* Subtle highlight */}
        <div className="absolute top-0 left-0 w-1/2 h-full rounded-l-[1em] bg-white/5" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        {content}
        {label && (
          <span className="mt-2 text-sm text-light-accent dark:text-dark-accent">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}