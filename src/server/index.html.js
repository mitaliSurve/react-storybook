export default function () {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>React Storybook</title>
        <style>
          /*
            When resizing panels, the drag event breaks if the cursor
            moves over the iframe. Add the 'dragging' class to the body
            at drag start and remove it when the drag ends.
           */
          .dragging iframe {
            pointer-events: none;
          }

          /* Styling the fuzzy search box placeholders */
          .searchBox::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            color: #ddd;
            font-size: 16px;
          }

          .searchBox::-moz-placeholder { /* Firefox 19+ */
            color: #ddd;
            font-size: 16px;
          }

          .searchBox:focus{
            border-color: #EEE !important;
          }

          .btn:hover{
            background-color: #eee
          }
        </style>
      </head>
      <body style="margin: 0;">
        <div id="root"></div>
        <script src="static/manager.bundle.js"></script>
      </body>
    </html>
  `;
}
