# Image App

Image App is a simple JavaScript application that allows users to upload images and optimize them for better performance, particularly for Google Lighthouse scores. This project utilizes the imagemin library to compress images efficiently.

## Project Structure

```
image-app
├── src
│   ├── js
│   │   └── main.js          # Main JavaScript code for handling image uploads and optimization
│   ├── images
│   │   └── .gitkeep         # Directory for user-uploaded images
│   └── optimized
│       └── .gitkeep         # Directory for storing optimized images
├── package.json              # NPM configuration file with dependencies and scripts
├── imagemin.config.js        # Configuration settings for imagemin
├── gulpfile.js               # Gulp tasks for image optimization
├── .gitignore                # Files and directories to ignore in version control
└── README.md                 # Documentation for the project
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/EduardoPech/image-app.git
   cd image-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Place your images in the `src/images` directory.
2. Run the optimization process using Gulp:
   ```
   gulp optimize
   ```
3. The optimized images will be saved in the `src/optimized` directory.

## Configuration

You can customize the image optimization settings in the `imagemin.config.js` file. This file allows you to specify different plugins and options for the imagemin library.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
