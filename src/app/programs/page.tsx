import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Programs() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 text-primary">
                Programs & Initiatives
              </h1>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                Education extends beyond classrooms. At Omars, we provide platforms that help students explore ideas, express themselves, and develop key skills.
              </p>
            </div>
          </div>
        </section>

        {/* Education Promotion Philosophy */}
        <section className="py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Approach</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-1 bg-accent rounded-full flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Advocacy</h3>
                  <p className="text-foreground/70">
                    Raising awareness about education challenges and opportunities to drive systemic change and policy improvement.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-accent rounded-full flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Literacy & Creative Expression</h3>
                  <p className="text-foreground/70">
                    Encouraging reading, writing, and storytelling through innovative programs that inspire lifelong learning.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-accent rounded-full flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Student Engagement</h3>
                  <p className="text-foreground/70">
                    Interactive initiatives that inspire learning, build confidence, and help students discover their potential.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-accent rounded-full flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Community Awareness</h3>
                  <p className="text-foreground/70">
                    Involving parents, educators, and communities in education discussions to create collaborative solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Program */}
        <section className="bg-primary/5 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Featured Program</h2>
              <p className="text-foreground/70">
                Our flagship initiative celebrating young voices and creative expression
              </p>
            </div>

            <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2 gap-8 p-8 sm:p-12 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="text-accent" size={24} />
                    <span className="text-sm font-semibold text-accent uppercase tracking-wide">Flagship Initiative</span>
                  </div>
                  <h3 className="text-4xl font-bold text-primary mb-6">Whispers and Words</h3>
                  <p className="text-foreground/80 leading-relaxed mb-8">
                    An annual competition celebrating young voices through spoken words, storytelling, and creative expression. We provide students with a meaningful platform to share their ideas, build confidence, and showcase their talents.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Why It Matters</h4>
                      <p className="text-sm text-foreground/70">
                        Builds confidence, literacy, communication, and creativity while giving students a platform to share their ideas and be heard.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Who It&apos;s For</h4>
                      <p className="text-sm text-foreground/70">
                        Students in schools and communities in Lagos state looking to express themselves through words and creative work.
                      </p>
                    </div>
                  </div>
                  <Link href="/programs/whispers-and-words">
                    <Button size="lg" className="gap-2">
                      Learn More <ArrowRight size={18} />
                    </Button>
                  </Link>
                </div>
                <div className="bg-gradient-to-br from-accent/30 to-primary/30 rounded-lg h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🎤</div>
                    <p className="text-lg font-semibold text-primary">Amplify Your Voice</p>
                    <p className="text-sm text-foreground/70 mt-2">Through creative expression</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Ready to Get Involved?
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
              Whether you&apos;re a student ready to participate, an educator wanting to collaborate, or a partner interested in supporting our programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  Get Involved <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/partnerships">
                <Button size="lg" variant="outline">
                  Collaborate
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
