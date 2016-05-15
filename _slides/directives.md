---
title: Angular Directives
---


# Hack your future: Angular

---

- Questions from last weeks assignment
- Walk trough angular directives

# Directives

# Why
- Reuse code
- Split code into smaller files

# Let's get started

```
<!DOCTYPE HTML>
<html ng-app="TestDirectives">
<script
    src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular.min.js"></script>
<script src="directives.js"></script>
<body>
    <hello-world></hello-world>
</body>
</html>
```

# Wait, what??

`<hello-world></hello-world>`? That's not normal html


# directives.js

```
angular.module('components', [])
    .directive('helloWorld', function() {
        return {
            restrict: 'E',
            template: '<h1>Hello World!</h1>'
        };
    });
```

animate: fade-in

- The tag says `<hello-world>` but mind the "camelCase" helloWorld in the
    directive.
- Restrict? You can use this to restrict how the element can be loaded.
    - `E` Allow to load as Element only
    - `A` Allow to load as Attribute only
    - `EA`  Allow to load as either Element or Attribute


# And lets link it to our app

```
angular.module('testDirectives', ['components']);
```

# Refresh

# All HTML in a string, that gets messy

animate: fade-in

- Make a folder called partials
- We make a file called partials/hello.html
- In that file we put the same HTML like we did before
- And then we link it to the  directive with the `templateUrl` attribute

## Set the templateUrl attribute

animate: false

```
angular.module('components', [])
    .directive('helloWorld', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/hello.html'
        };
    });
```

# Hello Richard

```
<!-- partials/hello.html -->
<h1>Hello { { name }}</h1>
```

animate: fade-in

- But then without the space in between the curly brackets. My presentation tool barfed at it.

# Add the attribute

`<hello-world name="Richard"></hello-world>`

# Refresh

# Whoops, we didn't bind the attribute it yet

```
angular.module('components', [])
    .directive('helloWorld', function() {
        return {
            restrict: 'E',
            scope: {
                name: '@'
            },
            templateUrl: 'partials/hello.html'
        };
    });
```

# Refresh!

# Next level: add controllers to your directives

```
angular.module('components', [])
    .directive('helloWorld', function() {
        return {
            restrict: 'E',
            scope: {
                name: '@'
            },
            templateUrl: 'partials/hello.html',
                $scope.changeName = function() {
                    $scope.name = "I clicked this";
                };
            }
        };
    });
```

# And make it clickable from the element

`<hello-world ng-click="changeName()"></hello-world>`

# Refresh!


# Next steps
- Include one directive into another
- Get the content of your directive into your template with ng-include
