// import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section id="hero" className="border">
      <h1>Information you need during on-call emergencies</h1>
      <p>
        Quickly link new on-call tickets to similar past incidents and their
        solutions. All directly in Slack the moment an incident happens.
      </p>
      <Button>Get Started</Button>
    </section>
  );
}
