# TCS Paints

**TCS Paints** is a comprehensive web application designed for a professional painting and renovation service. The platform empowers users to visualize home transformations through interactive 3D models and before/after comparisons, while providing a streamlined process for submitting service inquiries.

**Target Audience**: Homeowners looking to renovate, painting service clients, and users interested in interior design visualization.

---

## 🛠 Tech Stack

### Frontend

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **3D Visualization**: [Three.js](https://threejs.org/) / React Three Fiber
- **Routing**: React Router DOM

### Backend

- **Runtime**: Node.js
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: PostgreSQL (managed via [Supabase](https://supabase.com/))
- **ORM**: [Sequelize](https://sequelize.org/)
- **Services**:
  - **Nodemailer**: For handling email notifications and inquiries.
  - **Supabase Storage**: For managing media assets.

---

## 🏗 Implementation Details

### Project Structure

The repository is organized as a monorepo containing both client and server applications:

- **`TCS-Paint/`** (Frontend):

  - `src/components/`: Reusable UI components.
  - `src/pages/`: Main application routes (Home, Gallery, About).
  - `src/assets/`: Static assets including 3D models (`.glb`/`.gltf`) and images.
  - `public/`: Publicly accessible assets.

- **`server/`** (Backend):
  - `api/`: Entry point and route configuration.
  - `controllers/`: Business logic for handling requests.
  - `models/`: Database schema definitions.
  - `routes/`: API endpoint definitions.

### Setup Instructions

1.  **Clone the Repository**

    ```bash
    git clone https://github.com/yourusername/TCS-Paints.git
    cd TCS-Paints
    ```

2.  **Backend Setup**

    - Navigate to the server directory: `cd server`
    - Install dependencies: `npm install`
    - Configure Environment Variables: Create a `.env` file with `DB_HOST`, `DB_USER`, `DB_PASS`, `SUPABASE_URL`, etc.
    - Start the server: `npm start`

3.  **Frontend Setup**
    - Navigate to the frontend directory: `cd ../TCS-Paint`
    - Install dependencies: `npm install`
    - Start the development server: `npm run dev`

### Key Implementation Aspects

- **3D Model Integration**: Uses Three.js to render interactive house models, allowing users to apply textures and colors in real-time.
- **Before/After Sliders**: Custom component implementation for visual comparison of renovation projects.

---

## 🚀 Features

### Core Features

- **3D House Visualization**: Interact with 3D models to preview paint colors and material changes.
- **Renovation Gallery**: View high-quality before and after transformation photos with interactive sliders.
- **Service Inquiries**: specialized form for users to request quotes, triggering automated email notifications to admin.
- **Responsive Dashboard**: Mobile-friendly interface ensuring accessibility on all devices.

### Advanced Features

- **Real-time Cost Estimation**: (Via Chatbot) Get instant estimates based on room dimensions.
- **AI Design Assistant**: (Via Chatbot) Receive color suggestions and design advice.

---

## 🤖 Chatbot Integration

This project integrates with a dedicated AI Backend-for-Frontend (BFF) service to provide intelligent assistance.

- **Repository**: [backend-sk-chat-tcs](https://github.com/NikitaaOvramenko/backend-sk-chat-tcs)
- **Purpose**: Acts as the intelligence layer, managing chat sessions and processing user intent using AI.

### How it Works

The frontend Chat component communicates with this external .NET service. When a user sends a message, the service:

1.  Processes the intent using **Microsoft Semantic Kernel**.
2.  Invokes native plugins for tasks like **Cost Estimation** (`CalcWallPrice`).
3.  Process image modification requests (`ImageToImagePlugin`) for surface recoloring.

### Setup

Ensure the Chatbot service is running and accessible. Update the frontend environment variables to point to the Chatbot API endpoint.

---

## 📖 Usage

### Visualizing Renovations

1.  Navigate to the **Home** or **Gallery** page.
2.  Use the 3D viewer to rotate and zoom into the house model.
3.  Select different textures/colors from the palette to apply them to surfaces.

### Submitting an Inquiry

1.  Go to the **Contact/Inquiry** section.
2.  Fill out the form with your project details.
3.  Click **Submit** to send the request. You will receive a confirmation email.

### Using the AI Assistant

1.  Click the **Chat** icon in the bottom corner.
2.  Ask questions like _"How much to paint a 10x10 room?"_ or _"Suggest colors for a modern living room."_
3.  The bot will respond with estimates or suggestions.

---

## 🤝 Contribution Guidelines

We welcome contributions! Please follow these steps:

1.  **Fork the Project**: Create your own copy of the repository.
2.  **Create a Branch**: `git checkout -b feature/AmazingFeature`
3.  **Commit Changes**: `git commit -m 'Add some AmazingFeature'`
4.  **Push to Branch**: `git push origin feature/AmazingFeature`
5.  **Open a Pull Request**: specific the changes and link any relevant issues.

### Code Style

- **Frontend**: Follow React hooks best practices and standard TypeScript conventions.
- **Backend**: Ensure clean controller/service separation.
- **Commits**: Use descriptive commit messages.

---

## 📄 License & Acknowledgements

### License

[Insert License Type, e.g., MIT License]

### Acknowledgements

- **Three.js Community**: For excellent documentation and examples.
- **Microsoft Semantic Kernel**: For powering the AI interactions.
- Contributors: [List key contributors here]
