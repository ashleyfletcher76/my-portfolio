'use client';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Socials() {
  return (
    <div className="flex gap-4 text-4xl">
      <a
        href="https://github.com/ashleyfletcher76"
        target="_blank"
        rel="me noopener noreferrer"
        aria-label="GitHub"
        title="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/ashley-fletcher-6065a32a0"
        target="_blank"
        rel="me noopener noreferrer"
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <FaLinkedin />
      </a>
    </div>
  );
}
