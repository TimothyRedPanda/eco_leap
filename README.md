<h1 align="center">Eco-Leap</h1>

<h2 align="center">About the Project</h2>
<p align="left">This project is a responsive web application that supports users to calculate their transport carbon emissions and are empowered with actionable steps to minimise their carbon emissions.</p>

<h2 align="center">How it works</h2>
<h3>User Journey:</h3> 
<b>Input Details:</b> Users select their mode of transport from options such as car, bus, train, or aeroplane. They also input the distance travelled in kilometres or miles. For car users, an additional selection for fuel type (petrol, diesel, or electric) is required.<br><br>

<b>Calculate Emissions:</b> Based on the provided inputs, the calculator computes the carbon emissions using predefined emission factors (e.g., kg CO2 per km for each mode of transport and fuel type).<br>

<b>Personalised Tips:</b> After calculating the emissions, users receive personalised tips on how to reduce their carbon footprint. These tips might include switching to more sustainable transport options, reducing travel distance, carpooling, or using electric vehicles.<br>

<h3>Development Journey:</h3>
For developers, running the project locally begins with configuring the environment by adding the necessary keys into the .env.local file. Committing changes triggers pre-commit hooks and static testing tools like Biome, Prettier, and Husky to maintain code quality and consistency. Adhering to the GitHub flow, developers create a pull request to manage changes to the main branch, minimizing the risk of errors. During this process, several checks are performed:

- Vercel Deployment confirms the changes have been successfully deployed.
- Vercel Preview Comments provide feedback on the preview deployment, highlighting any unresolved issues.

A different contributor reviews the pull request to ensure it meets the project's standards and guidelines. Once approved, the changes are merged and deployed, ensuring the website remains functional and up-to-date.<br>

Unit testing is completed using Jest; this ensures code reliability and functionality. Unit tests validate individual units of code to ensure they perform as expected across different scenarios and edge cases. This practice enhances code quality, identifies bugs early in the development cycle, and supports code refactoring with confidence.

<h2 align="center">Links</h2>

- The Deployed Website: https://eco-leap.vercel.app/
- GitHub Project:

<h2 align="center">Tech Stack</h2>

<p align="center">
    <img align="center" width="40" height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
    <img align="center" width="40" height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />  
  <img align="center" width="40" height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" />      
    <img align="center" width="40" height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
    <img align="center" width="40" height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
    <img align="center" width="40" height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
    <img align="center" width="40" height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
    <img align="center" width="40" height="40" src="https://raw.githubusercontent.com/moose-hub/moose-hub/main/svgs/express.svg" />
    <img align="center" width="40" height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg" />
    <img align="center" width="40" height="40" src="https://raw.githubusercontent.com/moose-hub/moose-hub/main/svgs/snyk.svg" />
    <img align="center" width="40" height="40" src="https://raw.githubusercontent.com/moose-hub/moose-hub/main/svgs/vercel.svg" />
    <img align="center" width="40" height="40" src="https://raw.githubusercontent.com/moose-hub/moose-hub/main/svgs/git.svg" />
    <img align="center" width="40" height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg" />
   
</p>


<h2 align="center">Who We Are</h2>
<p align="left">Timothy and Kelsey have consolidated their knowledge from the School of Code and embarked on a journey to learn and create meaningful projects together. They recently completed their bootcamp and are passionate about applying their skills to real-world problems.</p>

[Timothy's GitHub](https://github.com/TimothyRedPanda)   
[Kelsey's GitHub](https://github.com/KelseyBaker262)  


<h2 align="center">Project Overview</h2>

- Planning: Notion and GitHub Projects
- Existing solutions and survey responses
- Wireframing and prototyping
- Screenshots of build progress

  <h2 align="center">Code Snippets</h2>



<h2 align="center">Running this Project</h2>
To run this project locally, you will need to do the following: <br><br>

> Note: System Requirements: Ensure you have Node.js installed on your system before running the project. You can download Node.js from [Node.js](https://nodejs.org). 

Clone the project

```yaml
  git clone https://github.com/KelseyBaker262/eco-leap.git
```

Go to the project directory

```yaml
  cd eco-leap
```

Install dependencies

```yaml
  npm install
```
 or
```yaml 
  pnpm install
```

Start the server

```yaml
  npm run dev
```
or
```yaml
  pnpm dev
```

Your app template should now be running on [localhost:3000](http://localhost:3000/).

Add the following environment variables to your .env file:

``` yaml

```
> Note: You should not commit your .env file or it will expose keys that provide access to sensitive services and APIs. Exposing these keys could lead to unauthorized access and data breaches.
