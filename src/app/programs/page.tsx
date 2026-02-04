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
        <section className="relative bg-gradient-to-br from-primary via-primary to-primary/80 py-20 sm:py-28 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-white font-bold text-sm uppercase tracking-wider">🎯 STUDENT INITIATIVES</span>
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6">
                Programs & Initiatives
              </h1>
              <p className="text-lg text-white/90 max-w-2xl mx-auto font-medium">
                Education extends beyond classrooms. At O&apos;Mars, we provide platforms that help students explore ideas, express themselves, and develop key skills.
              </p>
            </div>
          </div>
        </section>

        {/* Education Promotion Philosophy */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-black text-gray-500 uppercase tracking-wider mb-4 block">Our Philosophy</span>
              <h2 className="text-3xl sm:text-4xl font-black text-primary uppercase tracking-tight">Our Approach</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full group-hover:w-40 group-hover:h-40 transition-all duration-300" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/20 flex items-center justify-center mb-4">
                    <span className="text-2xl">📢</span>
                  </div>
                  <h3 className="text-lg font-black text-primary uppercase tracking-tight mb-2">Advocacy</h3>
                  <p className="text-gray-600 font-medium text-sm">
                    Raising awareness about education challenges and opportunities to drive systemic change and policy improvement.
                  </p>
                </div>
              </div>
              <div className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full group-hover:w-40 group-hover:h-40 transition-all duration-300" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/20 flex items-center justify-center mb-4">
                    <span className="text-2xl">📖</span>
                  </div>
                  <h3 className="text-lg font-black text-primary uppercase tracking-tight mb-2">Literacy & Expression</h3>
                  <p className="text-gray-600 font-medium text-sm">
                    Encouraging reading, writing, and storytelling through innovative programs that inspire lifelong learning.
                  </p>
                </div>
              </div>
              <div className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full group-hover:w-40 group-hover:h-40 transition-all duration-300" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/20 flex items-center justify-center mb-4">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <h3 className="text-lg font-black text-primary uppercase tracking-tight mb-2">Student Engagement</h3>
                  <p className="text-gray-600 font-medium text-sm">
                    Interactive initiatives that inspire learning, build confidence, and help students discover their potential.
                  </p>
                </div>
              </div>
              <div className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full group-hover:w-40 group-hover:h-40 transition-all duration-300" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/20 flex items-center justify-center mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-lg font-black text-primary uppercase tracking-tight mb-2">Community Awareness</h3>
                  <p className="text-gray-600 font-medium text-sm">
                    Involving parents, educators, and communities in education discussions to create collaborative solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Program */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-black text-gray-500 uppercase tracking-wider mb-4 block">Spotlight</span>
              <h2 className="text-3xl sm:text-4xl font-black text-primary uppercase tracking-tight mb-4">Featured Program</h2>
              <p className="text-gray-600 font-medium">
                Our flagship initiative celebrating young voices and creative expression
              </p>
            </div>

            <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full group-hover:w-80 group-hover:h-80 transition-all duration-300" />
              <div className="grid md:grid-cols-2 gap-8 p-8 sm:p-12 items-center relative">
                <div>
                  <span className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-white px-4 py-1.5 text-xs font-black uppercase rounded-full shadow-sm mb-4">
                    <Sparkles size={14} />
                    Flagship Initiative
                  </span>
                  <h3 className="text-4xl font-black text-primary uppercase tracking-tight mb-6">Whispers and Words</h3>
                  <p className="text-gray-600 font-medium leading-relaxed mb-8">
                    An annual competition celebrating young voices through spoken words, storytelling, and creative expression. We provide students with a meaningful platform to share their ideas, build confidence, and showcase their talents.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="bg-primary/5 rounded-lg p-4">
                      <h4 className="font-black text-primary uppercase tracking-tight text-sm mb-2">Why It Matters</h4>
                      <p className="text-sm text-gray-600 font-medium">
                        Builds confidence, literacy, communication, and creativity while giving students a platform to share their ideas and be heard.
                      </p>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4">
                      <h4 className="font-black text-primary uppercase tracking-tight text-sm mb-2">Who It&apos;s For</h4>
                      <p className="text-sm text-gray-600 font-medium">
                        Students in schools and communities nationwide looking to express themselves through words.
                      </p>
                    </div>
                  </div>
                  <Link href="/programs/whispers-and-words">
                    <Button size="lg" className="gap-2 rounded-full bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg shadow-primary/20 font-bold transition-all duration-300 hover:scale-105">
                      Learn More <ArrowRight size={18} />
                    </Button>
                  </Link>
                </div>
                <div className="bg-gradient-to-br from-accent/30 to-primary/30 rounded-2xl h-80 flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/20 flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">🎤</span>
                    </div>
                    <p className="text-lg font-black text-primary uppercase tracking-tight">Amplify Your Voice</p>
                    <p className="text-sm text-gray-600 font-medium mt-2">Through creative expression</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-gradient-to-br from-primary via-primary to-primary/80 py-20 sm:py-28 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-6">
              Ready to Get Involved?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 font-medium">
              Whether you&apos;re a student ready to participate, an educator wanting to collaborate, or a partner interested in supporting our programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" className="gap-2 rounded-full bg-white text-black shadow-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Get Involved <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/partnerships">
                <Button size="lg" variant="outline" className="rounded-full border-2 border-white text-black bg-white/10 hover:bg-white/20 font-bold transition-all duration-300">
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
