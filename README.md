# grid.css
A terrible css grid framwork which for some reason supports a 10, 12, and 16 column responsive grid layout using the choice of `flex` or `inline-block` for the grid.
Still working on wide browser support while not giving a shit for the file size.

### Download  
1. Download the zip and copy the css folder
2. Create your template page
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <!-- Mobile Support -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <!-- Reduces DNS Lookups -->
    <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com/ajax/libs">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" />
    <link rel="stylesheet" href="path/to/css/grid.min.css" />
</head>
<body>
    <div class="container">
        <div class="row">
        </div>
    </div>
</body>
</html>
```
3. Link the css file you'll be using
  - `<link rel="stylesheet" href="path/to/css/grid.min.css" />` full grid framework
  - `<link rel="stylesheet" href="path/to/css/grid.flex.min.css" />` flex/flexbox only framework
  - `<link rel="stylesheet" href="path/to/css/grid.slim.min.css" />` basic framework using `inline-block` (highly suggested for playing around due to the smaller size and larger compatibility)
4. Get designing