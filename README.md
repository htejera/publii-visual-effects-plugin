
<div align="center">
  <img src="https://raw.githubusercontent.com/htejera/publii-visual-effects-plugin/9445c66f42f56336477f9b742a21339c0086107f/thumbnail.svg" width= "40%" height="40%" alt="Marquee Feed Plugin for Publii">
</div>


# Visual Effects Plugin for Publii
The Visual Effects Plugin for [Publii](https://getpublii.com) enhances your website with a variety of visual enhancements that users can apply to improve accessibility, readability, and overall user experience. This versatile tool offers a range of effects from color adjustments to text transformations.

![Plugin demo](https://github.com/htejera/publii-visual-effects-plugin/blob/main/visual-effects.gif?raw=true)


[Open demo](https://marqueeplugin-technews.surge.sh/how-to-breed-villagers-in-minecraft.html)

## Features

- **Diverse Visual Effects**: Users can choose from a selection of visual effects to customize the website's appearance according to their preferences.
- **Persistent Effects Across Pages**: Selected effects are saved and persist across different pages to ensure a consistent user experience.
- **Internationalization Support**: Interface elements support multiple languages, broadening accessibility and usability for a global audience.

## Available Visual Effects

- **Filter Grayscale**: Changes the page’s colors to grayscale, offering a simplified and distraction-free viewing experience.
- **Filter Intensify**: Adds saturation and contrast to the images on the site, making visuals more vibrant and engaging.
- **Filter Invert**: Inverts the colors of the site, providing a high-contrast visual that can be easier to read for some users.
- **Filter Sepia**: Applies a reddish-brown color scheme to the page, creating a warm and nostalgic look.
- **Fonts Monospace**: Forces the text on the site to be displayed in a monospace font, enhancing readability and focus.
- **Transitions Forced**: Makes page transitions more prominent, adding a dynamic and interactive feel to the website.
- **Transitions Removed**: Disables transitions, resulting in a more static and stable user experience.
- **Hide Images**: Hides all images on the site, focusing attention on textual content and reducing distractions.

## Installation

1. Download the plugin from the [Release page](https://github.com/htejera/publii-visual-effects-plugin/releases/tag/1.0.0).
2. In Publii, go to "Plugins" > "Add new" and select the downloaded ZIP file
3. Activate the plugin.
4. Go to the "Plugins" section in the Publii app and enable the "Visual Effect Plugin".

## Configuration

Configure the plugin through the Publii interface to set up:

- **Parent Element Selector**: Define the CSS selector for the parent element where the visual effects toolbar will be inserted.
- **Language**: Choose the language for the visual effects labels to match your audience's preferences.
- **Effect Customization**: Adjust custom values for specific effects like grayscale, invert, and sepia intensity to tailor the visual experience to your site's design.

![Plugin configuration](https://github.com/htejera/publii-visual-effects-plugin/blob/main/plugin-configuration.jpg?raw=true)

## Usage

A combo will appear on your website, allowing visitors to select and apply their preferred visual effect. This effect will apply to the current page and persist as the user navigates through the site.

## Supported Languages

English, Spanish, French, German, Italian, and Portuguese are currently supported. You can select the desired language for the plugin's interface in the settings.

## Customization

You can customize the appearance of the visual effects combo to better match your website's design. This is achieved by overriding the default styles for the following CSS classes:

- **.visual-effects-toolbar**: This class targets the container of the visual effects toolbar. Use it to modify the toolbar's overall appearance, such as its background color, border, and positioning.

- **.visual-effects-toolbar select**: Targets the select dropdown within the toolbar. You can customize the dropdown's appearance, including fonts, colors, and padding, to ensure it fits seamlessly with your site's design.

- **.visual-effects-toolbar select:hover**: This class applies to the select dropdown when hovered over. It allows you to set hover-specific styles, such as changes in color or cursor style, to improve user interaction and feedback.

## Support

For support, feature requests, or to report a bug, please visit the [GitHub issues page](https://github.com/htejera/publii-marquee-feed-plugin/issues).

## License

This plugin is released under the MIT License.



