"use client";

import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { Notification } from ".";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";

export const Widget = () => {
  return (
    <div className="flex flex-col w-[500px] bg-gray-800 rounded-md">
      <div className="flex justify-between items-center h-14 bg-slate-700 p-4 rounded-t-md font-bold">
        <div>Notificações</div>
        <button className="text-[12px] text-violet-300 uppercase">
          Marcar todas como vistas
        </button>
      </div>

      {/* Recentes */}
      <div className="flex flex-col gap-1">
        <h1 className="flex items-center p-4 h-10 ">Recentes</h1>
        <Notification.Root>
          <Notification.Icon icon={HiOutlineRocketLaunch} />
          <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
          <Notification.Actions>
            <Notification.Action icon={IoMdClose} />
          </Notification.Actions>
        </Notification.Root>

        <Notification.Root>
          <Notification.Icon icon={HiOutlineRocketLaunch} />
          <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
          <Notification.Actions>
            <Notification.Action onClick={() => {}} icon={IoMdClose} />
            <Notification.Action
              icon={IoMdCheckmark}
              className="bg-violet-500 hover:bg-violet-600 dark:bg-violet-500 dark:hover:bg-violet-600"
            />
          </Notification.Actions>
        </Notification.Root>
      </div>

      {/* Antigas */}
      <div className="flex flex-col gap-1">
        <h1 className="flex items-center p-4 h-10 ">Antigas</h1>
        <Notification.Root>
          <Notification.Icon icon={HiOutlineRocketLaunch} />
          <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
        </Notification.Root>

        <Notification.Root>
          <Notification.Icon icon={HiOutlineRocketLaunch} />
          <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
        </Notification.Root>
      </div>
    </div>
  );
};
