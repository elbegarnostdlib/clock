# Clock in Canvas

This project creates a clock using the HTML5 `<canvas>` element and JavaScript. The clock displays the current time using hour, minute, and second hands on a circular clock face, with additional ticks marking the hours.

## Features

- **Analog Clock**: Displays a working analog clock with three hands for hours, minutes, and seconds.
- **Canvas Rendering**: Uses the HTML5 Canvas API to draw the clock and its components.
- **Responsive Layout**: The clock adapts to the size of the canvas.

## Project Setup

1. **HTML File**: The clock is implemented using HTML, CSS, and JavaScript. The main JavaScript code is written in a `<script>` tag within the HTML.
2. **Canvas Setup**: The clock face is drawn on an HTML canvas, using JavaScript to manipulate the drawing context.

## How to Run

1. Clone the repository or copy the code to a local HTML file.
2. Open the HTML file in a web browser (works best with modern browsers).
3. The clock will automatically start and update in real-time.

## Code Explanation

- **Canvas Setup**: The canvas element is accessed via `getElementById`, and its drawing context is obtained using `getContext("2d")`.
- **Clock Drawing**: The clock face, hour ticks, and hands (for seconds, minutes, and hours) are drawn using various functions like `drawLine` and `drawRect`.
- **Time Calculation**: JavaScript's `Date` object is used to get the current time, and based on that, the angle of each clock hand is calculated.
- **Animation**: The `requestAnimationFrame` method is used to continuously update the clock every frame.

- Special thanks to @mrzaxaryan and [https://nostdlib.com](https://nostdlib.com) company for teaching and support.
- Also, many thanks to ChatGPT for guidance and assistance throughout the development.
