import React, { useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useRouter } from "next/navigation"

export default function ModalWelcome() {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const router = useRouter();

  useEffect(() => {
    onOpen(); 
  }, [onOpen])

  const handleRedirect = () => {
    router.push('/setting');
    onClose();
  }

  return (
    <>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
      hideCloseButton={true}
        radius="lg"
        classNames={{
          body: "py-10 px-5",
          // header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
        }}
      >
        <ModalContent>
            <ModalHeader className="flex flex-col gap-1"/>
            <p className="p-5">CHAT CODE-GPT</p>
            <ModalBody>
              <p className="">
                CODE GPT
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam pulvinar risus non risus hendrerit venenatis.
                Pellentesque sit amet hendrerit risus, sed porttitor quam.
              </p>
              <p>
                Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
              </p>
            </ModalBody>
            
            <ModalFooter>
              <Button
                className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20"
                onClick={handleRedirect}>
                Login
              </Button>
            </ModalFooter>
        </ModalContent>
      </Modal>
    </>);
}