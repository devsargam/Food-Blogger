import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

function Share() {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  function facebookShareString(url) {
    return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      "http://localhost:3000/posts/1"
    )}`;
  }

  function twitterShareString(url) {
    return `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      "http://localhost:3000/posts/1"
    )}`;
  }

  function whatsAppShareString(url) {
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(
      "http://localhost:3000/posts/1"
    )}`;
  }

  function instagramShareString(url) {
    return `https://www.instagram.com/sharer/sharer.php?u=${encodeURIComponent(
      "http://localhost:3000/posts/1"
    )}`;
  }

  function closeModal() {
    setIsOpen(!isOpen);
  }

  function openModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button onClick={openModal}>
        <Image src="/posts/share.svg" height={30} width={30} alt="share" />
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Where do you want to share???
                  </Dialog.Title>
                  <div className="mt-4 flex gap-4">
                    <Link
                      href={facebookShareString("/posts/" + 1)}
                      target="_blank"
                    >
                      <Image
                        src={"/logos/facebook.jpg"}
                        height={30}
                        width={30}
                        alt="facebook"
                      />
                    </Link>
                    <Link
                      href={whatsAppShareString("/posts/" + 1)}
                      target="_blank"
                    >
                      <Image
                        src={"/logos/whatsapp.png"}
                        height={30}
                        width={30}
                        alt="whatsapp"
                      />
                    </Link>
                    <Link
                      href={twitterShareString("/posts/" + 1)}
                      target="_blank"
                    >
                      <Image
                        src={"/logos/twitter.jpg"}
                        height={30}
                        width={30}
                        alt="twitter"
                      />
                    </Link>
                    <Link
                      href={instagramShareString("/posts/" + 1)}
                      target="_blank"
                    >
                      <Image
                        src={"/logos/instagram.png"}
                        height={30}
                        width={30}
                        alt="instagram"
                      />
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Share;
