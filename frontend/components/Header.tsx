import { WalletSelector } from "./WalletSelector";

export function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-2 max-w-screen-xl mx-auto w-full flex-wrap bg-white shadow-md">
      <h1 className="text-xl font-bold">Healthcare App</h1>

      <nav className="flex gap-4 items-center flex-wrap">
        <a href="/home" className="text-gray-700 hover:text-gray-900">Home</a>
        <a href="/profile" className="text-gray-700 hover:text-gray-900">Profile</a>
        <a href="/records" className="text-gray-700 hover:text-gray-900">Records</a>
        <WalletSelector />
      </nav>
    </header>
  );
}

