import Link from "next/link";

const BlogsPage = () => {
  const blogData = [
    {
      id: 1,
      title: "Smashing Magazine",
      focus:
        "Senior-level performance, accessibility, and modern CSS deep dives.",
      url: "https://www.smashingmagazine.com",
      best_for:
        "Production-grade guides and comprehensive technical checklists.",
    },
    {
      id: 2,
      title: "In Plain English",
      focus: "React, TypeScript, and AI-assisted web development.",
      url: "https://javascript.plainenglish.io",
      best_for:
        "Practical tutorials on the modern JavaScript ecosystem and career growth.",
    },
    {
      id: 3,
      title: "The Pragmatic Engineer",
      focus: "Software architecture patterns and engineering leadership.",
      url: "https://blog.pragmaticengineer.com",
      best_for:
        "Big-picture industry analysis and high-level engineering culture.",
    },
    {
      id: 4,
      title: "Red Hat Blog (Linux)",
      focus:
        "Linux internals, containerization (Kubernetes), and system security.",
      url: "https://www.redhat.com/en/blog",
      best_for:
        "Terminal-focused optimizations and enterprise open-source workflows.",
    },
  ];
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Blogs</h2>
      {blogData.map((blog) => (
        <div key={blog.id}>
          <h3 className="text-4xl font-bold mb-2">{blog.title}</h3>
          <Link href="" className="btn btn-primary">
            Show Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
