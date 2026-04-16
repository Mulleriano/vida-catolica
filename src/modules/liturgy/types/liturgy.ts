export type ReadingContent = {
  referencia: string;
  titulo?: string;
  texto: string;
};

export type Liturgy = {
  data: string;
  celebracao: string;
  cor: string;
  leitura: ReadingContent;
  salmo: ReadingContent;
  evangelho: ReadingContent;
};
