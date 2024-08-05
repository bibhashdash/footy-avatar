"use client";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { client } from "./client";
import { chain } from "@/app/chain";
import { AvatarBuilder } from "@/app/AvatarBuilder";

export default function Home() {

  const activeAccount = useActiveAccount();

  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <div className="flex justify-center mb-20">
          <ConnectButton
            chain={chain}
            client={client}
            appMetadata={{
              name: "Example App",
              url: "https://example.com"
            }}
          />
        </div>
        {
          activeAccount && activeAccount.address ? (
            <div>
              <AvatarBuilder />
            </div>
          ) : (
            <div>
              Please connect a wallet
            </div>
          )
        }
      </div>
    </main>
  );
}
