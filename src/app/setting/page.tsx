"use client"
import { Textarea, Button } from "@nextui-org/react";
import { useCredentialsStore } from "@/app/stores/store";
import { useRouter } from "next/navigation";
const Setting = () => {

  const { setCredentials, apiKey, orgId } = useCredentialsStore();
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const apiKey = formData.get('apiKey') as string ?? "";
    const orgId = formData.get('orgId') as string ?? "";
    if (!apiKey) {
      // alert('Insert your apiKey')
      
      return
    }
    setCredentials({ apiKey, orgId });
    router.push('/');
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
              defaultValue={apiKey}
              endContent={
                <Button
                  color="primary"
                  type="submit">
                  Submit</Button>
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
  )
};



export default Setting;