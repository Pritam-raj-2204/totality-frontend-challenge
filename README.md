# Property Rental Platform

## Overview

This project is a property rental platform designed to allow users to browse a variety of properties, filter them based on specific criteria, add properties to their cart, and proceed to checkout. The platform is built using modern web technologies to ensure a responsive and user-friendly experience.

## Features

- **Property Listings**: Displays properties with images, titles, descriptions, prices, and "Book Now" buttons.
- **Filtering**: Users can filter properties by location, price range, number of bedrooms, and amenities.
- **Cart Management**: Users can add properties to a cart, view the cart, and remove items.
- **Checkout Process**: A simple form to collect user details and confirm bookings.
- **Responsive Design**: Optimized for both mobile and desktop views.

## Tech Stack

- **React**: A JavaScript library for building user interfaces, providing a component-based structure.
- **React Router**: Handles routing within the application, allowing for a seamless single-page experience.
- **Context API**: Used for state management, particularly for handling the cart state across different components.
- **CSS**: Custom styles with media queries for responsive design, ensuring the site looks good on all devices.

## Approach

1. **Component-Based Architecture**: The application is divided into reusable components, such as `PropertyList`, `Cart`, and `Checkout`, each responsible for a specific part of the UI. This modular approach makes the codebase easier to manage and extend.

2. **State Management with Context API**: The `CartContext` is used to manage the state of the cart throughout the application. This allows different components to access and modify the cart data without prop drilling.

3. **Responsive Design**: CSS media queries are used to adapt the layout for different screen sizes, providing a seamless user experience on both mobile and desktop devices.

4. **Routing**: React Router is utilized to manage navigation between pages, including the home, cart, and checkout pages. This setup helps maintain a smooth and dynamic user experience.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/totality-frontend-challenge.git
    cd totality-frontend-challenge
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the development server**:
    ```bash
    npm start
    ```

4. **Access the Application**:
    - Open your browser and navigate to `http://localhost:3000`.

## Deployment

To deploy the application, you can use platforms like Vercel, Netlify, or GitHub Pages. The following steps outline a typical process using Vercel:

1. **Build the application**:
    ```bash
    npm run build
    ```

2. **Deploy**:
    - Follow the instructions on Vercel to connect your GitHub repository and deploy the project.

## Additional Notes

- **Scalability**: The current setup can be easily extended with additional features like user authentication, property reviews, and integration with a backend API for dynamic data fetching.
- **Testing**: Consider adding unit and integration tests to ensure the application functions correctly and to facilitate future development.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.

## Acknowledgements

- Thanks to the React and JavaScript communities for providing excellent resources and tools.

## Website Link
    - Open your browser and navigate to
    -  https://astounding-caramel-631ec4.netlify.app/