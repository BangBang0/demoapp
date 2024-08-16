import { useWallet } from "@aptos-labs/wallet-adapter-react";
// Internal components
import { LabelValueGrid } from "@/components/LabelValueGrid";

export function WalletDetails() {
  const { wallet } = useWallet();
  return (
    <div className="flex flex-col gap-6 p-4 bg-white shadow-md rounded-lg">
      <h4 className="text-xl font-semibold text-gray-800">Wallet Details</h4>
      <LabelValueGrid
        items={[
          {
            label: "Icon",
            value: wallet?.icon ? (
              <img src={wallet.icon} alt={wallet.name} width={24} height={24} className="mr-2 inline" />
            ) : (
              "Not Present"
            ),
          },
          {
            label: "Name",
            value: <p>{wallet?.name ?? "Not Present"}</p>,
          },
          {
            label: "URL",
            value: wallet?.url ? (
              <a href={wallet.url} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                {wallet.url}
              </a>
            ) : (
              "Not Present"
            ),
          },
        ]}
      />
    </div>
  );
}

