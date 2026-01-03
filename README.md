# React Users App

A simple React application for managing a list of users. You can add new users, edit existing ones, and delete users from the list.

## Live Demo

[View the live application](https://defur.github.io/reactApp/)

## Features

- Display a list of users with their details (name, bio, age, happiness status)
- Add new users via a form
- Edit existing users (toggle edit form)
- Delete users from the list
- Responsive design with custom styling

## Technologies Used

- React 19
- React Icons
- CSS for styling
- Axios (installed but not used in current version)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/defur/reactApp.git
   cd reactApp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   The app will run on `http://localhost:3000`.

### Building for Production

To build the app for production:
```bash
npm run build
```

### Deployment

The app is deployed to GitHub Pages. To deploy updates:
```bash
npm run deploy
```

## Project Structure

- `src/App.js` - Main application component
- `src/components/` - Reusable components (Header, Users, User, AddUser)
- `src/css/main.css` - Stylesheet
- `public/` - Static assets

## Contributing

Feel free to fork the repository and submit pull requests.

## License

This project is open source and available under the [MIT License](LICENSE). 