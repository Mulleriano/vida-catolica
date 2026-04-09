import { useEffect, useState } from "react";
import { getDailyLiturgy } from "../services";
import type { Liturgy } from "../types/liturgy";

export function useDailyLiturgy() {
  const [liturgy, setLiturgy] = useState<Liturgy | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLiturgy() {
      try {
        const data = await getDailyLiturgy();
        setLiturgy(data);
      } catch (error) {
        console.error("Erro ao buscar liturgia", error);
      } finally {
        setLoading(false);
      }
    }

    fetchLiturgy();
  }, []);

  return { liturgy, loading };
}
