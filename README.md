# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


React Planets Explorer 🌌
Welcome to the React Planets Explorer, an application that lets you explore information about planets in the Star Wars universe! 🚀

Project Overview
This project is built using React.js with Vite for fast development, Tailwind CSS and Bootstrap for styling, React Spinner for loading indicators, and React Router DOM for navigation. Context API is used for state management.

How to Run Locally
Follow these simple steps to run the project locally:

Install Dependencies:

bash
Copy code
npm install
Run the Development Server:

bash
Copy code
npm run dev
The project will be live at http://localhost:5173/.

Application Description
Home Page
The Home page fetches data about planets from the SWAPI.
It displays images and information about each planet.
Pagination is implemented to fetch data for the next 10 planets and so on.
Resident Cards Page
Clicking the "Know More" button on the Home page launches the Resident Cards page.
The Resident Cards page displays detailed information about the residents of the selected planet.
Project Structure
The project structure is organized for easy navigation and maintenance:

src/components: Contains reusable React components.
src/data: Manages data using Context API hooks.
src/pages: Houses main application pages.
src/styles: Holds styling files with Tailwind CSS and Bootstrap customization.
Feel free to explore the codebase and contribute to the project!

Suggestions or Issues
If you have any suggestions or encounter issues, please feel free to open an issue. Your feedback is highly appreciated! 🙌