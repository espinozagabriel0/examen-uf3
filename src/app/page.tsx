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
            aria-hidden="true"
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
              strokeLinecap="round"
              strokeLinejoin="round"
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
      <section id="" className="max-w-[960px] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Quick solutions, less stress
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 ">
          <div className="p-4 flex flex-col items-start gap-2">
            <svg
              width="56"
              aria-hidden="true"
              height="57"
              viewBox="0 0 56 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="1.03516"
                width="55"
                height="55"
                rx="5.5"
                fill="#09090B"
              />
              <rect
                x="0.5"
                y="1.03516"
                width="55"
                height="55"
                rx="5.5"
                stroke="#27272A"
              />
              <path
                d="M26 18.5352H30"
                stroke="#D9D9D9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M28 30.5352L31 27.5352"
                stroke="#D9D9D9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M28 38.5352C32.4183 38.5352 36 34.9534 36 30.5352C36 26.1169 32.4183 22.5352 28 22.5352C23.5817 22.5352 20 26.1169 20 30.5352C20 34.9534 23.5817 38.5352 28 38.5352Z"
                stroke="#D9D9D9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="text-2xl font-semibold">Fix emergencies fast</h3>
            <p className="text-[#D9D9D9]">
              Save 20-30 minutes per on-call ticket - no more searching for
              relevant issues and runbooks
            </p>
          </div>
          <div className="p-4 flex flex-col items-start gap-2">
            <svg
              aria-hidden="true"
              width="56"
              height="57"
              viewBox="0 0 56 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="1.03516"
                width="55"
                height="55"
                rx="5.5"
                fill="#09090B"
              />
              <rect
                x="0.5"
                y="1.03516"
                width="55"
                height="55"
                rx="5.5"
                stroke="#27272A"
              />
              <path
                d="M37 32.5352L33 36.5352L29 32.5352"
                stroke="#D9D9D9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M33 36.5352V20.5352"
                stroke="#D9D9D9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 24.5352L23 20.5352L27 24.5352"
                stroke="#D9D9D9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M23 20.5352V36.5352"
                stroke="#D9D9D9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="text-2xl font-semibold">Universally compatible</h3>
            <p className="text-[#D9D9D9]">
              Works with PagerDuty, Jira, or custom Slack alerts—Pandem
              integrates with any system
            </p>
          </div>
          <div className="p-4 flex flex-col items-start gap-2">
            <svg
              width="56"
              height="57"
              aria-hidden="true"
              viewBox="0 0 56 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="1.03516"
                width="55"
                height="55"
                rx="5.5"
                fill="#09090B"
              />
              <rect
                x="0.5"
                y="1.03516"
                width="55"
                height="55"
                rx="5.5"
                stroke="#27272A"
              />
              <path
                d="M37 32.5352L33 36.5352L29 32.5352"
                stroke="#D9D9D9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M33 36.5352V20.5352"
                stroke="#D9D9D9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 24.5352L23 20.5352L27 24.5352"
                stroke="#D9D9D9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M23 20.5352V36.5352"
                stroke="#D9D9D9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="text-2xl font-semibold">Secure for your org</h3>
            <p className="text-[#D9D9D9]">
              We keep your data safe by taking top security measures.
            </p>
          </div>
        </div>
      </section>

      {/* // */}
      <section className="max-w-[672px] mx-auto mt-25 px-2 text-center">
        <h2 className="text-4xl font-bold text-center ">
          Instant setup, no custom code
        </h2>
        <p className="text-[#D9D9D9] my-4">
          Invite the bot, pick a channel, and you&apos;re set—no custom code
          needed, and no vendor lock-in.
        </p>
        <div>
          <Image
            className="w-full"
            src="/images/hero-icon.png"
            width={500}
            height={500}
            alt="Instant setup section image"
          />
        </div>
      </section>
      {/*  */}
      <section className="mt-5 pt-15 pb-30 text-center max-w-[672px] mx-auto flex flex-col items-center gap-3">
        <h2 className="text-4xl font-bold text-center ">Get in touch</h2>
        <p className="text-[#D9D9D9]">Request a demo, or hop on a call.</p>
        <Button className="bg-[#FAFAFA] text-[#18181b] mt-3">
          Get Started
          <svg
            aria-hidden="true"
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
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </section>
    </>
  );
}
