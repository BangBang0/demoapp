import { Network } from "@aptos-labs/ts-sdk";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
// Internal components
import { DisplayValue, LabelValueGrid } from "@/components/LabelValueGrid";
import { isValidNetworkName } from "@/utils/helpers";

export function NetworkInfo() {
  const { network } = useWallet();

  return (
    <div className="flex flex-col gap-6 p-4 bg-white shadow-md rounded-lg">
      <h4 className="text-xl font-semibold text-gray-800">Network Info</h4>
      <LabelValueGrid
        items={[
          {
            label: "Network Name",
            value: (
              <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                <DisplayValue
                  value={network?.name ?? "Not Present"}
                  isCorrect={isValidNetworkName(network)}
                  expected={Object.values<string>(Network).join(", ")}
                />
              </div>
            ),
          },
          {
            label: "Network URL",
            value: network?.url ? (
              <a href={network.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                {network.url}
              </a>
            ) : (
              <p className="text-gray-600">Not Present</p>
            ),
          },
          {
            label: "Chain ID",
            value: <p className="text-gray-800">{network?.chainId ?? "Not Present"}</p>,
          },
        ]}
      />
    </div>
  );
}

