🚀 Dev Stack

Dev Stack is a modern and responsive React application that helps developers explore different technologies and build their own personalized technology stack.

Users can browse technology cards, view technology information, add technologies to their stack, remove individual technologies, and clear the entire stack.

✨ Features

1. 🔎 Explore Technologies

Browse technologies by category.

View technology name, description, difficulty, rating, and icon.

Technology data is loaded from a JSON file.

2. 🧰 Build Your Own Stack

Add technologies to your personal stack.

Prevent duplicate selections.

Added technologies are shown with an Added to Stack state.

Remove individual technologies.

Remove all selected technologies at once.

The sidebar updates automatically when the stack changes.

3. 🔔 Interactive User Feedback

React Toastify is used for action notifications.

Users receive feedback when technologies are added or removed.

Users receive feedback when the complete stack is cleared.

🛠️ Technologies Used

React 19

TypeScript

Vite

Tailwind CSS

React Icons

React Toastify

JSON

HTML5

CSS3

📱 Responsive Design

The interface is designed to work across:

📱 Mobile devices

📱 Tablets

💻 Laptops

🖥️ Desktop screens

⚛️ React Questions & Answers

1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like UI code inside JavaScript or TypeScript.

It makes React components easier to read and helps us describe what the UI should look like.

const title = <h1>Dev Stack</h1>;

2. What is the difference between props and state?

Props are data passed from a parent component to a child component.

State is data managed by a component that can change over time.

For example, TechCard receives techData, isAdded, and handleSelectedTechs through props, while the selected technology list is stored as state in Technologies.

3. What does the useState hook do, and where did you use it in this project?

useState lets a component store data and update it when something changes.

I used it in App.tsx to keep the technology data promise stable, and in Technologies.tsx to store the technologies selected by the user.

const [selected, setSelected] = useState<TechType[]>([]);

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to run side effects such as fetching data after a component renders.

In this project, I used React 19's use() with Suspense instead of useEffect to load the JSON data. The promise is created in App.tsx, and Technologies reads it with use().

const techDatas = use(techDataPromise);

Suspense displays the loading fallback while the promise is pending.

Note: If the assignment specifically requires actual useEffect usage, the JSON-loading logic should be changed from use() + Suspense to useEffect + state.

5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify each item in a list.

It helps React efficiently detect which items were added, removed, or changed.

In this project, I use the technology's unique id:

{techDatas.map((techData) => (
  <TechCard
    key={techData.id}
    techData={techData}
    handleSelectedTechs={handleSelectedTechs}
    isAdded={isAdded}
  />
))}

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

I used it in the TechSideBar component:

{selected.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  selected.map((tech) => (
    // selected technologies
  ))
)}

When no technology is selected, the user sees the empty-stack message. Otherwise, the selected technologies are displayed.

I also use conditional rendering for the button text:

{isAdded ? "✓ Added to Stack" : "Add to Stack"}

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child through props.

For example, Technologies passes data and functions to TechCard:

<TechCard
  techData={techData}
  handleSelectedTechs={handleSelectedTechs}
  isAdded={isAdded}
/>

The child can communicate back to the parent by calling a callback function received through props:

handleSelectedTechs(techData);

So the flow is:

Parent
  ↓
  Props
  ↓
Child
  ↓
Callback function
  ↓
Parent

📂 Project Structure

src/
├── Component/
│   ├── Footer/
│   │   └── Footer.tsx
│   ├── Hero/
│   │   └── Hero.tsx
│   ├── Nav/
│   │   └── Nav.tsx
│   └── Technologies/
│       ├── TechCard.tsx
│       ├── Technologies.tsx
│       └── TechSideBar.tsx
│
├── assets/
├── Component/
│   └── Type.ts
├── App.css
├── App.tsx
├── index.css
└── main.tsx

public/
└── data.json

🚀 Getting Started

Clone the repository:

git clone https://github.com/jahanabir8/Dev-Stack.git

Go to the project directory:

cd Dev-Stack

Install dependencies:

npm install

Run the development server:

npm run dev

Create a production build:

npm run build

📦 GitHub Repository

View the Dev Stack repository

👨‍💻 Author

Abir Islam

Frontend Developer | React | TypeScript | JavaScript

⭐ If you like this project, consider giving the repository a star.