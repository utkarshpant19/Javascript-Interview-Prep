- Handling Events in JS

```javascript
document.getElementById("telephone").onclick = function () {
  alert("You clicked");
};
```

- Don't use above approach to handle `click` events as it does not provide `Event Propagation` features

```javascript
document.getElementById("telephone").addEventListener(
  "click",
  function ($event) {
    console.log($event);
  },
  false
);
```

- The third parameter above is for Event Propogation, By default it is false

## Event Bubbling and Capturing

- `Event Bubbling (Bottom to Top):`: Event propagates from bottom to top
- `Event Capturing (Top to Bottom ):`: Event propagates from top to bottom

```html
<ul id="images">
  <li>
    <img
      src="https://images.pexels.com/photos/19548914/pexels-photo-19548914.jpeg?w=200&h=200&fit=crop&dpr=1"
      id="escalator"
      alt="Escalator Image"
    />
  </li>
  <li>
    <img
      src=" https://images.pexels.com/photos/19548916/pexels-photo-19548916.jpeg?w=200&h=200&fit=crop&dpr=1"
      id="christmas-tree"
      alt="Christmas Tree"
    />
  </li>
  <li>
    <img
      src="https://images.pexels.com/photos/19414249/pexels-photo-19414249.jpeg?w=200&h=200&fit=crop&dpr=1"
      id="telephone"
      alt="Telephone"
    />
  </li>
  <li>
    <a style="color: #fff;" href="http://google.com">Google</a>
  </li>
</ul>
```

```javascript
document.getElementById('telephone').addEventListener('click', function($event){
console.log('Telephone Clicked`)
},  true)
```
