import { Fragment, ReactNode } from "react";

// Interface for the props expected by the LabelValueGrid component
export interface LabelValueGridProps {
  items: Array<{
    label: string;
    subLabel?: string;
    value: ReactNode;
  }>;
}

// The LabelValueGrid component displays a list of labels and their corresponding values in a grid layout
export function LabelValueGrid({ items }: LabelValueGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 p-4 bg-white shadow-md rounded-lg">
      {items.map(({ label, subLabel, value }) => (
        <Fragment key={label}>
          <div className="flex flex-col text-gray-800">
            <div className="font-semibold">{label}</div>
            {subLabel && <div className="text-sm text-gray-500">{subLabel}</div>}
          </div>
          <div className="text-gray-900">{value}</div>
        </Fragment>
      ))}
    </div>
  );
}

// Interface for the props expected by the DisplayValue component
export interface DisplayValueProps {
  value: string;
  isCorrect: boolean;
  expected?: string;
}

// The DisplayValue component shows a value and indicates whether it is correct, with optional expected value display
export function DisplayValue({ value, isCorrect, expected }: DisplayValueProps) {
  return (
    <div className="flex flex-col gap-1">
      <p
        className={
          isCorrect ? "text-green-600 dark:text-green-400" : "text-red-500 dark:text-red-300"
        }
      >
        {value}
      </p>
      {!isCorrect && expected && (
        <p className="text-sm text-gray-600">Expected: {expected}</p>
      )}
    </div>
  );
}

