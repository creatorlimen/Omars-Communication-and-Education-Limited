import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ImageIcon } from 'lucide-react';

export default function Gallery() {
  const categories = [
    {
      name: 'Events',
      description: 'Moments from our programs, competitions, and community celebrations',
    },
    {
      name: 'Workshops',
      description: 'Training sessions and capacity building activities',
    },
    {
      name: 'Competitions',
      description: 'Highlights from Whispers and Words and other competitions',
    },
    {
      name: 'Community Engagement',
      description: 'Our outreach and advocacy work in action',
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
                <span className="text-sm font-black text-white uppercase tracking-wider">📸 Visual Stories</span>
              </span>
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
                Gallery
              </h1>
              <p className="text-lg text-white/90 max-w-2xl mx-auto font-medium">
                Visual proof of our impact. Explore moments from our events, workshops, competitions, and community engagement initiatives.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-black text-gray-500 uppercase tracking-wider mb-4 block">Our Impact</span>
              <h2 className="text-3xl font-black uppercase tracking-tight text-primary mb-4">See Our Work in Action</h2>
              <p className="text-gray-600 font-medium leading-relaxed">
                Through photos and visual stories, we share the energy, passion, and real-world impact of our programs. From student performances at Whispers and Words to workshops and community engagement, these images reflect the lives we touch and the change we&apos;re creating together.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-black text-gray-500 uppercase tracking-wider mb-4 block">Browse</span>
              <h2 className="text-3xl font-black uppercase tracking-tight text-primary">Gallery Categories</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full transition-all duration-300 group-hover:w-40 group-hover:h-40 z-10" />
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 h-48 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                    <ImageIcon className="text-primary opacity-40 group-hover:opacity-60 transition-all duration-300 group-hover:scale-110" size={64} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold uppercase tracking-tight text-primary mb-2">{category.name}</h3>
                    <p className="text-gray-600 font-medium">{category.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Coming Soon */}
        <section className="py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-12 border border-gray-100 shadow-lg text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/20 flex items-center justify-center mx-auto mb-6">
                  <ImageIcon size={28} />
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tight text-primary mb-4">Gallery Coming Soon</h2>
                <p className="text-gray-600 font-medium leading-relaxed mb-6">
                  We&apos;re compiling photos and visual stories from our events, workshops, and community initiatives. Our gallery will showcase the real impact of our programs and the amazing students and communities we work with.
                </p>
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold">
                  Check back soon for updates
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Image Format Guidelines */}
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-sm font-black text-gray-500 uppercase tracking-wider mb-4 block">Contribute</span>
              <h2 className="text-2xl font-black uppercase tracking-tight text-primary mb-6">Share Your Story</h2>
              <p className="text-gray-600 font-medium leading-relaxed mb-6">
                Do you have photos from our events or programs? We&apos;d love to feature your images in our gallery. Contact us to submit your photos and help us tell the story of education transformation.
              </p>
              <p className="text-sm text-gray-500">
                All submitted photos must be approved and credited appropriately.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
