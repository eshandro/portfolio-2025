import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    <section className="py-12">
      <div className="container">
        <h1 className="font-sans text-3xl font-bold">PORTFOLIO</h1>
        <ThemeToggle />
      </div>
    </section>
  );
}
