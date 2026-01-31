import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: 'Equity in Education',
      description: 'We believe in equal opportunities for all learners, regardless of background or circumstance.',
    },
    {
      title: 'Voice and Expression',
      description: 'We nurture communication skills and create spaces where every voice matters.',
    },
    {
      title: 'Collaboration',
      description: 'We build partnerships that amplify impact and create sustainable change.',
    },
    {
      title: 'Purpose-Driven Action',
      description: 'We turn ideas into concrete initiatives that make real, measurable difference.',
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 text-primary">
                About Omars
              </h1>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                Building trust, clarity, and credibility around our mission to advance education and empower communities.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Who We Are</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Omars Communication and Education Limited promotes education through innovative initiatives and community engagement. We empower students, educators, and communities to create lasting impact.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Our work spans from scholarship support and capacity building to gender inclusion programs and community engagement initiatives that address real educational challenges.
                </p>
              </div>
              <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl h-80" />
            </div>
          </div>
        </section>

        {/* Why We Exist */}
        <section className="bg-primary/5 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl h-80 order-2 md:order-1" />
              <div className="order-1 md:order-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Why We Exist</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Education gaps exist in access, literacy, and student empowerment. These gaps affect millions of learners who don&apos;t have platforms to express themselves or opportunities to develop essential skills.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Omars bridges these gaps by giving learners platforms to express themselves and develop the communication, confidence, and creativity they need to thrive in a rapidly changing world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision and Mission */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-foreground/80 leading-relaxed">
                  A society where every learner has access to education, opportunities for self-expression, and support to thrive in their personal and professional lives.
                </p>
              </div>
              <div className="bg-card rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-foreground/80 leading-relaxed">
                  To advance education through advocacy, creative programs, and public engagement that empowers students and communities to create meaningful, lasting change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-primary/5 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our Core Values</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                These values guide everything we do and shape our commitment to education and community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value) => (
                <div key={value.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="text-accent" size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">{value.title}</h3>
                    <p className="text-foreground/70">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-primary-foreground py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Learn More?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Explore our programs, outreach efforts, and discover how you can be part of transforming education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/programs">
                <Button size="lg" variant="secondary" className="gap-2">
                  Explore Programs <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
