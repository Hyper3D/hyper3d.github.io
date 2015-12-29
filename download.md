---
layout: page
title: Download
---

Standalone JS Package
---------------------

Single-file JS bundle will be available at [GitHub](https://github.com/Hyper3D/hyper3d/releases).

Use it like this:

```html
<script type="application/javascript" src="three.min.js"></script>
<script type="application/javascript" src="hyper3d.min.js"></script>
```

npm Package
-----------

Hyper3D is not published yet, so you cannot simply do `npm install hyper3d`.
Run the following commands to use the npm version of Hyper3D in your project.

```bash
# download & build the latest version of Hyper3D
git clone https://github.com/Hyper3D/hyper3d.git
cd hyper3d
npm run-script lib

# install globally
sudo npm link

# to use in your project...
cd YOUR-PROJECT-DIR
npm link hyper3d
```

