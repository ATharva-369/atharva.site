import React, { useState } from "react";

const ProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center">
      <div className="max-w-3xl bg-gray-800 shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-4">Hello, I’m Atharva.</h1>
        <p className="text-gray-300 leading-6 mb-4">
          I’m a developer, tech-enthusiast, and lifelong learner. I’m currently
          working on innovative backend development at{' '}
          <a href="https://internlink.co/" className="text-blue-400 hover:underline">
            InternLink
          </a>.
        </p>
        <p className="text-gray-300 leading-6 mb-4">
          Previously, I contributed to building efficient CRUD API and NO-SQL
          database architecture at{' '}
          <a
            href="https://coursecompass.framer.website"
            className="text-blue-400 hover:underline"
          >
            Course Compass
          </a>, where I worked in an efficient team to achieve productive results.
        </p>
        <p className="text-gray-300 leading-6 mb-4">
          I have a strong passion for learning tech, and I enjoy acquiring and
          sharing knowledge on{' '}
          <a
            href="https://media.licdn.com/dms/image/v2/D4D22AQF2i46j5VSKlA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1693122456672?e=1740614400&v=beta&t=eeOO7VOupqlz7R9D-NzjMmz-OliPp_OzA7ogEs3Z4DE"
            className="text-blue-400 hover:underline"
          >
            Quantum Computing
          </a>{' '}
          and keeping up with the latest trends.
        </p>
        <p className="text-gray-300 leading-6 mb-6">
          When I’m not coding, I love exploring operating systems, reading
          books, tinkering with old laptops and machines, and engaging in
          creative problem-solving challenges.
        </p>
        <button
          className="bg-gray-700 hover:bg-gray-600 text-gray-100 font-medium py-2 px-4 rounded mb-6"
          onClick={openModal}
        >
          Contact Me
        </button>
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-sm w-full">
              <h2 className="text-xl font-semibold mb-4 text-gray-100">
                Contact Information
              </h2>
              <p className="text-gray-300 mb-2">
                Phone:{' '}
                <a
                  href="tel:+919076097041"
                  className="text-blue-400 hover:underline"
                >
                  +91 9076097041
                </a>
              </p>
              <p className="text-gray-300 mb-4">
                Email:{' '}
                <a
                  href="mailto:wagh.atharva14@gmail.com"
                  className="text-blue-400 hover:underline"
                >
                  wagh.atharva14@gmail.com
                </a>
              </p>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}

        <div className="border-t border-gray-700 pt-6">
          <h2 className="text-xl font-semibold mb-4">Find Me Online</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.linkedin.com/in/atharvaswagh/"
                className="text-blue-400 hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ATharva-369"
                className="text-blue-400 hover:underline"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
