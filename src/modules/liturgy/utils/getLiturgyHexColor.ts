export default function getLiturgyHexColor(cor: string): string {
  switch (cor.toLowerCase()) {
    case "verde":
      return "#008000";
    case "roxo":
      return "#800080";
    case "vermelho":
      return "#FF0000";
    case "rosa":
      return "#FFC0CB";
    case "branco":
      return "#FFFFFF";
  }

  return "#000000";
}