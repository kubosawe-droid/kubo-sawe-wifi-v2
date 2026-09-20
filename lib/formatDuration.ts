export function formatDuration(minutes: number): string {
  if (!minutes || minutes <= 0) return "Chagua Muda";
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours === 0) return `Dakika ${minutes}`;
  if (mins === 0) return `Masaa ${hours} - Dakika ${minutes}`;
  return `Masaa ${hours} Saa ${mins} - Dakika ${minutes}`;
}
