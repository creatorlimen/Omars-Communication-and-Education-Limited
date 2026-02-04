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
      description: "Share your piece at our events and connect with fellow creatives in the O'MARS community.",
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
        <section className="relative bg-gradient-to-br from-primary via-primary to-primary/80 py-20 sm:py-28 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Sparkles className="text-white" size={18} />
                <span className="text-white font-bold text-sm uppercase tracking-wider">Flagship Initiative</span>
              </span>
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6">
                Whispers and Words
              </h1>
              <p className="text-lg text-white/90 max-w-2xl mx-auto font-medium">
                An annual celebration of young voices through spoken words, storytelling, and creative expression.
              </p>
            </div>
          </div>
        </section>

        {/* What & Why */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="group bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full group-hover:w-40 group-hover:h-40 transition-all duration-300" />
                <div className="relative">
                  <span className="text-sm font-black text-gray-500 uppercase tracking-wider mb-4 block">About</span>
                  <h2 className="text-3xl font-black text-primary uppercase tracking-tight mb-6">What Is It?</h2>
                  <p className="text-gray-600 font-medium leading-relaxed mb-4">
                    Whispers and Words is our signature annual competition that celebrates the power of creative expression and student voices. We bring together students from schools and communities across Lagos state to share their stories, poems, spoken word pieces, and creative works.
                  </p>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    This initiative creates a safe, supportive space where young people can express themselves authentically, be heard, and discover the power of their own voice.
                  </p>
                </div>
              </div>
              <div className="group bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full group-hover:w-40 group-hover:h-40 transition-all duration-300" />
                <div className="relative">
                  <span className="text-sm font-black text-gray-500 uppercase tracking-wider mb-4 block">Impact</span>
                  <h2 className="text-3xl font-black text-primary uppercase tracking-tight mb-6">Why It Matters</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600 text-sm">✓</span>
                      <div>
                        <p className="font-bold text-primary">Builds Confidence</p>
                        <p className="text-sm text-gray-600 font-medium">Students develop self-assurance through creative expression.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600 text-sm">✓</span>
                      <div>
                        <p className="font-bold text-primary">Enhances Literacy</p>
                        <p className="text-sm text-gray-600 font-medium">Creative writing improves communication skills.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600 text-sm">✓</span>
                      <div>
                        <p className="font-bold text-primary">Fosters Creativity</p>
                        <p className="text-sm text-gray-600 font-medium">Students explore ideas through various art forms.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600 text-sm">✓</span>
                      <div>
                        <p className="font-bold text-primary">Creates Community</p>
                        <p className="text-sm text-gray-600 font-medium">Connects young people with shared interests.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-black text-gray-500 uppercase tracking-wider mb-4 block">Eligibility</span>
              <h2 className="text-3xl sm:text-4xl font-black text-primary uppercase tracking-tight mb-4">Who It&apos;s For</h2>
              <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
                Students in schools and communities nationwide looking to express themselves through words.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full group-hover:w-40 group-hover:h-40 transition-all duration-300" />
                <div className="relative">
                  <h3 className="text-lg font-black text-primary uppercase tracking-tight mb-4">Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-green-100 flex items-center justify-center text-green-600 text-xs">✓</span>
                      <span className="font-medium text-gray-700">Must be a student (secondary or tertiary level)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-green-100 flex items-center justify-center text-green-600 text-xs">✓</span>
                      <span className="font-medium text-gray-700">Located in or connected to Lagos state</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-green-100 flex items-center justify-center text-green-600 text-xs">✓</span>
                      <span className="font-medium text-gray-700">Passionate about creative expression</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full group-hover:w-40 group-hover:h-40 transition-all duration-300" />
                <div className="relative">
                  <h3 className="text-lg font-black text-primary uppercase tracking-tight mb-4">No Experience Needed</h3>
                  <p className="text-gray-600 font-medium">
                    Whether you&apos;re a beginner sharing your first story or an experienced performer, we welcome all skill levels. Our workshops help you develop and refine your craft.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-gradient-to-b from-muted/30 to-background py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-black text-gray-500 uppercase tracking-wider mb-4 block">Advantages</span>
              <h2 className="text-3xl sm:text-4xl font-black text-primary uppercase tracking-tight">Benefits of Participating</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="group bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full group-hover:w-40 group-hover:h-40 transition-all duration-300" />
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/20 flex items-center justify-center mx-auto mb-4">
                        <Icon size={24} />
                      </div>
                      <h3 className="font-black text-primary uppercase tracking-tight mb-3">{benefit.title}</h3>
                      <p className="text-sm text-gray-600 font-medium">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How to Participate */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-black text-gray-500 uppercase tracking-wider mb-4 block">Get Started</span>
              <h2 className="text-3xl sm:text-4xl font-black text-primary uppercase tracking-tight">How to Participate</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step) => (
                <div key={step.number} className="relative">
                  <div className="group bg-white rounded-2xl border border-gray-100 p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full group-hover:w-40 group-hover:h-40 transition-all duration-300" />
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/20 flex items-center justify-center font-black text-lg">
                          {step.number}
                        </div>
                      </div>
                      <h3 className="font-black text-primary uppercase tracking-tight mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-600 font-medium">{step.description}</p>
                    </div>
                  </div>
                  {parseInt(step.number) < 4 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 text-primary -translate-y-1/2">
                      <ArrowRight size={24} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-gradient-to-br from-secondary via-secondary to-primary/20 py-20 sm:py-28 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-6">
              Ready to Share Your Story?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 font-medium">
              Join us and amplify your voice. Submit your entry today and become part of the Whispers and Words community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" className="gap-2 rounded-full bg-white text-primary shadow-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Submit Your Entry <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white/10 font-bold transition-all duration-300">
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
