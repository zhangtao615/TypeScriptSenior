"use strict";
var Components;
(function (Components) {
    var Header = /** @class */ (function () {
        function Header() {
            var header = document.createElement('h1');
            header.innerHTML = 'This is Header';
            document.body.appendChild(header);
        }
        return Header;
    }());
    Components.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var content = document.createElement('div');
            content.innerHTML = 'This is content';
            document.body.appendChild(content);
        }
        return Content;
    }());
    Components.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var footer = document.createElement('div');
            footer.innerHTML = 'This is footer';
            document.body.appendChild(footer);
        }
        return Footer;
    }());
    Components.Footer = Footer;
})(Components || (Components = {}));
//namespace 命名空间， 类似于模块化开发，减少全局变量 
///<reference path='./Components.ts'/>
var Home;
(function (Home) {
    var Page = /** @class */ (function () {
        function Page() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
