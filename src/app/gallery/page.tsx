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
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 text-primary">
                Gallery
              </h1>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                Visual proof of our impact. Explore moments from our events, workshops, competitions, and community engagement initiatives.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">See Our Work in Action</h2>
              <p className="text-foreground/80 leading-relaxed">
                Through photos and visual stories, we share the energy, passion, and real-world impact of our programs. From student performances at Whispers and Words to workshops and community engagement, these images reflect the lives we touch and the change we&apos;re creating together.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-primary/5 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Gallery Categories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 h-48 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                    <ImageIcon className="text-primary opacity-40 group-hover:opacity-60 transition-opacity" size={64} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">{category.name}</h3>
                    <p className="text-foreground/70">{category.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Coming Soon */}
        <section className="py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card rounded-lg p-12 border border-border text-center">
              <ImageIcon className="mx-auto text-primary mb-6" size={48} />
              <h2 className="text-2xl font-bold text-primary mb-4">Gallery Coming Soon</h2>
              <p className="text-foreground/70 leading-relaxed mb-6">
                We&apos;re compiling photos and visual stories from our events, workshops, and community initiatives. Our gallery will showcase the real impact of our programs and the amazing students and communities we work with.
              </p>
              <p className="text-sm text-foreground/60">
                Check back soon to see moments from Whispers and Words, our workshops, and community engagement activities.
              </p>
            </div>
          </div>
        </section>

        {/* Image Format Guidelines */}
        <section className="bg-primary/5 py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-primary mb-6">Share Your Story</h2>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Do you have photos from our events or programs? We&apos;d love to feature your images in our gallery. Contact us to submit your photos and help us tell the story of education transformation in Lagos.
              </p>
              <p className="text-sm text-foreground/60">
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
