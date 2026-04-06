import { useMutation, useQuery } from "@tanstack/react-query";
import type { ContactMessage, NewsItem, QuizQuestion } from "../backend.d";
import { useActor } from "./useActor";

export function useQuizQuestions() {
  const { actor, isFetching } = useActor();
  return useQuery<QuizQuestion[]>({
    queryKey: ["quizQuestions"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getQuestions();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useNewsItems() {
  const { actor, isFetching } = useActor();
  return useQuery<NewsItem[]>({
    queryKey: ["newsItems"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getNewsItems();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitScore() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      user,
      score,
      total,
    }: {
      user: string;
      score: bigint;
      total: bigint;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitScore(user, score, total);
    },
  });
}

export function useSubmitContact() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (message: ContactMessage) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitMessage(message);
    },
  });
}
