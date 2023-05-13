import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <Link href="/chat">Move to Chat</Link>
    </>
  );
}