import { useState } from "react";
import Navbar from "@/app/navbar";
import { Textarea, Button } from "@nextui-org/react"
const Setting = () => {
  const [authToken, setAuthToken] = useState('');
  const [orgId, setOrgId] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const response = await fetch('https://api-beta.codegpt.co/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify({ authToken, orgId })
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <div className="container grid gap-4 max-w-2xl p-1 text-lg mx-auto pb-6">
        <Navbar />
        <form onSubmit={handleSubmit}>
          <Textarea
            size="lg"
            placeholder="Enter your auth token"
            className="max-w-xs"
            value={authToken}
            onChange={(e) => setAuthToken(e.target.value)}
          />
          <Textarea
            size="lg"
            placeholder="Enter your organization id"
            value={orgId}
            onChange={(e) => setOrgId(e.target.value)}
          />
          <Button type="submit">Submit</Button>
        </form>
        <div>
          <h1>Setting</h1>
        </div>
      </div>
    </>
  )
}

export default Setting;