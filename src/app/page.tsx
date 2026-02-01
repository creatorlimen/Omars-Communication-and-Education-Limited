import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { BookOpen, Users, Megaphone, Heart, ArrowRight, GraduationCap, Target, Lightbulb, Award, Handshake, Globe } from 'lucide-react';

export default function Home() {
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

  const collaborators = [
    {
      icon: Lightbulb,
      title: 'Schools and Educational Institutions',
      description: 'Collaborating on student engagement, workshops, and advocacy initiatives',
    },
    {
      icon: Users,
      title: 'NGOs and Advocacy Organisations',
      description: 'Partnering on shared missions for education equity and social development',
    },
    {
      icon: Award,
      title: 'Community and Youth Groups',
      description: 'Working together to reach and empower students at the grassroots level',
    },
    {
      icon: Handshake,
      title: 'Sponsors and Partners',
      description: 'Supporting literacy, creativity, and education transformation initiatives',
    },
  ];

  const sdgs = ['SDG 4: Quality Education', 'SDG 5: Gender Equality', 'SDG 10: Reduced Inequalities', 'SDG 17: Partnerships for the Goals'];

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 text-primary">
                Promoting Education. Amplifying Voices. Driving Impact.
              </h1>
              <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 text-balance">
                We create platforms, initiatives, and partnerships that advance learning, empower students, and engage communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/programs">
                  <Button size="lg" className="gap-2">
                    Learn More <ArrowRight size={18} />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Get Involved
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Work Overview */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our Work</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Through education advocacy, student engagement, literacy initiatives, and community projects, we're creating lasting change.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Advocacy */}
              <div className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Megaphone className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Education Advocacy</h3>
                <p className="text-sm text-foreground/70">
                  Raising awareness about education challenges and opportunities
                </p>
              </div>

              {/* Student Engagement */}
              <div className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Student Engagement</h3>
                <p className="text-sm text-foreground/70">
                  Interactive initiatives that inspire learning and confidence
                </p>
              </div>

              {/* Literacy */}
              <div className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Literacy & Expression</h3>
                <p className="text-sm text-foreground/70">
                  Encouraging reading, writing, and creative storytelling
                </p>
              </div>

              {/* Community */}
              <div className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Community Awareness</h3>
                <p className="text-sm text-foreground/70">
                  Involving parents, educators, and communities in education discussions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Flagship Spotlight: Whispers and Words */}
        <section className="bg-primary/5 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-accent/20 text-accent px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Flagship Initiative
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
                  Whispers and Words
                </h2>
                <p className="text-lg text-foreground/80 mb-6">
                  Our annual competition celebrating young voices through spoken words, storytelling, and creative expression.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-3">
                    <div className="w-1 bg-accent rounded-full flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Why It Matters</h3>
                      <p className="text-sm text-foreground/70">
                        Builds confidence, literacy, communication, and creativity while giving students a platform to share their ideas.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-1 bg-accent rounded-full flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Who It&apos;s For</h3>
                      <p className="text-sm text-foreground/70">
                        Students in schools and communities in Lagos state looking to express themselves through words.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-1 bg-accent rounded-full flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">How to Participate</h3>
                      <p className="text-sm text-foreground/70">
                        Submit entries online, join workshops, and showcase your work at events.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/programs/whispers-and-words">
                    <Button size="lg" className="gap-2">
                      Learn More <ArrowRight size={18} />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline">
                      Submit Your Entry
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="bg-gradient-to-br from-accent/30 to-primary/30 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">✨</div>
                  <p className="text-lg font-semibold text-primary">Celebrate Young Voices</p>
                  <p className="text-sm text-foreground/70 mt-2">Through words and storytelling</p>
                </div>
              </div>
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
            <div className="grid md:grid-cols-2 gap-8">
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

        {/* Outreach Efforts */}
        <section className="bg-primary/5 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our Outreach Efforts</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Through strategic outreach and advocacy, we address educational inequalities and create tangible opportunities for students, educators, and communities.
              </p>
            </div>
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

        {/* Who We Collaborate With */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Who We Collaborate With</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {collaborators.map((collaborator) => {
                const Icon = collaborator.icon;
                return (
                  <div key={collaborator.title} className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-shadow">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="text-primary" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-4">{collaborator.title}</h3>
                    <p className="text-foreground/70">{collaborator.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SDG Alignment */}
        <section className="bg-primary/5 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">UN Sustainable Development Goals</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Our initiatives are aligned with the United Nations Sustainable Development Goals (SDGs), contributing to a more equitable, inclusive, and developed world.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {sdgs.map((sdg) => (
                <div key={sdg} className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 border border-border">
                  <Globe className="text-primary mb-4" size={28} />
                  <p className="font-semibold text-primary">{sdg}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-card rounded-lg p-8 border border-border max-w-3xl mx-auto">
              <p className="text-foreground/80 leading-relaxed">
                Our work contributes to building inclusive learning environments and promoting lifelong learning opportunities for all. By partnering with us, you directly support the global agenda for sustainable development.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Join Us in Transforming Education
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Whether you&apos;re a student wanting to participate, an institution looking to collaborate, or a sponsor wanting to make an impact, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2"
                >
                  Get in Touch <ArrowRight size={18} />
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
