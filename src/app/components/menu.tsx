import React from "react";
import Link from "next/link";
import { useAgentsStore, useCredentialsStore } from "@/app/stores/store";
import { useRouter } from "next/navigation";

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button, User } from "@nextui-org/react";
// import {PlusIcon} from "./PlusIcon.jsx"; 
export default function Menu() {

  // useCredentials ./store
  const { setCredentials } = useCredentialsStore();
  const { setAgentData } = useAgentsStore();
  const router = useRouter();

  const closeSession = () => {
    setCredentials({ apiKey: "", orgId: "" });
    localStorage.removeItem('apiKey');
    localStorage.removeItem('orgId');
    setAgentData({ agentImg: "", agentName: "", message: "" });
    localStorage.removeItem('agentImg');
    localStorage.removeItem('agentName');
    localStorage.removeItem('message');
    router.push('/login');
  };

  return (
    <Dropdown
      showArrow
      radius="sm"
      classNames={{
        base: "before:bg-default-200", // change arrow background
        content: "p-0 border-small border-divider bg-background",
      }}
    >
      <DropdownTrigger>
        <Button variant="ghost" disableRipple>Menu</Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Custom item styles"
        disabledKeys={["profile"]}
        className="p-3"
        itemClasses={{
          base: [
            "rounded-md",
            "text-default-500",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "data-[hover=true]:bg-default-100",
            "dark:data-[hover=true]:bg-default-50",
            "data-[selectable=true]:focus:bg-default-50",
            "data-[pressed=true]:opacity-70",
            "data-[focus-visible=true]:ring-default-500",
          ],
        }}
      >
        <DropdownSection aria-label="Profile & Actions" showDivider>
          <DropdownItem key="dashboard" textValue="Dashboard" > Dashboard  </DropdownItem>
          <DropdownItem key="setting" textValue="Setting"> Setting</DropdownItem>
        </DropdownSection>

        <DropdownSection aria-label="Preferences" showDivider>
          <DropdownItem
            isReadOnly
            key="theme"
            className="cursor-default"
            endContent={
              <select
                className="z-10 outline-none w-16 py-0.5 rounded-md text-tiny group-data-[hover=true]:border-default-500 border-small border-default-300 dark:border-default-200 bg-transparent text-default-500"
                id="theme"
                name="theme"
              >
                <option>System</option>
                <option>Dark</option>
                <option>Light</option>
              </select>
            }
          >
            Theme
          </DropdownItem>
        </DropdownSection>
        <DropdownSection aria-label="Help & Feedback">
          <DropdownItem key="help_and_feedback"> Help & Feedback </DropdownItem>
          <DropdownItem key="login" textValue="login"> <Link href="/login"> Log In  </Link></DropdownItem>
          <DropdownItem key="logout" onClick={closeSession}>Log Out</DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}