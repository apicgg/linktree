import Image from "next/image";
import LinkCard from "../components/LinkCard";
import data from "../data.json";

export default function Home() {
  return (
    <div className="mx-auto mt-16 flex w-full flex-col items-center justify-center px-8">
      <Image
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="mt-4 mb-8 text-xl font-bold text-white">{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
    </div>
  );
}
