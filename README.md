# :pencil: Content Editor

Editing content without the use of the **inspector** is somewhat impossible. This small jQuery plugin allows you to edit content on your website easily.

- Easy to install.
- Less than `5kb` minified.
- Utilises the `contenteditble` attribute.
- **[View demo site](https://sts-ryan-holton.github.io/content-editor/)**

### :rotating_light: Browser Support

Our plugin uses the `contenteditble` attribute. **This appears to be widely supported across browsers** according to [Can I Use](https://caniuse.com/#feat=contenteditable), however different browsers may struggle in some situations.

## :wrench: Install

1. Download the jQuery Content Editor plugin through [NPM](https://www.npmjs.com/) or by downloading through our latest [release.](https://github.com/sts-ryan-holton/content-editor/releases). Ensure to load jQuery before loading our plugin. We recommen the slim build of jQuery.

2. Once installed, initialise the plugin before the closing `</body>` tag:

```
<script>
  $(function() {
    $('#editable-area').contentEditor();
  });
</script>
```

3. You're all set! Take a look at our available plugin [options](https://sts-ryan-holton.github.io/content-editor/#options)

## :rocket: Plugin Options

We have a range of useful [plugin options](https://sts-ryan-holton.github.io/content-editor/#options) that you can use to get started.

```
<script>
  $(function() {
    $('#editable-area').contentEditor({
      enableUrlQuery:   false,              // 'boolean' Edit content on the page when the URL query is enabled.
      urlQuery:         'contentEditable',  // 'string' Specify query URL for editing content. Specify 'true' as a value.
      removeFocus:      false               // 'boolean' remove focusable outline from editable content (not recommended).
    });
  });
</script>
```

## :wrench: Issues

Submit a new relevant issue here: https://github.com/sts-ryan-holton/content-editor/issues/new?template=bug_report.md

**:warning: Please be sure to search open issues first.**

## Feature Requests

If you have a feature request, please submit one here: https://github.com/sts-ryan-holton/content-editor/issues/new?template=feature_request.md

## License

This project is owned, maintained and developed by: https://github.com/sts-ryan-holton/

This is an open source project.
