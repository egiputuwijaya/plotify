"use client";
import { useState } from "react";
import Link from "next/link";
import { FaTimes, FaBars } from "react-icons/fa";
import * as motion from "motion/react-client";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState();

  return (
    <div className="bg-white md:px-30">
      {/* tampilan dekstop */}
      <div className="hidden md:block">
        <div className="flex flex-row justify-between py-4 items-center">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="text-4xl text-black font-semibold"
          >
            Plotify
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="flex flex-row gap-12 text-xl text-gray-500"
          >
            <Link href="" className="hover:text-purple-500">
              Books
            </Link>
            <Link href="" className="hover:text-purple-500">
              Community
            </Link>
            <Link href="" className="hover:text-purple-500">
              About
            </Link>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="text-purple-500 text-xl px-4 py-1 rounded-md border-3 border-purple-400 hover:text-white hover:bg-purple-400 transition."
          >
            <button>Sign in</button>
          </motion.button>
        </div>
      </div>

      {/* tampilan mobile */}
      <div className="block md:hidden">
        <div className="flex flex-row justify-between px-5 py-4">
          <h1 className="text-black text-xl">Plotify</h1>
          <button onClick={() => setIsOpen(!isOpen)} className="transition">
            {isOpen ? (
              <FaTimes className="text-2xl text-black" />
            ) : (
              <FaBars className="text-2xl text-black" />
            )}
          </button>
        </div>
        <div className="">
          {isOpen && (
            <div className="flex flex-col gap-1 pb-1 ">
              <Link
                href=""
                className="text-gray-500 hover:text-white hover:bg-purple-400 hover:font-semibold transition px-5"
              >
                Books
              </Link>
              <Link
                href=""
                className="text-gray-500 hover:text-white hover:bg-purple-400 hover:font-semibold transition px-5"
              >
                Community
              </Link>
              <Link
                href=""
                className="text-gray-500 hover:text-white hover:bg-purple-400 hover:font-semibold transition px-5"
              >
                About
              </Link>
              <Link
                href=""
                className="text-gray-500 hover:text-white hover:bg-purple-400 hover:font-semibold transition px-5"
              >
                Sign in
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
