import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen bg-red-800 flex items-center justify-center">
      
      <Link href="./SignUp">
        <button className="p-4 bg-amber-400 rounded-2xl cursor-pointer">
          Sign Up
        </button>
      </Link>
    </div>
  );
}
