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
        <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary to-primary/20 py-20 sm:py-28 lg:py-36">
          {/* Decorative blur circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="inline-block bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 text-sm font-black uppercase tracking-wider text-primary">
                🎓 Education • Empowerment • Impact
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-primary mb-6">
                Promoting Education. Amplifying Voices. Driving Impact.
              </h1>
              <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 font-medium">
                We create platforms, initiatives, and partnerships that advance learning, empower students, and engage communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/programs">
                  <Button size="lg" className="gap-2 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all duration-300">
                    Learn More <ArrowRight size={18} />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="rounded-full font-bold hover:shadow-md transition-all duration-300">
                    Get Involved
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Work Overview */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-sm font-black text-gray-500 uppercase tracking-wider mb-4 block">What We Do</span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-primary mb-4">Our Work</h2>
              <p className="text-gray-600 max-w-2xl mx-auto font-medium">
                Through education advocacy, student engagement, literacy initiatives, and community projects, we're creating lasting change.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Advocacy */}
              <div className="group bg-white rounded-2xl p-6 border border-gray-100 overflow-hidden relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full transition-all duration-300 group-hover:w-40 group-hover:h-40" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/20 flex items-center justify-center mb-4">
                    <Megaphone size={24} />
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-primary mb-2">Education Advocacy</h3>
                  <p className="text-sm text-gray-600 font-medium">
                    Raising awareness about education challenges and opportunities
                  </p>
                </div>
              </div>

              {/* Student Engagement */}
              <div className="group bg-white rounded-2xl p-6 border border-gray-100 overflow-hidden relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full transition-all duration-300 group-hover:w-40 group-hover:h-40" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/20 flex items-center justify-center mb-4">
                    <Users size={24} />
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-primary mb-2">Student Engagement</h3>
                  <p className="text-sm text-gray-600 font-medium">
                    Interactive initiatives that inspire learning and confidence
                  </p>
                </div>
              </div>

              {/* Literacy */}
              <div className="group bg-white rounded-2xl p-6 border border-gray-100 overflow-hidden relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full transition-all duration-300 group-hover:w-40 group-hover:h-40" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/20 flex items-center justify-center mb-4">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-primary mb-2">Literacy & Expression</h3>
                  <p className="text-sm text-gray-600 font-medium">
                    Encouraging reading, writing, and creative storytelling
                  </p>
                </div>
              </div>

              {/* Community */}
              <div className="group bg-white rounded-2xl p-6 border border-gray-100 overflow-hidden relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full transition-all duration-300 group-hover:w-40 group-hover:h-40" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/20 flex items-center justify-center mb-4">
                    <Heart size={24} />
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-primary mb-2">Community Awareness</h3>
                  <p className="text-sm text-gray-600 font-medium">
                    Involving parents, educators, and communities in education discussions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flagship Spotlight: Whispers and Words */}
        <section className="relative overflow-hidden bg-gradient-to-br from-accent/20 via-primary/10 to-secondary py-20">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-gradient-to-r from-accent to-accent/80 text-white px-4 py-1.5 text-xs font-black uppercase rounded-full shadow-sm mb-6">
                  ✨ Flagship Initiative
                </span>
                <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-primary mb-6">
                  Whispers and Words
                </h2>
                <p className="text-lg text-gray-600 font-medium mb-8">
                  Our annual competition celebrating young voices through spoken words, storytelling, and creative expression.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-4 group">
                    <div className="w-1 bg-gradient-to-b from-accent to-primary rounded-full flex-shrink-0 group-hover:w-1.5 transition-all duration-300" />
                    <div>
                      <h3 className="font-black text-primary mb-1 uppercase tracking-tight">Why It Matters</h3>
                      <p className="text-sm text-gray-600 font-medium">
                        Builds confidence, literacy, communication, and creativity while giving students a platform to share their ideas.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 group">
                    <div className="w-1 bg-gradient-to-b from-accent to-primary rounded-full flex-shrink-0 group-hover:w-1.5 transition-all duration-300" />
                    <div>
                      <h3 className="font-black text-primary mb-1 uppercase tracking-tight">Who It&apos;s For</h3>
                      <p className="text-sm text-gray-600 font-medium">
                        Students in schools and communities in Lagos state looking to express themselves through words.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 group">
                    <div className="w-1 bg-gradient-to-b from-accent to-primary rounded-full flex-shrink-0 group-hover:w-1.5 transition-all duration-300" />
                    <div>
                      <h3 className="font-black text-primary mb-1 uppercase tracking-tight">How to Participate</h3>
                      <p className="text-sm text-gray-600 font-medium">
                        Submit entries online, join workshops, and showcase your work at events.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/programs/whispers-and-words">
                    <Button size="lg" className="gap-2 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all duration-300">
                      Learn More <ArrowRight size={18} />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="rounded-full font-bold hover:shadow-md transition-all duration-300">
                      Submit Your Entry
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="bg-gradient-to-br from-accent/30 to-primary/30 rounded-3xl h-96 flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center">
                  <div className="text-7xl mb-4">✨</div>
                  <p className="text-xl font-black text-primary uppercase tracking-tight">Celebrate Young Voices</p>
                  <p className="text-sm text-gray-600 font-medium mt-2">Through words and storytelling</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-black text-gray-500 uppercase tracking-wider mb-4 block">About Us</span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-primary mb-6">Who We Are</h2>
                <p className="text-gray-600 font-medium leading-relaxed mb-4">
                  O&apos;MARS Communication and Education Limited promotes education through innovative initiatives and community engagement. We empower students, educators, and communities to create lasting impact.
                </p>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Our work spans from scholarship support and capacity building to gender inclusion programs and community engagement initiatives that address real educational challenges.
                </p>
              </div>
              <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl h-80 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1" />
            </div>
          </div>
        </section>

        {/* Why We Exist */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/50 to-accent/5 py-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl h-80 order-2 md:order-1 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1" />
              <div className="order-1 md:order-2">
                <span className="text-sm font-black text-gray-500 uppercase tracking-wider mb-4 block">Our Purpose</span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-primary mb-6">Why We Exist</h2>
                <p className="text-gray-600 font-medium leading-relaxed mb-4">
                  Education gaps exist in access, literacy, and student empowerment. These gaps affect millions of learners who don&apos;t have platforms to express themselves or opportunities to develop essential skills.
                </p>
                <p className="text-gray-600 font-medium leading-relaxed">
                  O&apos;MARS bridges these gaps by giving learners platforms to express themselves and develop the communication, confidence, and creativity they need to thrive in a rapidly changing world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision and Mission */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group bg-white rounded-2xl p-8 border border-gray-100 overflow-hidden relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full transition-all duration-300 group-hover:w-40 group-hover:h-40" />
                <div className="relative">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-bold mb-4">👁️ Vision</span>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-primary mb-4">Our Vision</h3>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    A society where every learner has access to education, opportunities for self-expression, and support to thrive in their personal and professional lives.
                  </p>
                </div>
              </div>
              <div className="group bg-white rounded-2xl p-8 border border-gray-100 overflow-hidden relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full transition-all duration-300 group-hover:w-40 group-hover:h-40" />
                <div className="relative">
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1.5 rounded-full text-xs font-bold mb-4">🎯 Mission</span>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-primary mb-4">Our Mission</h3>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    To advance education through advocacy, creative programs, and public engagement that empowers students and communities to create meaningful, lasting change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outreach Efforts */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/50 to-accent/5 py-20">
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-sm font-black text-gray-500 uppercase tracking-wider mb-4 block">Our Impact</span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-primary mb-4">Our Outreach Efforts</h2>
              <p className="text-gray-600 max-w-2xl mx-auto font-medium">
                Through strategic outreach and advocacy, we address educational inequalities and create tangible opportunities for students, educators, and communities.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {efforts.map((effort, index) => {
                const Icon = effort.icon;
                return (
                  <div key={index} className="group bg-white rounded-2xl p-8 border border-gray-100 overflow-hidden relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full transition-all duration-300 group-hover:w-40 group-hover:h-40" />
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/20 flex items-center justify-center mb-6">
                        <Icon size={28} />
                      </div>
                      <h3 className="text-xl font-black uppercase tracking-tight text-primary mb-4">{effort.title}</h3>
                      <p className="text-gray-600 font-medium leading-relaxed">{effort.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Who We Collaborate With */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-sm font-black text-gray-500 uppercase tracking-wider mb-4 block">Partnerships</span>
              <h2 className="text-3xl font-black uppercase tracking-tight text-primary">Who We Collaborate With</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {collaborators.map((collaborator) => {
                const Icon = collaborator.icon;
                return (
                  <div key={collaborator.title} className="group bg-white rounded-2xl p-8 border border-gray-100 overflow-hidden relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full transition-all duration-300 group-hover:w-40 group-hover:h-40" />
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent/80 text-white shadow-lg shadow-accent/20 flex items-center justify-center mb-6">
                        <Icon size={28} />
                      </div>
                      <h3 className="text-xl font-black uppercase tracking-tight text-primary mb-4">{collaborator.title}</h3>
                      <p className="text-gray-600 font-medium">{collaborator.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SDG Alignment */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/50 to-accent/5 py-20">
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-sm font-black text-gray-500 uppercase tracking-wider mb-4 block">Global Impact</span>
              <h2 className="text-3xl font-black uppercase tracking-tight text-primary mb-4">UN Sustainable Development Goals</h2>
              <p className="text-gray-600 max-w-2xl mx-auto font-medium">
                Our initiatives are aligned with the United Nations Sustainable Development Goals (SDGs), contributing to a more equitable, inclusive, and developed world.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {sdgs.map((sdg) => (
                <div key={sdg} className="group bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/20 flex items-center justify-center mb-4">
                    <Globe size={24} />
                  </div>
                  <p className="font-black text-primary uppercase tracking-tight">{sdg}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-100 shadow-lg max-w-3xl mx-auto">
              <p className="text-gray-600 font-medium leading-relaxed text-center">
                Our work contributes to building inclusive learning environments and promoting lifelong learning opportunities for all. By partnering with us, you directly support the global agenda for sustainable development.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20">
          {/* Decorative blur circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 text-sm font-black uppercase tracking-wider">
              🚀 Join The Movement
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-6">
              Join Us in Transforming Education
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-10 font-medium">
              Whether you&apos;re a student wanting to participate, an institution looking to collaborate, or a sponsor wanting to make an impact, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2 rounded-full font-bold shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Get in Touch <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/partnerships">
                <Button size="lg" variant="outline" className="rounded-full font-bold border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent transition-all duration-300">
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
