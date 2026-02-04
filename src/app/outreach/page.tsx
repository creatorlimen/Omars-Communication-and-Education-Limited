import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { GraduationCap, Users, Heart, Target, ArrowRight } from 'lucide-react';

export default function Outreach() {
  const efforts = [
    {
      icon: GraduationCap,
      title: 'Scholarship Support',
      description: 'We provide educational support and scholarships to less-privileged students to help reduce barriers to learning and create equal access to quality education.',
    },
    {
      icon: Users,
      title: 'Workshops & Capacity Building',
      description: 'We organize educational workshops focused on literacy, communication, creative expression, and personal development for students and educators.',
    },
    {
      icon: Heart,
      title: 'Gender Inclusion Programs',
      description: 'We design and implement initiatives that promote gender inclusion, encourage equal participation, and amplify underrepresented voices in education.',
    },
    {
      icon: Target,
      title: 'Community Engagement',
      description: 'We work directly with schools and communities to raise awareness about education challenges and opportunities, fostering dialogue and collaborative solutions.',
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
                <span className="text-sm font-black text-white uppercase tracking-wider">🌍 Making Impact</span>
              </span>
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
                Outreach & Advocacy
              </h1>
              <p className="text-lg text-white/90 max-w-2xl mx-auto font-medium">
                At O&apos;MARS Communication and Education Limited, outreach and advocacy are at the heart of our commitment to education promotion and community transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-black text-gray-500 uppercase tracking-wider mb-4 block">What We Do</span>
              <h2 className="text-3xl font-black uppercase tracking-tight text-primary mb-6">Our Outreach Efforts</h2>
              <p className="text-gray-600 font-medium leading-relaxed">
                Through strategic outreach and advocacy, we address educational inequalities and create tangible opportunities for students, educators, and communities to access quality education and build sustainable futures.
              </p>
            </div>
          </div>
        </section>

        {/* Efforts Grid */}
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {efforts.map((effort, index) => {
                const Icon = effort.icon;
                return (
                  <div key={index} className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full transition-all duration-300 group-hover:w-40 group-hover:h-40" />
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/20 flex items-center justify-center mb-6">
                        <Icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold uppercase tracking-tight text-primary mb-4">{effort.title}</h3>
                      <p className="text-gray-600 font-medium leading-relaxed">{effort.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Impact Statement */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 sm:p-12 border border-gray-100 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
              <div className="relative">
                <span className="text-sm font-black text-gray-500 uppercase tracking-wider mb-4 block">Results</span>
                <h2 className="text-3xl font-black uppercase tracking-tight text-primary mb-8">Our Impact</h2>
                <div className="space-y-6">
                  <div className="flex gap-4 group">
                    <div className="w-1 bg-gradient-to-b from-accent to-primary rounded-full flex-shrink-0 transition-all duration-300 group-hover:w-2" />
                    <div>
                      <h3 className="font-bold text-primary mb-2">Reduced Educational Inequality</h3>
                      <p className="text-gray-600 font-medium">
                        By providing scholarships and removing barriers to access, we help ensure that financial constraints don&apos;t prevent students from pursuing quality education.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 group">
                    <div className="w-1 bg-gradient-to-b from-accent to-primary rounded-full flex-shrink-0 transition-all duration-300 group-hover:w-2" />
                    <div>
                      <h3 className="font-bold text-primary mb-2">Strengthened Skills and Confidence</h3>
                      <p className="text-gray-600 font-medium">
                        Through workshops and capacity building programs, students and educators develop critical communication, literacy, and creative skills that enhance learning outcomes.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 group">
                    <div className="w-1 bg-gradient-to-b from-accent to-primary rounded-full flex-shrink-0 transition-all duration-300 group-hover:w-2" />
                    <div>
                      <h3 className="font-bold text-primary mb-2">Amplified Voices</h3>
                      <p className="text-gray-600 font-medium">
                        Our gender inclusion and community engagement initiatives ensure that all voices are heard, particularly those traditionally marginalized in education discussions.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 group">
                    <div className="w-1 bg-gradient-to-b from-accent to-primary rounded-full flex-shrink-0 transition-all duration-300 group-hover:w-2" />
                    <div>
                      <h3 className="font-bold text-primary mb-2">Community Awareness and Engagement</h3>
                      <p className="text-gray-600 font-medium">
                        By fostering dialogue between schools, parents, educators, and communities, we create collaborative approaches to education challenges that are sustainable and locally relevant.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
              <span className="text-sm font-black text-white uppercase tracking-wider">🤝 Join Us</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-6">
              Support Our Outreach Efforts
            </h2>
            <p className="text-lg text-white/90 font-medium max-w-2xl mx-auto mb-8">
              Whether as a partner, sponsor, volunteer, or advocate, your support directly impacts the lives of students and communities we serve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary shadow-lg shadow-black/20 rounded-full font-bold transition-all duration-300 hover:scale-105 gap-2">
                  Get Involved <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/partnerships">
                <Button size="lg" variant="outline" className="rounded-full font-bold border-white text-white hover:bg-white/10 bg-transparent transition-all duration-300">
                  Partner With Us
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
