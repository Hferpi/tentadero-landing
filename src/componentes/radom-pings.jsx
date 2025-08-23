export default function RandomPings({ count = 8 }) {
    const pings = Array.from({ length: count }, (_, i) => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 4 + Math.random() * 8,
      color: ["rgba(255,255,255,0.4)", "rgba(239,68,68,0.6)", "rgba(249,115,22,0.5)"][Math.floor(Math.random() * 3)],
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 3
    }));
  
    return (
      <div className="absolute inset-0 pointer-events-none">
        {pings.map((ping, index) => (
          <div
            key={index}
            className="absolute rounded-full animate-ping"
            style={{
              top: `${ping.top}%`,
              left: `${ping.left}%`,
              width: `${ping.size}px`,
              height: `${ping.size}px`,
              backgroundColor: ping.color,
              animationDelay: `${ping.delay}s`,
              animationDuration: `${ping.duration}s`,
            }}
          />
        ))}
      </div>
    );
  }
  