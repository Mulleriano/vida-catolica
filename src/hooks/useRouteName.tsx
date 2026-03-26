import { useMatches } from "react-router-dom";

type RouteHandle = {
  name?: string;
};

export function useRouteName() {
  const matches = useMatches();

  const matchWithName = [...matches]
    .reverse()
    .find((match) => (match.handle as RouteHandle)?.name);

  return (matchWithName?.handle as RouteHandle | undefined)?.name;
}
