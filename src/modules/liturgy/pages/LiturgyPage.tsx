import { useDailyLiturgy } from "../hooks/useDailyLiturgy";

export default function Home() {
  const { liturgy, loading } = useDailyLiturgy();

  if (loading || !liturgy) {
    return <p>Carregando liturgia...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Liturgia do Dia</h1>

      <div className="space-y-4">
        <div>
          <h2 className="font-semibold">Primeira Leitura</h2>
          <p>{liturgy.leituras.primeiraLeitura[0]?.texto}</p>
        </div>

        <div>
          <h2 className="font-semibold">Salmo</h2>
          <p>{liturgy.leituras.salmo[0]?.texto}</p>
        </div>

        <div>
          <h2 className="font-semibold">Evangelho</h2>
          <p>{liturgy.leituras.evangelho[0]?.texto}</p>
        </div>
      </div>
    </div>
  );
}
