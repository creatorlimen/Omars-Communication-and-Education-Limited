import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Handshake, Lightbulb, Users, Globe, Award, ArrowRight } from 'lucide-react';

export default function Partnerships() {
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

  const benefits = [
    {
      category: 'For Stakeholders, Partners, and Sponsors',
      items: [
        {
          title: 'Meaningful Social Impact',
          description: 'Contribute to measurable education outcomes. Your support directly changes lives, not just provides brand visibility.',
        },
        {
          title: 'Positive Brand Association and Visibility',
          description: 'Align with education, inclusion, and youth development. Build credibility through association with impactful initiatives.',
        },
        {
          title: 'Access to Youth & Education Networks',
          description: 'Engage directly with schools, students, and communities. Create opportunities for collaboration and future initiatives.',
        },
        {
          title: 'Contribution to National & Global Goals',
          description: 'Align with SDGs (Education, Gender Equality, Inclusion). Participate in long-term development objectives.',
        },
      ],
    },
  ];

  const sdgs = ['SDG 4: Quality Education', 'SDG 5: Gender Equality', 'SDG 10: Reduced Inequalities', 'SDG 17: Partnerships for the Goals'];

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
                <span className="text-sm font-black text-white uppercase tracking-wider">🤝 Together We Grow</span>
              </span>
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
                Partnerships & Collaborations
              </h1>
              <p className="text-lg text-white/90 max-w-2xl mx-auto font-medium">
                Collaboration amplifies impact. We work with schools, NGOs, community groups, and sponsors to make education initiatives more effective.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Collaborate With */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-black text-gray-500 uppercase tracking-wider mb-4 block">Our Network</span>
              <h2 className="text-3xl font-black uppercase tracking-tight text-primary">Who We Collaborate With</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {collaborators.map((collaborator) => {
                const Icon = collaborator.icon;
                return (
                  <div key={collaborator.title} className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full transition-all duration-300 group-hover:w-40 group-hover:h-40" />
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/20 flex items-center justify-center mb-6">
                        <Icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold uppercase tracking-tight text-primary mb-4">{collaborator.title}</h3>
                      <p className="text-gray-600 font-medium">{collaborator.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-black text-gray-500 uppercase tracking-wider mb-4 block">Why Partner</span>
              <h2 className="text-3xl font-black uppercase tracking-tight text-primary">Benefits of Partnership</h2>
            </div>
            <div className="space-y-6 max-w-4xl mx-auto">
              {benefits[0].items.map((benefit, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full transition-all duration-300 group-hover:w-40 group-hover:h-40" />
                  <div className="relative">
                    <span className="inline-block bg-gradient-to-r from-primary to-primary/80 text-white px-4 py-1.5 text-xs font-black uppercase rounded-full shadow-sm mb-4">
                      Benefit {index + 1}
                    </span>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-primary mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 font-medium leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SDG Alignment */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-black text-gray-500 uppercase tracking-wider mb-4 block">Global Impact</span>
              <h2 className="text-3xl font-black uppercase tracking-tight text-primary mb-4">UN Sustainable Development Goals</h2>
              <p className="text-gray-600 font-medium max-w-2xl mx-auto">
                Our initiatives are aligned with the United Nations Sustainable Development Goals (SDGs), contributing to a more equitable, inclusive, and developed world.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {sdgs.map((sdg) => (
                <div key={sdg} className="group bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/20 flex items-center justify-center mb-4">
                    <Globe size={24} />
                  </div>
                  <p className="font-bold text-primary">{sdg}</p>
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

        {/* Impact on Society */}
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-black text-gray-500 uppercase tracking-wider mb-4 block">Our Reach</span>
              <h2 className="text-3xl font-black uppercase tracking-tight text-primary">Impact on Communities</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full transition-all duration-300 group-hover:w-40 group-hover:h-40" />
                <div className="relative">
                  <span className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600 mb-4">✓</span>
                  <h3 className="font-bold text-primary mb-3">More Educated & Engaged Communities</h3>
                  <p className="text-sm text-gray-600 font-medium">Through our initiatives, we create more informed, engaged, and empowered communities.</p>
                </div>
              </div>
              <div className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full transition-all duration-300 group-hover:w-40 group-hover:h-40" />
                <div className="relative">
                  <span className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600 mb-4">✓</span>
                  <h3 className="font-bold text-primary mb-3">Reduction in Educational Inequality</h3>
                  <p className="text-sm text-gray-600 font-medium">We work to bridge gaps in access, resources, and opportunities for marginalized students.</p>
                </div>
              </div>
              <div className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full transition-all duration-300 group-hover:w-40 group-hover:h-40" />
                <div className="relative">
                  <span className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600 mb-4">✓</span>
                  <h3 className="font-bold text-primary mb-3">Stronger Culture of Expression & Dialogue</h3>
                  <p className="text-sm text-gray-600 font-medium">We foster environments where diverse voices are heard, valued, and celebrated.</p>
                </div>
              </div>
              <div className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full transition-all duration-300 group-hover:w-40 group-hover:h-40" />
                <div className="relative">
                  <span className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600 mb-4">✓</span>
                  <h3 className="font-bold text-primary mb-3">Long-Term Social Development</h3>
                  <p className="text-sm text-gray-600 font-medium">Our work contributes to sustainable social and economic development at the community level.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Opportunities */}
        <section className="py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-12 border border-gray-100 shadow-lg text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/20 flex items-center justify-center mx-auto mb-6">
                  <Handshake size={28} />
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tight text-primary mb-4">Partner With Us</h2>
                <p className="text-gray-600 font-medium leading-relaxed mb-8">
                  We&apos;re always looking for organizations and individuals who share our passion for education, inclusion, and community empowerment. Whether through sponsorships, collaborations, or volunteer support, there are many ways to work with O&apos;MARS.
                </p>
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg shadow-primary/20 rounded-full font-bold transition-all duration-300 hover:scale-105 gap-2">
                    Start a Partnership <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
