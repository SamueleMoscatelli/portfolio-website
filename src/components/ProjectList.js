import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Handwritten Digits Recognition",
    description: "A CNN-based handwritten digit classifier using TensorFlow.",
    technologies: ["Python", "TensorFlow"],
    link: "https://github.com/SamueleMoscatelli/mnist-digit-recognition",
  },
  {
    title: "Sentiment Analysis With LSTM",
    description: "LSTMs-based (Long Short-Term Memory Networks) sentiment analyzer with TensorFlow and Keras.",
    technologies: ["Next.js", "Tailwind CSS"],
    link: "https://github.com/SamueleMoscatelli/sentiment-analysis-with-lstm",
  },
  {
    title: "Scrabble",
    description: "C++ implementation of the Scrabble game, using the Trie data structure for the game dictionary of valid words.",
    technologies: ["C++"],
    link: "https://github.com/SamueleMoscatelli/scrabble-with-trie",
  },
  {
    title: "Clean Run",
    description: "Run tracker cross-platform mobile application to track running activities and notify about the quality of the air.",
    technologies: ["Flutter"],
    link: "https://github.com/SamueleMoscatelli/clean-run",
  },
  {
    title: "Portfolio Website",
    description: "A modern and responsive portfolio showcasing my work and experience.",
    technologies: ["Next.js", "Tailwind CSS"],
    link: "https://github.com/SamueleMoscatelli/portfolio-website",
  },
  {
    title: "Image Analysis and Computer Vision Toolbox",
    description: "Matlab code that implements a series of computer vision techniques for analyzing an image.",
    technologies: ["Matlab"],
    link: "https://github.com/SamueleMoscatelli/Image-Analysis-and-Computer-Vision-Homework",
  },
];

export default function ProjectList() {
  return (
    <section className="max-w-5xl mx-auto mt-12 px-6 grid gap-8 grid-cols-1 md:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
}
