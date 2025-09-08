function transpColor(color: string, pct: number) {
  const realPct = Math.max(0, Math.min(1, pct));

  const hexPct = Math.round(realPct * 255)
    .toString(16)
    .padStart(2, "0");

  const realColor = color.replace(/[^\da-fA-F]/g, "");

  const pureColor = realColor.padEnd(6, realColor).slice(0, 6);

  return "#" + pureColor + hexPct;
}

export default class Colors {
  static background = "#ffffff";

  static texto = "#333333";

  static branco = "#ffffff";
  static rosaClaro = "#f7c1ea";
  static azulClaro = "#9added";
  static cinzaClaro = "#dddddd";
  static rosa = "#ec3fa8";
  static roxo = "#8d4f98";
  static vermelho = "#d6213b";
  static dourado = "#daa520";

  static transparent = "#0000";
  static transparency = transpColor;
}
