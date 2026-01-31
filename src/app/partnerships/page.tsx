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
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 text-primary">
                Partnerships & Collaborations
              </h1>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                Collaboration amplifies impact. We work with schools, NGOs, community groups, and sponsors to make education initiatives more effective.
              </p>
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

        {/* Partnership Benefits */}
        <section className="bg-primary/5 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Benefits of Partnership</h2>
            <div className="space-y-8 max-w-4xl mx-auto">
              {benefits[0].items.map((benefit, index) => (
                <div key={index} className="bg-card rounded-lg p-8 border border-border">
                  <h3 className="text-xl font-semibold text-primary mb-3">{benefit.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SDG Alignment */}
        <section className="py-16 sm:py-24">
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

        {/* Impact on Society */}
        <section className="bg-primary/5 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Impact on Communities</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-primary mb-3">More Educated & Engaged Communities</h3>
                <p className="text-sm text-foreground/70">Through our initiatives, we create more informed, engaged, and empowered communities.</p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-primary mb-3">Reduction in Educational Inequality</h3>
                <p className="text-sm text-foreground/70">We work to bridge gaps in access, resources, and opportunities for marginalized students.</p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-primary mb-3">Stronger Culture of Expression & Dialogue</h3>
                <p className="text-sm text-foreground/70">We foster environments where diverse voices are heard, valued, and celebrated.</p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-primary mb-3">Long-Term Social Development</h3>
                <p className="text-sm text-foreground/70">Our work contributes to sustainable social and economic development at the community level.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Opportunities */}
        <section className="py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card rounded-lg p-12 border border-border text-center">
              <Handshake className="mx-auto text-primary mb-6" size={48} />
              <h2 className="text-2xl font-bold text-primary mb-4">Partner With Us</h2>
              <p className="text-foreground/70 leading-relaxed mb-8">
                We&apos;re always looking for organizations and individuals who share our passion for education, inclusion, and community empowerment. Whether through sponsorships, collaborations, or volunteer support, there are many ways to work with Omars.
              </p>
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  Start a Partnership <ArrowRight size={18} />
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
