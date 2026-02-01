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
        <section className="relative bg-gradient-to-br from-primary via-primary to-primary/80 py-20 sm:py-28 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-sm font-black text-white uppercase tracking-wider">🏢 Our Story</span>
              </span>
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
                About Omars
              </h1>
              <p className="text-lg text-white/90 max-w-2xl mx-auto font-medium">
                Building trust, clarity, and credibility around our mission to advance education and empower communities.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-black text-gray-500 uppercase tracking-wider mb-4 block">Who We Are</span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-primary mb-6">Our Identity</h2>
                <p className="text-gray-600 font-medium leading-relaxed mb-4">
                  Omars Communication and Education Limited promotes education through innovative initiatives and community engagement. We empower students, educators, and communities to create lasting impact.
                </p>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Our work spans from scholarship support and capacity building to gender inclusion programs and community engagement initiatives that address real educational challenges.
                </p>
              </div>
              <div className="relative bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl h-80 overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full transition-all duration-300 group-hover:w-40 group-hover:h-40" />
              </div>
            </div>
          </div>
        </section>

        {/* Why We Exist */}
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl h-80 order-2 md:order-1 overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full transition-all duration-300 group-hover:w-40 group-hover:h-40" />
              </div>
              <div className="order-1 md:order-2">
                <span className="text-sm font-black text-gray-500 uppercase tracking-wider mb-4 block">Our Purpose</span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-primary mb-6">Why We Exist</h2>
                <p className="text-gray-600 font-medium leading-relaxed mb-4">
                  Education gaps exist in access, literacy, and student empowerment. These gaps affect millions of learners who don&apos;t have platforms to express themselves or opportunities to develop essential skills.
                </p>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Omars bridges these gaps by giving learners platforms to express themselves and develop the communication, confidence, and creativity they need to thrive in a rapidly changing world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision and Mission */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-black text-gray-500 uppercase tracking-wider mb-4 block">Direction</span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-primary">Vision & Mission</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full transition-all duration-300 group-hover:w-40 group-hover:h-40" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/20 flex items-center justify-center mb-6">
                    <span className="text-2xl">👁️</span>
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-primary mb-4">Our Vision</h3>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    A society where every learner has access to education, opportunities for self-expression, and support to thrive in their personal and professional lives.
                  </p>
                </div>
              </div>
              <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full transition-all duration-300 group-hover:w-40 group-hover:h-40" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/20 flex items-center justify-center mb-6">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-primary mb-4">Our Mission</h3>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    To advance education through advocacy, creative programs, and public engagement that empowers students and communities to create meaningful, lasting change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-black text-gray-500 uppercase tracking-wider mb-4 block">What Drives Us</span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-primary mb-4">Our Core Values</h2>
              <p className="text-gray-600 font-medium max-w-2xl mx-auto">
                These values guide everything we do and shape our commitment to education and community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value) => (
                <div key={value.title} className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full transition-all duration-300 group-hover:w-40 group-hover:h-40" />
                  <div className="flex gap-4 relative">
                    <div className="flex-shrink-0">
                      <span className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                        <CheckCircle2 size={20} />
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold uppercase tracking-tight text-primary mb-2">{value.title}</h3>
                      <p className="text-gray-600 font-medium">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-gradient-to-br from-primary via-primary to-primary/80 text-white py-20 sm:py-28 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-black text-white uppercase tracking-wider">🚀 Take Action</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-6">
              Ready to Learn More?
            </h2>
            <p className="text-lg text-white/90 font-medium max-w-2xl mx-auto mb-8">
              Explore our programs, outreach efforts, and discover how you can be part of transforming education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/programs">
                <Button size="lg" className="bg-white text-primary shadow-lg shadow-black/20 rounded-full font-bold transition-all duration-300 hover:scale-105 gap-2">
                  Explore Programs <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full font-bold border-white text-white hover:bg-white/10 bg-transparent transition-all duration-300">
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
