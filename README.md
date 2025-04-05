# Vidhi04-intern-repo

My Tailwind App

Built with ❤️ using React Router and Tailwind CSS.

## Steps to Set Up the Environment

1. Create a Vite Project with React and TypeScript:
   - Run the following command to create a new Vite project with React and TypeScript template:
   bash
     npm create vite@latest my-tailwind-app --template react-ts

2. Select the Framework and Variant:
   - When prompted, select:
     - Framework: React
     - Variant: React Router v7

   This initializes the project with React and React Router v7, and installs the necessary dependencies.

3. Install Tailwind CSS and Vite Plugin:
   - Once inside your project folder, install the required Tailwind CSS and Vite plugin:
    bash
     npm install tailwindcss @tailwindcss/vite

4. Configure Vite Plugin:
   - In the `vite.config.ts` file, import and configure the Tailwind CSS plugin:
      ts
     import { defineConfig } from 'vite';
     import tailwindcss from '@tailwindcss/vite';

     export default defineConfig({
       plugins: [tailwindcss()],
     });

5. Add Tailwind CSS to Your Styles:
   - In your CSS file (e.g., `src/index.css`), add the following imports to enable Tailwind's default styles:
     css
     @import "tailwindcss";

6. Update the `Home.tsx` File:
   - In your `Home.tsx` component, update the code to verify Tailwind is working:
      tsx
     export default function Home() {
       return (
         h1 className="text-3xl font-bold underline"
           Hello world!
         </h1>
       );
     }

7. Run the Development Server:
   - Start the development server using:
     npm run dev

8. View the Changes:
   - Open the browser and go to `http://localhost:3000` to see your app with Tailwind CSS applied.

## Git Setup

This project is initialized with Git for version control. You can check the status, commit changes, and push to a remote repository if desired.
