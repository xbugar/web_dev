import { useQuery } from "@tanstack/react-query";
import { getNotebook } from "@/services/notebookService.ts";
import { NotebookCard } from "@/components/cards/NotebookCard.tsx";
import { iconMap } from "@/components/IconMap.tsx";
import { AccentColor } from "@/components/cards/cardColors.tsx";

export function useNotebook(id: String) {
  const {data, isPending, isError, error} = useQuery({
    queryKey: ["notebookId", id],
    queryFn: () => getNotebook(id),
  });

  if (isPending) {
    return <div>Loading...</div>
  }

  if (isError || !data) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <NotebookCard to={`/notebooks/${id}`} title={data.title} Icon={iconMap[data.icon]} color={data.color as AccentColor} noteCount={5} lastUpdated={data.updatedAt}/>
    </div>
  );
}