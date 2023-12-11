import Link from "next/link";
import { introduction } from "../../lib/data";
import { volumes } from "@/lib/data.js";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Volumes() {
  const router = useRouter();
  const handleClick = () => {
    const randomButton = volumes[Math.floor(Math.random() * volumes.length)];
    router.push(`/volumes/${randomButton.slug}`);
  };
  return (
    <>
      <Head>
        <title>All Volumes: The Lord Of The Rings</title>
      </Head>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <hr />
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>

      <button onClick={handleClick} type="button">
        Random Button
      </button>
    </>
  );
}
