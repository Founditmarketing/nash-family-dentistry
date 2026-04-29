import { Section, Card } from '../components/ui-elements';
import { Calendar, User } from 'lucide-react';

const Blog = () => {
  // Only articles that exist on vicksburgdentist.com (verified via HTTP 301 redirect)
  const posts = [
    {
      title: "What Is Laser Dentistry?",
      category: "Technology",
      date: "February 10, 2026",
      excerpt: "Discover how advanced laser technology makes dental procedures faster, more precise, and significantly more comfortable.",
      image: "/images/laser.jpg"
    },
    {
      title: "How to Care for Your Lumineers®",
      category: "Cosmetic",
      date: "January 28, 2026",
      excerpt: "Expert tips on maintaining your porcelain veneers for long-lasting brilliance and oral health.",
      image: "/images/lumineer-after-1.jpg"
    }
  ];

  return (
    <div id="blog-page">
      <div className="bg-black text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Dental Education & News</h1>
          <p className="text-white/60 max-w-2xl mx-auto">Staying informed about your oral health is the first step to a better smile.</p>
        </div>
      </div>

      <Section>
        <h2 className="text-3xl font-black text-black mb-10 text-center">Latest Articles</h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {posts.map((post, i) => (
            <Card key={i} className="flex flex-col h-full group border-0 shadow-lg">
              <div className="relative h-64 overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-widest">{post.category}</div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center text-xs text-gray-400 space-x-4 mb-4 font-bold uppercase tracking-widest">
                    <span className="flex items-center"><Calendar className="h-3 w-3 mr-1" /> {post.date}</span>
                    <span className="flex items-center"><User className="h-3 w-3 mr-1" /> Nash Family Dentistry</span>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4 leading-tight group-hover:text-vicksburg transition-colors">{post.title}</h3>
                <p className="text-gray-500 mb-8 flex-1 leading-relaxed">{post.excerpt}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Blog;
