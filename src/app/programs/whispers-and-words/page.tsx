import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Sparkles, Users, Trophy, Mic, ArrowRight } from 'lucide-react';

export default function WhispersAndWords() {
  const benefits = [
    {
      icon: Sparkles,
      title: 'Build Confidence',
      description: 'Gain the courage to express yourself and share your voice with an audience.',
    },
    {
      icon: Trophy,
      title: 'Develop Skills',
      description: 'Enhance literacy, communication, and creative expression abilities through structured workshops.',
    },
    {
      icon: Users,
      title: 'Connect',
      description: 'Meet like-minded students and educators who share a passion for storytelling and words.',
    },
    {
      icon: Mic,
      title: 'Get Recognition',
      description: 'Showcase your talents at events and gain visibility for your creative work.',
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Submit Your Entry',
      description: 'Create a spoken word piece, story, or creative work and submit it online through our platform.',
    },
    {
      number: '2',
      title: 'Join Workshops',
      description: 'Participate in our training workshops to refine your craft and learn from experienced mentors.',
    },
    {
      number: '3',
      title: 'Showcase Your Work',
      description: 'Share your piece at our events and connect with fellow creatives in the Omars community.',
    },
    {
      number: '4',
      title: 'Celebrate',
      description: 'Celebrate your achievement, gain recognition, and be part of a movement for youth voices.',
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-b from-accent/20 to-background py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <Sparkles className="text-accent" size={28} />
              <span className="text-sm font-semibold text-accent uppercase tracking-wide">Flagship Initiative</span>
            </div>
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 text-primary">
                Whispers and Words
              </h1>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                An annual celebration of young voices through spoken words, storytelling, and creative expression.
              </p>
            </div>
          </div>
        </section>

        {/* What & Why */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">What Is It?</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Whispers and Words is our signature annual competition that celebrates the power of creative expression and student voices. We bring together students from schools and communities across Lagos state to share their stories, poems, spoken word pieces, and creative works.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  This initiative creates a safe, supportive space where young people can express themselves authentically, be heard, and discover the power of their own voice.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Why It Matters</h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-1 bg-accent rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary mb-1">Builds Confidence</p>
                      <p className="text-sm text-foreground/70">Students develop self-assurance through creative expression and public speaking.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-1 bg-accent rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary mb-1">Enhances Literacy</p>
                      <p className="text-sm text-foreground/70">Creative writing and storytelling improve communication and language skills.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-1 bg-accent rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary mb-1">Fosters Creativity</p>
                      <p className="text-sm text-foreground/70">Students explore new ideas and perspectives through various art forms.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-1 bg-accent rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary mb-1">Creates Community</p>
                      <p className="text-sm text-foreground/70">Connects young people with shared interests and mutual encouragement.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="bg-primary/5 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">Who It&apos;s For</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto text-center mb-12">
              Whispers and Words welcomes all students in schools and communities across Lagos state who are passionate about storytelling, creative writing, and self-expression.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-lg font-semibold text-primary mb-3">Requirements</h3>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    Must be a student (secondary or tertiary level)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    Located in or connected to Lagos state
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    Passionate about creative expression
                  </li>
                </ul>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-lg font-semibold text-primary mb-3">No Experience Needed</h3>
                <p className="text-sm text-foreground/70">
                  Whether you&apos;re a beginner sharing your first story or an experienced performer, we welcome all skill levels. Our workshops help you develop and refine your craft.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Benefits of Participating</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="bg-card rounded-lg p-6 border border-border text-center hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="font-semibold text-primary mb-3">{benefit.title}</h3>
                    <p className="text-sm text-foreground/70">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How to Participate */}
        <section className="bg-primary/5 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">How to Participate</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step) => (
                <div key={step.number} className="relative">
                  <div className="bg-card rounded-lg p-6 border border-border h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg">
                        {step.number}
                      </div>
                      <h3 className="font-semibold text-primary">{step.title}</h3>
                    </div>
                    <p className="text-sm text-foreground/70">{step.description}</p>
                  </div>
                  {parseInt(step.number) < 4 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-border -translate-y-1/2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Share Your Story?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Join us and amplify your voice. Submit your entry today and become part of the Whispers and Words community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="gap-2">
                  Submit Your Entry <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                  Learn More
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
