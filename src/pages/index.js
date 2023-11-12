import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Posts from "./posts";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <div style={{ margin: "80px 400px" }}>
      <Link href="./posts">This is the home page</Link>
    </div>
  );
}
