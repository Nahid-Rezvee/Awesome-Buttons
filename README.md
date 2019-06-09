# Awesome Buttons
A simple easy to use-ready to go button library for web development.

## How To
* Download the js and the css files. 
* Add it to your index.html.
```html
<head>
    ...
    <link href="path_to_file/mtrl-buttons.css" rel="stylesheet">
</head>
<body>
    ...
    <script src="path_to_file/mtrl-buttons.js"></script>
</body>
```
* Click any button you want to use.
* Copy code.
* Paste on your html.
* Thats it. Use it wherever you want. Enjoy!

> For disabled buttons add ***_mtrl-disabled_*** class on the button.

## Theming
### Color
On top of the _**mtrl-buttons.css**_ file, you will find a css class selector declaring several css variables.
```css
/* ==================== Variables ======================= */
.mtrl-btn {
    --primary-color: #766dff;
    --accent-color: #86e8ff;
    --warning-color: #ffc000;
    --danger-color: #FE4A49;
    --dark-color: #39393A;
    --light-color: #fff;

    --button-text-color: var(--dark-color);
    --button-border-color: var(--dark-color);
    --button-background-color: var(--light-color);

    --ripple-effect-color: rgb(161, 161, 161);

    --disabled-btn-text-color: rgba(0, 0, 0, .26);
    --disabled-btn-border-color: rgba(0, 0, 0, .26);
    --disabled-btn-background-color: var(--light-color);

    --font: Raleway;
    --font-weight: 500;
    --font-size: 14px;
    --line-height: 28px;
}
```
**Tweak the color variables to match your own color palette.**
> You can get preview of your color palette on the [Awesome Buttons]()

### Icon
To change icon, change the icon name inside "<i class="material-icons">**_here_**</i>"
```html
<button class="mtrl-btn mtrl-icon-circle mtrl-btn-ripple mtrl-primary-fill"> 
    <i class="material-icons">done</i> 
</button>
<button class="mtrl-btn mtrl-icon-text mtrl-btn-ripple mtrl-primary-fill"> 
    <i class="material-icons">check_circle_outline</i>Button 
</button>
```
Google's [Material Icons](https://material.io/tools/icons) have been used. You will find all the icon listed [here](https://material.io/tools/icons).

# Licence
MIT