import { create } from "zustand";

type Step = "credo" | "pai_nosso" | "ave_maria" | "gloria" | "final";

interface RosaryState {
  step: Step;
  aveMariaCount: number;
  mysteryIndex: number;

  next: () => void;
  reset: () => void;
}

export const useRosaryStore = create<RosaryState>((set, get) => {
  const transitions = {
    credo: () => ({
      step: "pai_nosso",
    }),

    pai_nosso: () => ({
      step: "ave_maria",
      aveMariaCount: 1,
    }),

    ave_maria: () => {
      const { aveMariaCount } = get();

      if (aveMariaCount < 10) {
        return { aveMariaCount: aveMariaCount + 1 };
      }

      return { step: "gloria" };
    },

    gloria: () => {
      const { mysteryIndex } = get();

      if (mysteryIndex < 4) {
        return {
          mysteryIndex: mysteryIndex + 1,
          aveMariaCount: 0,
          step: "pai_nosso",
        };
      }

      return { step: "final" };
    },

    final: () => ({}),
  };

  return {
    step: "credo",
    aveMariaCount: 0,
    mysteryIndex: 0,

    next: () => {
      const { step } = get();
      const update = transitions[step]();

      set((state) => ({
        ...state,
        ...update,
      }));
    },

    reset: () =>
      set({
        step: "credo",
        aveMariaCount: 0,
        mysteryIndex: 0,
      }),
  };
});
