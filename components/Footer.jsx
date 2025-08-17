import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";
import * as motion from "motion/react-client";

export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.9 }}
      className=""
    >
      <div className="py-10 bg-purple-600">
        <div className="flex flex-row justify-between gap-5 px-3 md:px-40">
          <div className="flex flex-col gap-3">
            <h1 className="text-white text-2xl font-semibold">Plotify</h1>
            <p className="max-w-xs xs:text-xs pb-5">
              Our recommendation collection will help your home look better and
              we provide the best product for you.
            </p>
            <div className="flex flex-row gap-5">
              <Link href="">
                <BsTwitterX className="text-2xl hover:text-gray-800" />
              </Link>

              <Link href="">
                <FaYoutube className="text-2xl hover:text-red-600" />
              </Link>
              <Link href="">
                <FaFacebook className="text-2xl hover:text-blue-500" />
              </Link>

              <Link href="">
                <FaInstagram className="text-2xl hover:text-pink-600" />
              </Link>
              <Link href="">
                <FaTiktok className="text-2xl hover:text-black" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold">SITE MAP</h1>
            <Link href="/books" className="hover:text-orange-300">
              Books
            </Link>
            <Link href="" className="hover:text-orange-300">
              Community
            </Link>
            <Link href="/about" className="hover:text-orange-300">
              About
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex flex-col gap-3">
              <h1 className="font-semibold">LEGAL</h1>
              <Link href="" className="hover:text-orange-300">
                Privacy Policy
              </Link>
              <Link href="" className="hover:text-orange-300">
                Terms of Services
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-orange-300 py-1">
        <h1 className="text-center text-gray-700">
          © 2025 Plotify. All rights reserved.
        </h1>
      </div>
    </motion.div>
  );
}
