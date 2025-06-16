🔽 Accordion Toggle Project
This is a simple and interactive Accordion UI Component built using HTML, CSS, and Vanilla JavaScript. The accordion allows users to expand and collapse content sections by clicking on icons.


📌 Features
🔘 Click to expand and collapse individual sections.

➕ When a section is opened, any other opened section automatically collapses.

🔁 Toggle icons dynamically switch between + (fa-plus) and − (fa-minus) based on section state.

🧠 Clean and readable logic using forEach, classList, and DOM navigation methods.


🛠️ How It Works
All accordion icons (.accord i) are selected.

Each icon is linked to its respective content <p> tag (next sibling).

On icon click:

If the current section is open → it gets closed, and icon changes to +.

If it’s closed → all other sections are closed first, and the clicked one opens with icon switching to −.

📂 Files Structure
📁 Accordion Project
├── index.html
├── style.css
└── script.js


🎯 Use Cases
FAQ sections

Sidebar navigation menus

Content toggling for better UI/UX


🧩 Tech Used
HTML5

CSS3 (with Font Awesome for icons)

JavaScript (Vanilla)
