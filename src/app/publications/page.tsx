import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { FileText, BookOpen, BarChart3, Lightbulb } from 'lucide-react';

export default function Publications() {
  const publicationTypes = [
    {
      icon: FileText,
      title: 'Articles on Education Issues',
      description: 'In-depth analysis and commentary on contemporary education challenges, policy discussions, and best practices in learning and literacy.',
    },
    {
      icon: Lightbulb,
      title: 'Opinion Pieces and Commentary',
      description: 'Thought leadership and perspectives from our team and partners on the future of education, youth development, and social change.',
    },
    {
      icon: BarChart3,
      title: 'Program Reports',
      description: 'Comprehensive reports on our initiatives, showcasing outcomes, lessons learned, and the impact of our programs on students and communities.',
    },
    {
      icon: BookOpen,
      title: 'Advocacy Briefs',
      description: 'Evidence-based briefs highlighting education challenges, policy recommendations, and actionable strategies for systemic improvement.',
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
                Publications
              </h1>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                Through our publications, Omars shares insights, reflections, and educational content that contribute to ongoing conversations about education, literacy, and youth development.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Thought Leadership & Advocacy</h2>
              <p className="text-foreground/80 leading-relaxed">
                We believe in the power of evidence-based advocacy and informed dialogue. Our publications serve as platforms for sharing knowledge, driving conversations, and inspiring action towards better education systems and more equitable learning opportunities for all.
              </p>
            </div>
          </div>
        </section>

        {/* Publication Types */}
        <section className="bg-primary/5 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">What We Publish</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {publicationTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <div key={type.title} className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-shadow">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="text-primary" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-4">{type.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{type.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card rounded-lg p-12 border border-border text-center">
              <BookOpen className="mx-auto text-primary mb-6" size={48} />
              <h2 className="text-2xl font-bold text-primary mb-4">Publications Coming Soon</h2>
              <p className="text-foreground/70 leading-relaxed mb-6">
                We&apos;re curating and publishing important content on education, advocacy, and community development. Check back regularly for our latest articles, reports, and briefs.
              </p>
              <p className="text-sm text-foreground/60">
                Want to be notified when new publications are released? Contact us to join our mailing list.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Topics */}
        <section className="bg-primary/5 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Topics We Cover</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Education Equity & Access',
                'Literacy & Language Development',
                'Student Empowerment & Wellbeing',
                'Gender Inclusion in Education',
                'Community Engagement Models',
                'Youth Development & Skills',
              ].map((topic) => (
                <div key={topic} className="bg-card rounded-lg p-6 border border-border text-center">
                  <p className="font-semibold text-primary">{topic}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
