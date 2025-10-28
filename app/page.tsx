import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const profile = {
    name: "Chea Vearo",
    title: "AI & MLOps Engineer | End-to-End ML Deployment | Computer Vision",
    photo: "/profile.jpg", // Make sure your image is /public/profile.png
    bio: "I’m an AI Agentic & MLOps Engineer specializing in end-to-end ML deployment and intelligent Agentic AI systems using LangGraph, RAG, and LLMs. I build reliable, production-ready pipelines with MLFlow, Docker, and AWS, enabling faster, automated model delivery. With strong expertise in Computer Vision, FastAPI, and deep learning, I help clients transform prototypes into scalable AI solutions. Whether you need a custom AI agent, MLOps automation, or a deployable ML API, I deliver high-performance systems that are clean, efficient, and ready for production.",
    email: "vearochea8@gmail.com",
    github: "https://github.com/cheavearo",
    linkedin: "https://www.linkedin.com/in/vearo-chea",
  };

  const projects = [
    {
      title: "Phishing Detection App",
      description:
        "A real-time phishing website detection system powered by machine learning.",
      link: "#",
    },
    {
      title: "Vocal Pitch Detection",
      description:
        "An app that detects sung notes in real-time and visualizes pitch accuracy.",
      link: "#",
    },
    {
      title: "Credit Card Fraud Detection",
      description:
        "Hybrid data architecture using Firestore + MongoDB for fraud detection.",
      link: "#",
    },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      {/* Hero / About Section */}
      <section className="text-center">
        <Image
          src={profile.photo}
          alt="Profile Photo"
          width={160}
          height={200}
          priority
          className="rounded-xl mx-auto shadow-md object-cover"
        />
        <h1 className="text-4xl font-bold mt-6">{profile.name}</h1>
        <h2 className="text-xl text-gray-600">{profile.title}</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">{profile.bio}</p>
      </section>

      {/* Projects Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-600 hover:underline">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <p>
          Email:{" "}
          <a
            href={`mailto:${profile.email}`}
            className="text-blue-600 hover:underline"
          >
            {profile.email}
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a href={profile.github} className="text-blue-600 hover:underline">
            {profile.github}
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a href={profile.linkedin} className="text-blue-600 hover:underline">
            {profile.linkedin}
          </a>
        </p>
      </section>
    </main>
  );
}
