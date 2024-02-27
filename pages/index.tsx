import { Header } from "@/components";
import Link from "next/link";
import { pages } from "@/constants/globals";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex justify-center gap-5 mt-10 text-white">
        {pages.map((page) => {
          return (
            <Link
              key={page.url}
              className="bg-slate-700 p-2 rounded-md"
              href={page.url}
            >
              {page.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
