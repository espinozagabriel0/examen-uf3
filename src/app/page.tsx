import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <section id="hero" className="text-center py-35 px-2 space-y-4">
        <div className="max-w-[672px] mx-auto flex items-center flex-col gap-4">
          <h1 className="text-[48px] font-[800] leading-[48px]">
            Information you need during on-call emergencies
          </h1>
          <p className="text-[#D9D9D9]">
            Quickly link new on-call tickets to similar past incidents and their
            solutions. All directly in Slack the moment an incident happens.
          </p>
        </div>
        <Button className="bg-[#FAFAFA] text-[#18181b] mt-3">
          Get Started
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 9L5 5L1 1"
              stroke="black"
              strokeWidth="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Button>

        <div className="max-w-[1024px] mx-auto mt-5">
          <Image
            className="w-full"
            src="/images/hero-icon.png"
            width={500}
            height={500}
            alt="Hero Section Image"
          />
        </div>
      </section>
      {/* // */}
      <section id="" className="border">
        <h2 className="">Quick solutions, less stress</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
          <div></div>
        </div>
      </section>
    </>
  );
}
