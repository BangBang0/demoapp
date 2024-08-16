import { useWallet } from "@aptos-labs/wallet-adapter-react";
// Internal components
import { LabelValueGrid, DisplayValue } from "@/components/LabelValueGrid";

export function AccountInfo() {
  const { account } = useWallet();

  const address = account?.address || "Not Present";
  const publicKey = account?.publicKey?.toString() || "Not Present";
  const ansName = account?.ansName || "Not Present";

  return (
    <div className="flex flex-col gap-6 p-4 bg-white shadow-md rounded-lg">
      <h4 className="text-xl font-semibold text-gray-800">Account Info</h4>
      <LabelValueGrid
        items={[
          {
            label: "Address",
            value: <DisplayValue value={address} isCorrect={!!account?.address} />,
          },
          {
            label: "Public Key",
            value: (
              <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                <DisplayValue value={publicKey} isCorrect={!!account?.publicKey} />
              </div>
            ),
          },
          {
            label: "ANS Name",
            subLabel: "(only if attached)",
            value: <p>{ansName}</p>,
          },
        ]}
      />
    </div>
  );
}

