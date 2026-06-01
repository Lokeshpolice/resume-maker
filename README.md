# Resume Maker 📄

A full-stack web application for creating, customizing, and exporting professional resumes.

## Features

✅ **User Input Form** - Easy-to-use form for resume details
✅ **Multiple Templates** - Choose from various resume design templates
✅ **Live Preview** - See changes in real-time
✅ **PDF Export** - Generate PDF resumes instantly
✅ **Data Validation** - Comprehensive input validation and formatting
✅ **Responsive Design** - Works on desktop and mobile devices

## Tech Stack

### Frontend
- React 18
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express.js
- PDFKit / Puppeteer
- Joi (Validation)
- CORS

## Project Structure

```
resume-maker/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Page components
│   │   ├── templates/       # Resume templates
│   │   ├── services/        # API services
│   │   └── App.js
│   └── package.json
├── backend/                  # Express API
│   ├── routes/              # API routes
│   ├── controllers/         # Route handlers
│   ├── middleware/          # Custom middleware
│   ├── validators/          # Input validation
│   ├── templates/           # PDF templates
│   └── server.js
├── docker-compose.yml       # Docker configuration
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Lokeshpolice/resume-maker.git
cd resume-maker

# Install dependencies
npm install

# Start development servers
npm run dev
```

### Environment Variables

Create `.env` files in both frontend and backend directories.

**Backend (.env)**
```
PORT=5000
NODE_ENV=development
```

**Frontend (.env)**
```
REACT_APP_API_URL=http://localhost:5000
```

## Usage

1. Fill out your resume information in the form
2. Choose your preferred template design
3. Preview your resume in real-time
4. Download as PDF when satisfied

## API Endpoints

- `POST /api/resume/validate` - Validate resume data
- `POST /api/resume/generate-pdf` - Generate PDF from resume data
- `GET /api/templates` - Get available templates

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For support, email or open an issue on GitHub.