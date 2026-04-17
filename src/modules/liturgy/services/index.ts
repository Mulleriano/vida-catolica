import { gql } from "@apollo/client";

export const GET_DAILY_LITURGY = gql`
  query GetDailyLiturgy {
    liturgiaDoDia {
      celebracao
      cor {
        nome
        hex
        hexTexto
      }
      leitura {
        referencia
        texto
      }
      salmo {
        referencia
        texto
      }
      evangelho {
        referencia
        texto
      }
    }
  }
`;
