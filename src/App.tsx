import * as React from 'react';
import './App.scss';

function App() {
  return (
    <main className="main">
      <img
        className="main__logo"
        alt="Library logo"
        src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png"
      />
      <h1 className="main__title">React Template - Vite</h1>
      <h2 className="main__stack-title">Tech Stack</h2>
      <ul className="main__stack">
        {[
          'React',
          'Typescript',
          'Sass',
          'Vite',
          'ESLint',
          'Prettier',
          'Husky',
        ].map((topic) => (
          <li key={topic} className="main__stack-item">
            <h3 className="main__stack-subtitle">{topic}</h3>
          </li>
        ))}
      </ul>
    </main>
  );
}

export { App };
