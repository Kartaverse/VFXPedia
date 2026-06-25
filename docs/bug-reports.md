# Bug Reports

## A list of known issues in Fusion

**Please email [bugs@eyeonline.com](mailto:bugs@eyeonline.com) before posting here.**

*(Eyeon tracks emails automatically so they know when an issue has been looked at, and resolved)*

This is just a list to all users to be aware of known bugs and if possible a turnaround to fix it.

**Bug descriptions here, are provided by users, and may not be accurate, and may misrepresent the real cause of a bug.**

---

### Fusion 6.1 b697

- The Saver fails to save MOVs if the output path is relative like *Comp:..\Output*. Other formats including AVI are fine with relative paths.
- Fusion is unable to render out EXR file when the DoD is empty (OpenEXR libs require a non-empty 'data window'. An empty one would be invalid because its right edge would have to be less than its left edge). It produces the following in the Console: "OpenEXR: Error reading pixel data from image file" and stops rendering. To work around this, either use a different file format or insert this macro: [EXRSaverFix_v02](http://96.0.243.189/images/EXRSaverFix_v02.setting) somewhere before the saver. The macro adjusts the Alpha in one pixel if the pixel is transparent, so the frame isn't formally empty any more.
--(according to release notes this was taken care of in build 760)

### Fusion 6.0 b511

- The CreateBumpMap tool makes Fusion crash frequently during the rendering process. Pre-render its result to an intermediate sequence when possible.
- Using any of the tool filters in the timeline view will cause Fusion to crash. Do not use the "SEL" "CT" or tool filters within timeline. The filters do operate under the spline editor.
- When a Displace3D is applied to rotation objects like a Sphere or a Cylinder a seam appears where the object's start and end polygons meet even if the texture is a completely flat color. [No Displacement](http://96.0.243.189/images/No_Displacement.jpg), [Zero-Displacement Example](http://96.0.243.189/images/Zero-Displacement.jpg)

### Fusion 5.31 b74

- If a Saver doesn't get input picture in the beginning, it doesn't save any frames at all. This also happens in previous versions.
- If you make an instance of pEmitter and connect different image to its Style Bitmap input, it will work, but after reopening the composition you'll find it's disconnected. [Instanced_pEmitter_Bug.jpg](http://96.0.243.189/images/Instanced_pEmitter_Bug.jpg),  [Instanced_pEmitter_Bug.comp](http://96.0.243.189/images/Instanced_pEmitter_Bug.comp) - fixed in Fusion 6
- Style properties in pEmitter can't be addressed from Simple Expressions as relative names e.g. *ParticleStyle.Size*. You have to use the full proprty name instead: *pEmitter1.ParticleStyle.Size*

### Fusion 5.21 b26

- Custom Size option in Render Settings doesn't work. When it's switched on, Fusion just uses last resolution settings (Half, Third or Quarter size) instead. It happens also in all previous versions. - partially fixed in Fusion 6
- Timeline shows wrong global out values for all tracks except loaders. Numbers are more by one. [TimelineBug.gif](http://96.0.243.189/images/TimelineBug.gif) - fixed in Fusion 6

### Fusion 5.2 b26

- Using the DVE tool and rotating on the Y axis produces one-pixel wide line artifacts in the background. Also visible on the alpha. Did not happen on 5.1 b100, tested on three different setups, reproduced every time. Bug sent to Eyeon, but need confimation from others.

### Fusion 5.1 b100

- **Missing toolbars** - *Not comfirmed*- Fusion sometimes loses the toolbars.
- No solution, make a backup from your profile. Or set your Fusion.toolbar file to read only.
