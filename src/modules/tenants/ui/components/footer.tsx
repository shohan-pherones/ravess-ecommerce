import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const Footer = () => {
  return (
    <footer className="border-t font-medium bg-white">
      <div className="max-w-(--breakpoint-xl) mx-auto flex items-center gap-2 h-full px-4 lg:px-12 py-6">
        <p>Powered by</p>
        <Link href="/">
          <span
            className={cn(
              poppins.className,
              "text-2xl font-semibold lowercase"
            )}
          >
            Ravess
          </span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
