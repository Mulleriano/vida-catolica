export type Reading = {
  referencia: string;
  texto: string;
  titulo: string;
};

export type Psalm = {
  referencia: string;
  refrao: string;
  texto: string;
};

export type Leituras = {
  evangelho: Reading[];
  extras: Reading[];
  primeiraLeitura: Reading[];
  salmo: Psalm[];
  segundaLeitura: Reading[];
};

export type Oracoes = {
  coleta: string;
  comunhao: string;
  oferendas: string;
};

export type Liturgy = {
  antifonas: Record<string, unknown>;
  cor: string;
  data: string;
  leituras: Leituras;
  liturgia: string;
  oracoes: Oracoes;
};