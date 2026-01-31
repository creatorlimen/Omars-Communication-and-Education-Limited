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
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 text-primary">
                Outreach & Advocacy
              </h1>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                At Omars Communication and Education Limited, outreach and advocacy are at the heart of our commitment to education promotion and community transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Our Outreach Efforts</h2>
              <p className="text-foreground/80 leading-relaxed">
                Through strategic outreach and advocacy, we address educational inequalities and create tangible opportunities for students, educators, and communities to access quality education and build sustainable futures.
              </p>
            </div>
          </div>
        </section>

        {/* Efforts Grid */}
        <section className="bg-primary/5 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {efforts.map((effort, index) => {
                const Icon = effort.icon;
                return (
                  <div key={index} className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-shadow">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="text-primary" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-4">{effort.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{effort.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Impact Statement */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card rounded-lg p-8 sm:p-12 border border-border">
              <h2 className="text-3xl font-bold text-primary mb-6">Our Impact</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-1 bg-accent rounded-full flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Reduced Educational Inequality</h3>
                    <p className="text-foreground/70">
                      By providing scholarships and removing barriers to access, we help ensure that financial constraints don&apos;t prevent students from pursuing quality education.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 bg-accent rounded-full flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Strengthened Skills and Confidence</h3>
                    <p className="text-foreground/70">
                      Through workshops and capacity building programs, students and educators develop critical communication, literacy, and creative skills that enhance learning outcomes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 bg-accent rounded-full flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Amplified Voices</h3>
                    <p className="text-foreground/70">
                      Our gender inclusion and community engagement initiatives ensure that all voices are heard, particularly those traditionally marginalized in education discussions.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 bg-accent rounded-full flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Community Awareness and Engagement</h3>
                    <p className="text-foreground/70">
                      By fostering dialogue between schools, parents, educators, and communities, we create collaborative approaches to education challenges that are sustainable and locally relevant.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-primary-foreground py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Support Our Outreach Efforts
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Whether as a partner, sponsor, volunteer, or advocate, your support directly impacts the lives of students and communities we serve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="gap-2">
                  Get Involved <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/partnerships">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
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
