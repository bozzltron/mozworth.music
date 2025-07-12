import { JSX, For } from "solid-js";
import CountdownTimer from "./CountdownTimer";

export default function CountdownDemo(): JSX.Element {
  // Example release dates for different projects
  const releases = [
    {
      title: "The Sky Is Falling",
      releaseDate: new Date('2025-07-15T00:00:00'),
      subtitle: "New Single • July 15, 2025",
      coverImage: "/the_sky_is_falling.webp",
      type: "Single"
    },
    {
      title: "Release Party",
      releaseDate: new Date('2025-08-01T19:00:00'),
      subtitle: "Live Event • August 1, 2025 • 7:00 PM",
      coverImage: "/the_sky_is_falling.webp",
      type: "Event"
    },
    {
      title: "Next Album",
      releaseDate: new Date('2025-12-01T00:00:00'),
      subtitle: "Full Album • December 1, 2025",
      coverImage: "/album-placeholder.webp",
      type: "Album"
    }
  ];

  return (
    <div class="countdown-demo-container space-y-8">
      <div class="text-center mb-8">
        <h2 class="text-2xl font-bold text-white mb-2">
          Countdown Timer Examples
        </h2>
        <p class="text-white/70">
          Reusable countdown component for releases, events, and more
        </p>
      </div>

      <For each={releases}>
        {(release) => (
          <div class="bg-black/60 border border-white/30 rounded-xl p-6 w-full max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-6">
            <div class="flex-shrink-0">
              <img
                src={release.coverImage}
                alt={`${release.title} cover art`}
                class="rounded-lg shadow-lg w-32 h-32 object-cover"
              />
            </div>
            
            <div class="flex-1 text-center md:text-left">
              <div class="text-sm text-white/60 mb-1">
                {release.type}
              </div>
              <div class="text-xl font-bold text-white mb-4">
                {release.title}
              </div>
              
              <CountdownTimer
                releaseDate={release.releaseDate}
                subtitle={release.subtitle}
                className="mb-4"
                onComplete={() => {
                  console.log(`${release.title} is now available!`);
                }}
              />
            </div>
          </div>
        )}
      </For>

      <div class="bg-black/40 border border-white/20 rounded-xl p-6 max-w-2xl mx-auto">
        <h3 class="text-lg font-semibold text-white mb-3">
          How to Use the Countdown Timer
        </h3>
        <div class="text-sm text-white/70 space-y-2">
          <p>
            <strong>Basic Usage:</strong> 
            <code class="bg-white/10 px-2 py-1 rounded ml-2">
              &lt;CountdownTimer releaseDate={`{new Date("2025-07-15T00:00:00")}`} /&gt;
            </code>
          </p>
          <p>
            <strong>With Custom Title:</strong> 
            <code class="bg-white/10 px-2 py-1 rounded ml-2">
              title="Releasing in:"
            </code>
          </p>
          <p>
            <strong>With Subtitle:</strong> 
            <code class="bg-white/10 px-2 py-1 rounded ml-2">
              subtitle="July 15, 2025 • Midnight"
            </code>
          </p>
          <p>
            <strong>With Completion Callback:</strong> 
            <code class="bg-white/10 px-2 py-1 rounded ml-2">
              onComplete={`{() => alert("Released!")}`}
            </code>
          </p>
        </div>
      </div>
    </div>
  );
} 