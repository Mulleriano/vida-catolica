export type ReadingContent = {
  referencia: string;
  titulo?: string;
  texto: string;
};

export type Cor = {
  nome: string;
  hex: string;
  hexTexto: string;
}

export type Liturgy = {
  data: string;
  celebracao: string;
  cor: Cor;
  leitura: ReadingContent;
  salmo: ReadingContent;
  evangelho: ReadingContent;
};
