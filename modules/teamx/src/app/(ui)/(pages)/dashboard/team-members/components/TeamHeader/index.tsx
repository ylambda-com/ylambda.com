import { InlineEditableInput } from "@/app/(ui)/components/atoms";
import useQueryTeamInfo from "@/app/(ui)/hooks/useQueryTeamInfo";
import useUpdateTeamInfo from "../../../../../hooks/useUpdateTeamInfo";

const TeamHeader: React.FC = () => {
  const { data: teamInfo } = useQueryTeamInfo();
  const { mutate: updateTeamInfo } = useUpdateTeamInfo();
  const { name: teamName, description: teamDescription } = teamInfo || {};

  const onChanged = (field: string) => (value?: string) => {
    teamInfo &&
      updateTeamInfo({
        ...teamInfo,
        [field]: value,
      });
  };

  if (!teamInfo) return null;

  return (
    <div className="">
      <InlineEditableInput
        value={teamName}
        onChanged={onChanged("name")}
        className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl !bg-gray-100"
      />
      <InlineEditableInput
        value={teamDescription}
        onChanged={onChanged("description")}
        className="mt-2 text-lg leading-8 text-gray-600 !bg-gray-100"
      />
    </div>
  );
};

export default TeamHeader;
