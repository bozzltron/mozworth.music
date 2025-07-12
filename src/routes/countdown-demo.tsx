import { JSX } from "solid-js";
import CountdownDemo from "../components/CountdownDemo";

export default function CountdownDemoPage(): JSX.Element {
  return (
    <>
      <title>Countdown Timer Demo | mozworth</title>
      <main class="min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#0f0f0f] p-4">
        <div class="container mx-auto max-w-4xl">
          <CountdownDemo />
        </div>
      </main>
    </>
  );
} 