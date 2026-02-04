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
        <section className="relative bg-gradient-to-br from-primary via-primary to-primary/80 py-20 sm:py-28 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-white font-bold text-sm uppercase tracking-wider">📚 KNOWLEDGE SHARING</span>
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6">
                Publications
              </h1>
              <p className="text-lg text-white/90 max-w-2xl mx-auto font-medium">
                Through our publications, O&apos;MARS shares insights, reflections, and educational content that contribute to ongoing conversations about education, literacy, and youth development.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-sm font-black text-gray-500 uppercase tracking-wider mb-4 block">Our Mission</span>
              <h2 className="text-3xl sm:text-4xl font-black text-primary uppercase tracking-tight mb-6">Thought Leadership & Advocacy</h2>
              <p className="text-gray-600 font-medium leading-relaxed">
                We believe in the power of evidence-based advocacy and informed dialogue. Our publications serve as platforms for sharing knowledge, driving conversations, and inspiring action towards better education systems and more equitable learning opportunities for all.
              </p>
            </div>
          </div>
        </section>

        {/* Publication Types */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-black text-gray-500 uppercase tracking-wider mb-4 block">Content Types</span>
              <h2 className="text-3xl sm:text-4xl font-black text-primary uppercase tracking-tight">What We Publish</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {publicationTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <div key={type.title} className="group bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full group-hover:w-40 group-hover:h-40 transition-all duration-300" />
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/20 flex items-center justify-center mb-6">
                        <Icon size={28} />
                      </div>
                      <h3 className="text-xl font-black text-primary uppercase tracking-tight mb-4">{type.title}</h3>
                      <p className="text-gray-600 font-medium leading-relaxed">{type.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="bg-gradient-to-b from-muted/30 to-background py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="group bg-white rounded-2xl border border-gray-100 p-12 text-center hover:shadow-xl transition-all duration-300 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full group-hover:w-56 group-hover:h-56 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/5 to-transparent rounded-tr-full" />
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/20 flex items-center justify-center mx-auto mb-6">
                  <BookOpen size={36} />
                </div>
                <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-4">Publications Coming Soon</h2>
                <p className="text-gray-600 font-medium leading-relaxed mb-6">
                  We&apos;re curating and publishing important content on education, advocacy, and community development. Check back regularly for our latest articles, reports, and briefs.
                </p>
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold">
                  📧 Want to be notified? Contact us to join our mailing list
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Topics */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-black text-gray-500 uppercase tracking-wider mb-4 block">Focus Areas</span>
              <h2 className="text-3xl sm:text-4xl font-black text-primary uppercase tracking-tight">Topics We Cover</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { topic: 'Education Equity & Access', emoji: '🎯' },
                { topic: 'Literacy & Language Development', emoji: '📚' },
                { topic: 'Student Empowerment & Wellbeing', emoji: '💪' },
                { topic: 'Gender Inclusion in Education', emoji: '🤝' },
                { topic: 'Community Engagement Models', emoji: '🏠' },
                { topic: 'Youth Development & Skills', emoji: '🌟' },
              ].map((item) => (
                <div key={item.topic} className="group bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full group-hover:w-32 group-hover:h-32 transition-all duration-300" />
                  <div className="relative">
                    <span className="text-3xl mb-3 block">{item.emoji}</span>
                    <p className="font-bold text-primary">{item.topic}</p>
                  </div>
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
