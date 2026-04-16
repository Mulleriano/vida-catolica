import { useQuery } from "@apollo/client/react";
import { GET_DAILY_LITURGY } from "../services";
import type { Liturgy } from "../types/liturgy";

export function useDailyLiturgy() {
  const { data, loading, error } = useQuery<{ liturgiaDoDia: Liturgy }>(
    GET_DAILY_LITURGY,
  );

  return {
    liturgy: data?.liturgiaDoDia || null,
    loading,
    error,
  };
}
