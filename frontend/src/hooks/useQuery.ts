import { useCallback } from "react";
import { useQueryStore } from "../store/queryStore";
import { processQuery } from "../services/api";

export function useQuery() {
  const { queries, setQueries } = useQueryStore();

  const submitQuery = useCallback(
    async (queryText: string) => {
      const response = await processQuery(queryText);
      if (response?.success) {
        setQueries((prev) => [response.data, ...prev]);
        return response.data;
      }
      return null;
    },
    [setQueries]
  );

  return { queries, submitQuery };
}
