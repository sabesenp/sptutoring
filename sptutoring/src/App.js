import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold">SP Tutoring World</h1>
        <p className="mt-2 text-lg">Expert Tutoring in Math, Computer Science & More</p>
      </header>

      <section className="max-w-4xl mx-auto py-6">
        <h2 className="text-2xl font-semibold mb-2">About</h2>
        <p>
          Welcome to SP Tutoring World! I'm Sabesen, a Computer Science student at TMU,
          offering personalized tutoring for high school and university students.
        </p>
      </section>

      <section className="max-w-4xl mx-auto py-6">
        <h2 className="text-2xl font-semibold mb-2">Subjects Offered</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>High School Math</li>
          <li>Computer Science (Java, Python, C++)</li>
          <li>University Exam Prep</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto py-6">
        <h2 className="text-2xl font-semibold mb-2">Rates</h2>
        <p>$45/hour · Discounts for bundles and group sessions.</p>
      </section>

      <section className="max-w-4xl mx-auto py-6">
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
          <input type="email" placeholder="Your Email" className="w-full border p-2 rounded" />
          <textarea placeholder="Your Message" rows="4" className="w-full border p-2 rounded"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </section>

      <footer className="text-center text-sm mt-12 text-gray-500">
        © {new Date().getFullYear()} SP Tutoring World · All Rights Reserved
      </footer>
    </div>
  );
}
