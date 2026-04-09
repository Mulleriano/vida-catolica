export type Liturgy = {
  antifonas: {};
  cor: string;
  data: string;
  leituras: {
    evangelho: [
      {
        referencia: string;
        texto: string;
        titulo: string;
      },
    ];
    extras: [
      {
        referencia: string;
        texto: string;
        titulo: string;
      },
    ];
    primeiraLeitura: [
      {
        referencia: string;
        texto: string;
        titulo: string;
      },
    ];
    salmo: [
      {
        referencia: string;
        refrao: string;
        texto: string;
      },
    ];
    segundaLeitura: [
      {
        referencia: string;
        texto: string;
        titulo: string;
      },
    ];
  };
  liturgia: string;
  oracoes: {
    coleta: string;
    comunhao: string;
    oferendas: string;
  }
};
