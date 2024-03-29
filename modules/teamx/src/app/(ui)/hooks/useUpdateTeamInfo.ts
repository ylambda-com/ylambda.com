import { useMutation, useQueryClient } from "react-query";
import { QUERY_TEAM_INFO } from "./useQueryTeamInfo";
import axios from "axios";

const updateTeamInfo = async (updatedTeam: {
  id?: string;
  name: string;
  description: string;
}) => {
  if (!updatedTeam?.id) return;

  return axios.put("/api/teams", {
    ...updatedTeam,
  });
};

const useUpdateTeamInfo = (
  onSuccess?: (data: any, variables: any, context: any) => void,
  onError?: (error: any, variables: any, context: any) => void
) => {
  const queryClient = useQueryClient();

  return useMutation(updateTeamInfo, {
    onMutate: (updatedTeam) => {
      const previousValue = queryClient.getQueriesData([QUERY_TEAM_INFO]);
      queryClient.setQueryData([QUERY_TEAM_INFO], updatedTeam);

      return { previousValue };
    },
    onSuccess,
    onError: (err, updatedTeam, context) => {
      context &&
        queryClient.setQueryData([QUERY_TEAM_INFO], context.previousValue);

      onError && onError(err, updatedTeam, context);
    },
  });
};

export default useUpdateTeamInfo;
