import { createFileRoute, Link } from '@tanstack/react-router';
import gradient from '@/assets/gradient.webp';
import notebooksandnotes from '@/assets/notebooksandnotes.webp';
import gradiamockups from '@/assets/gradiamockups.webp';
import background2 from '@/assets/Rectangle-2.webp';
import calendarandevents from '@/assets/calendarandevents.webp';
import flashdecksandflashcards from '@/assets/flashdecksandflashcards.webp';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRef } from 'react';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const sections = [
    {
      title: 'Organize Smarter',
      description:
        'Gradia is your all-in-one student workspace. Take notes, build flashcards, planassignments, and track everything in one place – across mobile and desktop.',
      image: gradiamockups,
    },
    {
      title: 'Notes & Notebooks',
      description:
        'Take clear, structured notes for any subject. Organize them into custom notebooks to keep your studies tidy and easy to navigate. Perfect for lectures, readings, and brainstorming sessions.',
      image: notebooksandnotes,
    },
    {
      title: 'Flashdecks & Flashcards',
      description:
        'Turn your notes into flashcards with a click. Group them into Flashdecks for focused studying. Gradia supports text, images, and smart review modes to help you retain what matters most.',
      image: flashdecksandflashcards,
    },
    {
      title: 'Calendar & Events',
      description:
        "Stay ahead of assignments, deadlines, and exams. Gradia's calendar helps you plan study time, schedule events, and manage your workload — all in one place.",
      image: calendarandevents,
    },
    {
      title: 'Tags & Search',
      description:
        'Tag everything — notes, flashcards, events — for instant access. Use powerful search to find topics, terms, or concepts across your entire workspace in seconds.',
      image: background2,
    },
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-bg-lm-primary dark:bg-bg-dm-primary h-dvh p-2">
      <div
        className="hide-scrollbar flex h-full w-full flex-col gap-8 overflow-scroll rounded-3xl bg-cover bg-center bg-no-repeat lg:justify-between"
        style={{ backgroundImage: `url(${gradient})` }}
        ref={scrollRef}
      >
        <section className="relative flex min-h-dvh flex-col items-center justify-center gap-2 px-5 py-4 lg:w-full">
          <Link to="/" className="font-serif text-8xl font-bold text-white lg:text-9xl">
            gradia.
          </Link>
          <div className="text-md text-center font-serif text-white">
            Write it down, make it happen.
          </div>
          <div className="absolute bottom-12 flex items-center justify-center gap-4">
            <Link
              to={'/login'}
              className="flex items-center justify-center rounded-full bg-white/10 p-4 text-white backdrop-blur-lg"
            >
              LOGIN
            </Link>
            <button
              className="flex animate-bounce cursor-pointer items-center justify-center rounded-full bg-white/10 p-4 text-white backdrop-blur-lg"
              onClick={() => handleScroll()}
            >
              <ArrowDown className="h-8 w-8" />
            </button>
            <Link
              to={'/sign-up'}
              className="flex items-center justify-center rounded-full bg-white/10 p-4 text-white backdrop-blur-lg"
            >
              SIGN UP
            </Link>
          </div>
        </section>

        <div className="mb-16 flex w-full flex-col items-center justify-center gap-12 px-8">
          {sections.map(({ title, description, image }, index) => (
            <div
              key={index}
              className={cn(
                'flex max-w-5xl flex-col overflow-hidden rounded-xl border border-white/20',
                index % 2 === 1 ? 'lg:translate-x-12 lg:flex-row' : 'lg:flex-row-reverse',
                index === 0 && 'lg:flex-col',
              )}
            >
              <div className="flex flex-col bg-white p-6 text-black lg:flex-2/5 dark:bg-black dark:text-white">
                <h1 className="font-serif text-2xl font-bold">{title}</h1>
                <p>{description}</p>
              </div>
              <div
                className={cn(
                  'min-h-80 w-full bg-cover bg-center bg-no-repeat lg:flex-4/5',
                  index === 0 && 'min-h-120',
                )}
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-8 bg-white p-8 text-black lg:flex-row">
          <Link to="/" className="font-serif text-8xl font-bold">
            gradia.
          </Link>
          <div className="flex flex-col items-center lg:items-end">
            <p>Created with ❤️ and code (obviously).</p>
            <p>AB, JH, Jana Kmošková, Natália Ligačová, Tomáš Bokor</p>
            <p>MUNI FI PB138 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
