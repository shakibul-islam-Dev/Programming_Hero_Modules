const blogs = [
  {
    id: 1,
    title: "Smashing Magazine",
    focus:
      "Senior-level performance, accessibility, and modern CSS deep dives.",
    url: "https://www.smashingmagazine.com",
    best_for: "Production-grade guides and comprehensive technical checklists.",
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

const BlogsDetailsPage = ({ params }) => {
  const { blogsId } = params;
  //Show
  console.log("1.show me params", blogsId);
  const blog = blogs.find((b) => b.id === Number(blogsId));
  //undefined
  console.log("2.show me params", blog);

  return (
    <div>
      {/* <h3 className="text-4xl font-bold">Comming soon</h3>
      {blog && (
        <div>
          <h4 className="text-4xl">{blog.title}</h4>
          <h4 className="text-4xl">{blog.focus}</h4>
        </div> */}
      {/* )} */}
    </div>
  );
};

export default BlogsDetailsPage;
