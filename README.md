#jQuery fatNav

Chubby fullscreen menu with nice hamburger toggle

##Installation

Install via bower:

```sh
bower install jquery-fatNav
```

Or you can add jquery.fatNav.css and jquery.fatNav.js manually to your project

##Usage

Create the menu in your HTML:

``` html
<div class="fat-nav">
    <div class="fat-nav__wrapper">
        <ul>
            <li><a href="#">Menu item</a></li>
            <li><a href="#">Menu item</a></li>
            <li><a href="#">Menu item</a></li>
            <li><a href="#">Menu item</a></li>
        </ul>
    </div>
</div>
```

Call the javascript function:

``` javascript
$.fatNav();
```

##Customizing hamburger color

Default state:

``` css
.hamburger__icon, 
.hamburger__icon:before, 
.hamburger__icon:after {
    background-color: red;
}
```

Close button state:

``` css
.active .hamburger__icon:before, 
.active .hamburger__icon:after {
    background-color: green;
}
```

##Build

```sh
git clone https://github.com/Glitchbone/jquery-fatNav.git my_project
npm install
grunt
```

##Author

**Adrien Glitchbone**

+ [https://twitter.com/glitchbone](https://twitter.com/glitchbone)
+ [http://github.com/Glitchbone](http://github.com/Glitchbone)

##License

jQuery fatNav is available under the MIT license. See the [LICENSE](LICENSE) file for more information.  