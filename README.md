Swiper Setup for WordPress Users
Introduction
This script provides an easy-to-use solution for incorporating Swiper, a touch-enabled slider and carousel library, into your WordPress website without needing to directly manipulate HTML structure.

Functionality
The setupSwiper(selector) function initializes a Swiper instance dynamically on a specified class within your WordPress theme. It automatically handles the creation and destruction of Swiper instances based on the window size, making it suitable for users who may not have direct control over HTML markup, such as those using WordPress.

Usage
Include the Script: Include this script in your WordPress theme. You can add it directly to your theme's functions.php file or enqueue it separately.

Call the Function: Call the setupSwiper(selector) function, passing the class selector of the element where you want to create the Swiper instance.

Example:

javascript
```bash
setupSwiper('your-class');
```

Replace 'your-class' with the class name of the HTML element where you want the Swiper to be initialized.

Dependencies
This script requires the Swiper library. Ensure that you have included the Swiper library in your WordPress project. You can include it using a CDN or by downloading it and including it in your theme.

Note

This script is designed to work within the WordPress ecosystem, allowing users who have limited control over HTML markup (such as those using WordPress themes) to easily incorporate Swiper functionality.

Ensure that the class specified as the selector ('your-class') corresponds to the container where you want to initialize the Swiper instance. The script will handle the rest, including creating the necessary HTML structure.

Contributors
Mateus Santos da Silva (sant0ss)- Main Developer

License
This project is licensed under the MIT License. See the LICENSE file for details.
