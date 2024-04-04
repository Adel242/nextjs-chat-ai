"use client"
import { useState } from "react";
import { Textarea, Button } from "@nextui-org/react";
import { useCredentialsStore } from "@/app/stores/store";
import { useRouter } from "next/navigation";


export default function Login() {
  const { setCredentials, apiKey, orgId } = useCredentialsStore();
  // const [isError, setIsError] = useState(false); pendiente definicion de error
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const apiKey = formData.get('apiKey') as string ?? "";
    const orgId = formData.get('orgId') as string ?? "";
    // if (!apiKey) {
    //   const sustantApiKey = localStorage.getItem('apiKey');
    //   const sustantOrgId = localStorage.getItem('orgId');
    // }
    // setCredentials({ apiKey, orgId });
    // router.push('/');

    try {
      const response = await fetch('https://api-beta.codegpt.co/api/v1/agents', {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          ...(orgId ? { 'CodeGPT-Org-Id': orgId } : {})
        }
      });
      if (response.ok) {
        setCredentials({ apiKey, orgId });
        localStorage.setItem('apiKey', apiKey);
        // localStorage.setItem('orgId', orgId);
        router.push('/');
      } else {
        throw new Error('Invalid API Key');
      }
    } catch (error) {
      alert('Invalid API Key')   //setIsError(true)  necesito definir tipo de error
    }
  };

  return (
    <>
      <div className="flex h-screen max-h-screen w-full justify-center mt-40">
        <form className="direction-column m " onSubmit={handleSubmit}>
          <div className="">
            <Textarea
              errorMessage
              name="apiKey"
              placeholder="Enter your auth token"
              className="max-w-xs flex items-center"
              description="To get your API Key, visit the CodeGPT Playground"
              defaultValue={typeof window !== 'undefined' ? window.localStorage.apiKey : ''}
              endContent={
                <Button
                  color="primary"
                  type="submit">
                  Submit
                </Button>
              }
            />
          </div>

          <div>
            <Textarea
              errorMessage
              name="orgId"
              placeholder="Enter your organization id"
              className="max-w-xs"
              defaultValue={orgId}
              description="To obtain your Organization Id, check the playground for your organization's ID"
            />
          </div>
        </form>
      </div>
    </>
  );
}