"use client";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { Button, Loading } from "@/app/(ui)/components/atoms";
import { Navigations, TeamMemberList, TeamHeader } from "./components";
import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/navigation";

import { toModelList } from "@/app/(ui)/models/team-members";

import useQueryTeamMemberList from "./hooks/useQueryTeamMemberList";
import useRandomSelect from "./hooks/useRandomSelect";
import useQueryTeamInfo from "@/app/(ui)/hooks/useQueryTeamInfo";
import Link from "next/link";
export default function TeamList() {
  const {
    data,
    isLoading: isLoadingTeamInfo,
    isError: isFetchingTeamInfoError,
  } = useQueryTeamInfo();

  const {
    data: memberDtoList,
    isLoading,
    isError,
  } = useQueryTeamMemberList(data?.id);
  const memberList = memberDtoList ? toModelList(memberDtoList) : undefined;

  const { isSelected } = useRandomSelect(
    memberList?.filter((id) => !!id)?.map((member) => member.id as number) || []
  );
  const router = useRouter();

  if (isLoading || isLoadingTeamInfo)
    return <Loading containerClassName="my-20" />;

  if (isError || isFetchingTeamInfoError)
    return (
      <div className="mt-12 text-center text-red-600 text-lg font-semibold">
        Something went wrong on loading team members
      </div>
    );

  return (
    <div className="mt-8 mx-auto max-w-7xl px-6 lg:px-8 sm-px-4">
      <TeamHeader />

      <div className="mt-4 grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="p-6 bg-white overflow-hidden rounded-lg shadow col-span-2">
          <div className="lg:flex items-center">
              <div className="flex-1 text-2xl font-semibold">Members</div>
            <div>
              <Link href="/dashboard/team-members/add-new">
                <Button>Create New Member</Button>
              </Link>
            </div>
          </div>
          {!isLoading && !isError && (
            <>
              <div className="mt-4 lg:mt-8">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        as="div"
                        className="flex lg:hidden w-full justify-between items-center text-sm font-medium focus:outline-none focus-visible:ring"
                      >
                        <div className="flex-1 pr-8">
                          <Button
                            onClick={() =>
                              router.push("/dashboard/team-members/add-new")
                            }
                            className="!w-full !bg-orange-600"
                          >
                            Create New Member
                          </Button>
                        </div>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-7 w-7 text-gray-500`}
                        />
                      </Disclosure.Button>
                    </>
                  )}
                </Disclosure>
              </div>
              {memberList && (
                <TeamMemberList
                  memberList={memberList.map((member) => ({
                    ...member,
                    isSelected: isSelected(member?.id),
                  }))}
                />
              )}
            </>
          )}
        </div>
        <div className="p-6 bg-white overflow-hidden rounded-lg shadow h-80 flex items-center justify-center">
          <div className="text-gray-400">will display overview chart here</div>
        </div>
      </div>
    </div>
  );
}
