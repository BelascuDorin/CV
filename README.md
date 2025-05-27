# CV Portfolio

A modern, responsive portfolio website built with Next.js and Tailwind CSS.

## Features

✨ **Clean, Professional Design**
- Modern gradient background and card-based layout
- Fully responsive design that works on all devices
- Dark mode support

📄 **CV Download**
- Prominent download button for your PDF CV
- Just add your CV as `public/cv.pdf`

🤖 **AI-Powered Q&A**
- Interactive prompt where visitors can ask about your experience
- Smart responses based on your professional background
- Loading states and user-friendly error handling

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your CV:**
   - Place your PDF CV in the `public/` directory as `cv.pdf`

3. **Customize your experience data:**
   - Edit the response logic in `app/page.tsx` to include your actual experience
   - You can connect this to an API or local data for more sophisticated responses

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** to see your portfolio

## Customization

- **Personal Info**: Update the hero section text and info cards
- **Experience Data**: Modify the Q&A logic to reflect your actual background
- **Styling**: Customize colors and layout in the Tailwind classes
- **Content**: Add more sections like projects, testimonials, etc.

## Deployment

Deploy easily on Vercel, Netlify, or any platform that supports Next.js.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety and better developer experience
