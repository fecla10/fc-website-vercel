# Felipe Clavijo - Personal Portfolio

A futuristic, responsive portfolio website built with Next.js, TypeScript, and Vercel's AI SDK featuring an interactive 3D globe and AI-powered chat interface.

## 🚀 Features

- **Futuristic Design**: Dark theme with neon accents, glassmorphism effects, and smooth animations
- **Interactive 3D Globe**: Visualize work locations using Globe.GL with clickable markers
- **AI Chat Interface**: Powered by Vercel's AI SDK with streaming responses
- **Responsive Layout**: Mobile-first design that works on all devices
- **SEO Optimized**: Next.js metadata and structured data
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **AI**: Vercel AI SDK with OpenAI GPT integration
- **3D Graphics**: Globe.GL for interactive globe
- **Animations**: Framer Motion
- **Deployment**: Vercel-ready configuration

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fc-website-vercel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory and add your OpenAI API key:
   ```bash
   OPENAI_API_KEY=your_openai_api_key_here
   ```

   Get your API key from [OpenAI Platform](https://platform.openai.com/api-keys).

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment to Vercel

### Option 1: Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Add environment variables**
   In the Vercel dashboard or via CLI:
   ```bash
   vercel env add OPENAI_API_KEY
   ```

### Option 2: GitHub Integration

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js settings

3. **Configure Environment Variables**
   - In project settings, add `OPENAI_API_KEY`
   - Deploy the project

## 🎯 Customization

### Updating Work Locations on Globe

Edit the `workLocations` array in `src/components/InteractiveGlobe.tsx`:

```typescript
const workLocations = [
  {
    lat: 34.0522,  // Latitude
    lng: -118.2437, // Longitude
    name: 'Los Angeles',
    description: 'Your description',
    size: 0.8,     // Marker size
    color: '#00ffff' // Hex color
  },
  // Add more locations...
]
```

Use Google Maps or OpenStreetMap to find coordinates.

### Updating Resume

Replace `public/resume.pdf` with your actual resume file. Keep the same filename to maintain download links.

### Modifying Bio Content

Update the bio text in `src/app/page.tsx` and the system prompt in `src/components/ChatInterface.tsx` to reflect your information.

### AI Model Configuration

In `src/components/ChatInterface.tsx`, you can change the AI model:

```typescript
const response = await generateText({
  model: openai('gpt-4'), // or 'gpt-4o-mini', 'gpt-3.5-turbo'
  // ... other options
})
```

For Anthropic Claude instead, change the import and model:
```typescript
import { anthropic } from '@ai-sdk/anthropic'

const response = await generateText({
  model: anthropic('claude-3-sonnet-20240229'), // or other Claude models
  // ... other options
})
```

## 📁 Project Structure

```
fc-website-vercel/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with navigation
│   │   ├── page.tsx            # Home page with hero and globe
│   │   ├── dashboard/
│   │   │   └── page.tsx        # AI chat interface
│   │   ├── resume/
│   │   │   └── page.tsx        # Resume download page
│   │   └── contact/
│   │       └── page.tsx        # Contact form
│   ├── components/
│   │   ├── Navigation.tsx      # Responsive navigation
│   │   ├── InteractiveGlobe.tsx # 3D globe component
│   │   └── ChatInterface.tsx   # AI chat interface
│   └── lib/                    # Utility functions
├── public/
│   └── resume.pdf              # Resume file
├── tailwind.config.js          # Tailwind configuration
├── next.config.js             # Next.js configuration
├── vercel.json                # Vercel deployment config
└── package.json               # Dependencies and scripts
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality

The project uses:
- **ESLint**: Code linting
- **TypeScript**: Type checking
- **Prettier**: Code formatting (recommended)

## 🤝 Contributing

This is a personal portfolio project. For suggestions or improvements, please open an issue or submit a pull request.

## 📄 License

This project is private and intended for personal use.

## 👨‍💻 Author

**Felipe Clavijo**
- Portfolio: [felipeclavijo.dev](https://felipeclavijo.dev)
- LinkedIn: https://www.linkedin.com/in/felipe-clavijoc/
- Email: feclavijo@gmail.com

---

Built with ❤️ using Next.js, TypeScript, and Vercel's AI SDK.
