# Wishlist/3D

## 3D

- I'd love to see some kind of an aid for building pan-and-tile type backdrops, whether it is a full BG or just a sky replacement.
  - [andromeda_girl](index511a.html?title=User:Andromeda_girl)
-- Any examples?  I can see texture baking (from projection to UV) as an obvious one, but anything other tools you would need?
--Chad--- take a look at the nuke tutorial that shows pan and tile backdrops- there is a feature for depth merging [for lack of a better term] that blends the images at their seams. pretty nice, actually.---- yeah, it blends intersecting polygons within a user-defined distance instead of creating a hard edge. nice feature.
--Tilt14:57, 21 August 2010 (EDT)----- Would 2D tools operating in the gradient domain be sufficient?  We don't have much control over how blending is done in the 3Rn as users.
  - Chad11:46, 17 August 2011 (EDT)
- Add new Duplication types in the [Duplicate](indexdc06.html?title=Eyeon:Manual/Tool_Reference/3D/Duplicate_3D) tool such as linear or sphere or matrix types and duplicate to path or to object.
	-- Daniel Is there another app that does "matrix" and "to object", as an example? Also, you can useBender3D(with Group Objects turned on) to bend the line of duplicate objects.
- Cameras transition so you can morph between two cameras such that front and back cameras you can morph between it.
-- I don't see why this can't be done now.  You just blend the transformations and other settings together.
  - Chad10:09, 26 May 2010 (EDT)
- Merge 3D - footage directly plugged into Merge 3D
-- Without an image plane or some other object to generate the fragment shader requests...  I'm not following this one.
  - Chad10:09, 26 May 2010 (EDT)
- 3D WirelessLink fuse
	-- add subj or something similar to 2D WirelessLink fuse  - superB! feature.
	-- rocobop22 April 2011
	- see request somewhere else about making this an input attribute so you decide which links are hidden in the flow instead of inserting wireless tools.

### Interface

- the pipe routers are great but need to expand in size a good deal so you have something to grab when you mouse over them.  they are un-grab-able when the flow view is zoomed out even just a small amount. then you could position them without having to zoom in significantly, saving you time and allowing you to just reposition it on the go.
- the lights could benefit from a on-screen widget that indicates their falloff point which is not exactly perceptible when you adjust a light. only by seeing the render output can you see where is sort of is, and even then it is still guesswork. something like a dashed line sphere surrounding a pointlight [much like the rotate widget appears] or in the case of a more directional-type light, it could be a dashed circle that appears at the point where it fades to nothing, and is sized to also indicate how wide and high it's range is.
But none of the light types actually fades to nothing.  The intensity changes continuously over the distance.  Maybe the lights SHOULD have a min/max distance?  At least then we could get lighting setups that match what say, 3ds max makes.  Even so, the premise that you should be able to evaluate lighting levels WITHOUT looking at the render seems a bit odd.  I don't see how user are supposed to make sense of their lighting even with a preview control.
  - Chad17:15, 12 August 2013 (EDT)
- Add 3D section in the preferences with all of the options possible.
  - [Ata](indexce7e.html?title=User:Ata) 19:43, 7 July 2009 (EDT)
- The Material Viewer seems to default to Sphere.  If I change it to Plane, then change the Viewer to something else, then change it back to a Material Viewer, it resets to a Sphere.  It would be nice if the Material Viewer remembered this setting.
  - [Chad](indexfe57.html?title=User:Chad) 15:57, 14 July 2009 (EDT)
- Custom objects for the Material Viewer. Sphere/Plane/Cylinder/etc don't cover all the bases for me, especially when I need to see something that needs concave surfaces.  Even in cases where I DO want one of those shapes, the UVW mapping may not be ideal.
  - [Chad](indexfe57.html?title=User:Chad) 15:57, 14 July 2009 (EDT)
- This is sort of UI related, but I'd like a "Save Image..." option for the 3D viewer just like we have for the 2D ones.  The 2D one is just a hidden script/macro right?  Adds a SV, renders one frame, deletes the SV?  So I'm not sure if you would need to add a 3Rn, or if you could just get the buffer back from OpenGL and write that out directly.
  - [Chad](indexfe57.html?title=User:Chad) 11:03, 30 July 2009 (EDT)
- RoI for 3D views.  Ideally, only shade inside the RoI window, but draw the grid, gizmos, etc on the entire viewer.
  - [Chad](indexfe57.html?title=User:Chad) 10:09, 26 May 2010 (EDT)
- Native datatypes for 3D.  Point works fine for 2D, but we need something equivalent for 3D.  The UI control could be as simple as adding a 3rd input box to the what we have for the Point.  A Matrix input could have a attibute that toggles between showing a buncha boxes ala the kernel UI or showing something like the "Right-click here for shape animation". 
  - [Chad](indexfe57.html?title=User:Chad) 14:06, 13 October 2010 (EDT)
- A warning label in the Renderer3D (OpenGL mode) when the combination of image size and supersampling rate exceeds the texture size that the graphics card can handle without taking a performance hit.
  - [Tilt](index95f9.html?title=User:Tilt) 11:43, 27 January 2011 (EST)
Is there a performance hit?  I'm not seeing any.  Rendering 10x the max texture size only takes 10x as long plus a few dozen milliseconds.
  - Chad11:46, 17 August 2011 (EDT)
- Option for Quad view to link the view pan/zoom.  So if you pan the front view to the left, the top view should also pan to keep the top aligned.  If you pan the front view up and left, pan both the top and left.  If you zoom, do the same on the other views.  Right now, with no means of explicitly controlling the views, you normally end up eyeballing it.
  - [Chad](indexfe57.html?title=User:Chad) 11:29, 30 March 2011 (EDT)
- Option for Quad view to use specially named cameras for the views.  Not unlike the automagical naming for the cubemap inputs, if we have a camera called "Front" or "FrontCam" or whatever (you can predefine these, I don't care) whenever the "front" view is needed, that camera is used instead.
  - [Chad](indexfe57.html?title=User:Chad) 12:03, 13 April 2011 (EDT)
- It would be useful if the pick button for 3D transforms could snap to important points (vertices, pivots, corners of an image plane, ....) when a modifier key (e.g. shift) is held.
  - [Tilt](index95f9.html?title=User:Tilt) 14:05, 10 June 2011 (EDT)
- When controls are hidden (ctrl+K), the bounding boxes of selected objects should also be hidden.  Even though we can't interact with them, they mess up our ability to look at the image in the viewer just like the controls do.
  - [Chad](indexfe57.html?title=User:Chad) 12:35, 17 June 2011 (EDT)
- Also about ctrl+K: there's no icon beneath the viewport. It might even be useful to not only have the button like in 2D but also a flyout to check/uncheck the visibility of cameras, point clouds, lights...
  - [Tilt](index95f9.html?title=User:Tilt) 14:08, 8 August 2013 (EDT)
- Alternative mouse controls for 3D viewers that mimic Maya, Max or Lightwave. For users that have to switch between Fusion and 3D apps a lot.
  - [Tilt](index95f9.html?title=User:Tilt) 05:27, 19 February 2012 (EST)
- Show 3D path of objects. Nuke draws them in two alternating colors so you can judge how far an object is travelling per frame.
	--[Tilt](index95f9.html?title=User:Tilt) 05:41, 17 March 2012 (EDT)
- [![](images/thumb/3d_grid_fusion_nuke.png/180px-3d_grid_fusion_nuke.png)](index9511.html?title=File:3d_grid_fusion_nuke.png)[![](skins/common/images/magnify-clip.png)](index9511.html?title=File:3d_grid_fusion_nuke.png) It would be helpful to display the grid with increasing dimensions so there's always a reference point in the viewers, even if scenes exceed the current grid size (sometimes stuff that gets exported from 3D ranges in the 100s or 1000s, unit-wise).  And maybe divide the grid by 10 instead of 8 for us metric-system-dudes?
	--[Tilt](index95f9.html?title=User:Tilt)
- Make the "Copy PoV to..." command account for any transformations between the viewport's camera and the currently viewed node (that would allow me to bake a camera's position to global space. currently, when looking through a camera instead of the perspective view, the PoV that gets copied is just the camera's local translation/rotation).
	--[Tilt](index95f9.html?title=User:Tilt) 14:08, 8 August 2013 (EDT)

### Cameras

- Rolling (local Z) of cameras in the viewport from the view of the camera.  (Or perspective views *at all*).
  - [Chad](indexfe57.html?title=User:Chad)
- Zooming (and panning) of camera views without changing the camera.  While viewing through a camera, the zoom controls are disabled.  I'd like to be able to zoom in or out to see more or less of my scene without having to unlock or otherwise accidentally muck up my camera.  This becomes an issue with sterescopic views as well when you're trying to judge camera separation and convergence and you don't have a 60' monitor to work on.  Setting zoom to 100% or Fit would set the view back to the correct camera FoV.  This viewport zoom would also be ignored by default for 3Rn.
  - [Chad](indexfe57.html?title=User:Chad)
- I concur, could really use this today.
  - Chad10:38, 5 April 2013 (EDT)
- A switch for Camera and Projector that freezes the position and rotation at a user-defined frame. This would allow you to keep the animation splines and non-destructively create projection setups.
  - [Tilt](index95f9.html?title=User:Tilt) 13:57, 6 October 2010 (EDT)
- Wouldn't this be generally solved by a TimeStretcher3D or TimeSpeed3D?
  - Chad16:32, 6 October 2010 (EDT)- Maybe. But you could only freeze a camera node, you wouldn't be able to turn it into a projector. So you'd still have to instance/copy the camera and insert the timestretcher3D. If that one is animated by default like the regular time stretcher, you'd have to take yet another step to achieve what could be just a checkbox. Hm... But you could split off several timestretchers from just one tool. I vote for both :-)
  - Tilt02:45, 7 October 2010 (EDT)
- The problem with the checkbox (and slider) is that it would only work for cameras.  If you wanted lights or geometry or materials to "freeze" or just be retimed, you'd need something else.  Or if you wanted to freeze a camera more than once.  I'm thinking the opposite of Duplicate3D.
  - Chad10:15, 7 October 2010 (EDT)
- yeah, such a tool makes sense. Projecting from one frame of a 3D track is quite a common use case for all vfx work I have to do nowadays that I would be happy with a solution just for cameras.
  - Tilt03:08, 8 October 2010 (EDT)
- If the input for a 3D viewer has a valid camera3D, set that camera as the view.  If there are multiple cameras, use the first alphabetically?  It's annoying to have to keep changing the view from Perspective to Camera every time I put a 3D viewer up.
  - [Chad](indexfe57.html?title=User:Chad) 12:41, 11 July 2011 (EDT)
-- Or just do this when the previous view was also a camera? I usually use the perspective view since my camera's imported and locked. I rarely look through the camera (in a 3D view)
  - Tilt16:16, 12 July 2011 (EDT)
- Clicking an object opens its tool control panel, but this doesn't work for cameras or projectors where you can only click their transform widget. Maybe a double-click could be implemented for this, so it's still possible to drag them without opening their control panels.
  - [Tilt](index95f9.html?title=User:Tilt) 12:23, 30 September 2011 (EDT)
- Make "Fit selected" work for cameras, centering the perspective view around the camera icon.
  - [Tilt](index95f9.html?title=User:Tilt) 04:51, 19 February 2012 (EST)
- An alternative mode of moving a camera that works like the perspective view (orbiting around a point in space instead of rotating its direction). [See this Pigsfly thread.](http://www.pigsfly.com/forums/index.php?showtopic=7054&hl=orbit&st=0)
  - [Tilt](index95f9.html?title=User:Tilt) 05:45, 19 February 2012 (EST)
And a way to place the invisible pivot for this orbit motion anywhere, not just at the center of an object. What about... if you press and hold "C" for more than a few milliseconds, the cursor turns into a position picker that allows you to define a pivot anywhere on an object's surface (not in empty space, but that wouldn't be necessary). It's like picking from position pass. Using this, you could easily put an image plane in front of a projection camera, define one spot on the plane (for example a corner of a room/building) as the pivot and orbit the projection around this point until everything lines up. When I did the projection tutorial, I was frustrated how hard it is to line up a camera with geometry just by panning and rotating the camera because once you have aligned one feature, every move you make will break your previous alignment effort.see thread on pigsflywhich also links to other apps that have found what I think are intuitive ways to align cameras.
  - Tilt05:45, 19 February 2012 (EST)- The Aperture Width/Height is clamped at 0.1/3.0.  Would be nice if it allowed for a broader range of camera sizes, especially with plugin renderers that actually use this for DoF.
  - [Chad](indexfe57.html?title=User:Chad) 10:38, 5 April 2013 (EDT)
- Tilt/Shift for cameras. [http://en.wikipedia.org/wiki/Perspective_control_lens](http://en.wikipedia.org/wiki/Perspective_control_lens)[Lightwolf](index789b-2.html?title=User:Lightwolf) 07:27, 12 July 2013 (EDT)
- Color the camera picture in the viewport according to the Camera3D's tool color. That would make setups with several cameras/projectors easier to navigate.
  - [Tilt](index95f9.html?title=User:Tilt) 14:08, 8 August 2013 (EDT)
- Tools that select a camera to use, like Displace3D or DisparityToZ, don't let you choose which camera to use if they are a built in stereo pair.  It would be nice if when a stereo camera is supplied an option to choose which eye is given to the user.
  - [Chad](indexfe57.html?title=User:Chad) 09:37, 8 June 2014 (EDT)

### Lights
- Allow Spotlights to have Cone/Penumbra angles of ~180 degrees.  The current clamp of 90 (plus 20 for the penumbra) makes it hard to do very close wide open lighting with shadows.
  - [Chad](indexfe57.html?title=User:Chad) 20:08, 26 June 2013 (EDT)
- Just as we can assign a color to the Locator3D, I'd like to be able to assign a color to a Camera3D or a light.  When you have dozens of cameras in a scene, it gets REALLY hard to tell them apart. Red/Cyan for stereo cameras is pretty obvious use, as is showing the color of a light based on some variation of color*intensity.
  - [Chad](indexfe57.html?title=User:Chad) 13:23, 30 March 2011 (EDT)

### Import, Export

- A great thing to import and work with animated meshes (as a compositor, not an animator or a modeler of course) would be the possibility to import "point cache" files (in 3dsmax language), or frame by frame mesh animation files, which would be the fastest solution to do so, and maybe the easiest to integrate in fusion, I think.
- The default fbx exporter from Lightwave [and likely other applications] includes mesh deformations in the fbx file without the need for an fbx sequence. The UV mapping data is kept intact for all your surfacing needs to remain in place. all that is needed is for Fusion's fbx importer to include that data [right now it 'ignores' it]. I am dying for this feature and have been begging for a long time for it... unless a more elegant method for accomplishing the same thing can be obtained ;)-- Would be slower to do the frame by frame, but would allow you to have topology changing meshes.  We've implemented the Realflow .bin i/o in 3ds max for this purpose, and it could be used in Fusion as well.  As for PointCache, ADSK has published the format for other applications to use, so it wouldn't be that hard.  Finally, if the Displace 3D could displace to arbitrary normals, you could export your mesh deformations as image sequences from your 3D app.
  - Chad-- Do these intool scripts solve the task:Baked Animations,Obj Sequence Import?
  - Gringo06:58, 25 November 2009 (EST)-- No, the caching behaviour is wacky.
  - Chad12:48, 25 November 2009 (EST)- Import file for bgeo sequence(houdini or other Application)
- FBX Mesh support for TexCoord1, TexCoord2, and Vertex Color.  The Shape 3D has all these (though they do not vary), but I'm getting zeros for FBX meshes.  Also, the TangentU and TangentV seem to be wrong, they don't interpolate over the faces, but TexCoord0 does.  So the bump map gets applied correctly, but it doesn't return the right perturbed normals.
  - [Chad](indexfe57.html?title=User:Chad) 18:05, 14 April 2011 (EDT)
- Make each 3D tool remember the file and directory that was used for the "Import Transform" button (maybe a hidden input control?). Also, remember the selected options from the import popup in a way that is accessible by scripts. This would allow the file requester to pop up in the right place if you need to re-import the transformation data. It would also allow scripts to read this and - if there was such a function - to trigger the import without user-feedback. At least, let's put the file name that was used to import the transformation data into the comments field so there is a record of where, for example, a camera came from.
  - [Tilt](index95f9.html?title=User:Tilt) 15:18, 11 August 2011 (EDT)
- A progress bar while an obj or fbx is being loaded by the FBXMesh3D tool. Right now it freezes the interface and you have no idea how long it will take to complete the process.
  - [Tilt](index95f9.html?title=User:Tilt) 12:06, 15 August 2011 (EDT)
- FBXExporter option to save stereoscopic camera as two cameras, not one.
  - [Chad](indexfe57.html?title=User:Chad) 14:17, 19 November 2013 (EST)

### Creating, Editing 3D Objects

- 3d stroke such as Trapcode stroke but in full 3d.
--Ayur bThis is easy in theory, just publish some points on a polyline and attach them to several locator3d.-- camera distance output from locator3d?--i wish real 3d stroke.
- Simple editing 3d shapes and new blend mode such warp
	-- Daniel: We have no plans to support 3D vertex editing, but 5.1 hasnewtoolsfor creating and warping shapes. 
	-- Chad10:30, 23 January 2007 (Central Standard Time) I agree that vertex editing would be near useless, I WOULD like the ability to transform vertices in 3D with a dataset, either something like a Point Cache file or 3D displacement map.  I could generate either of those in my 3D package of choice and send them to Fusion so that my FBX would deform over time to match my rendered output referenced by my LD.  '
- Mesh editing would allow creation of matched objects for camera texture projections. It would be nice to do this in the package, Fusion being 3d and all.
- FBX Vertex move in a 3D space for fast mesh editing.
	-- Izyk 19:06, 15 December 2006 (Central Standard Time) : Why? Do we really want to be modeling in a compositor? Can you provide an example where this would be a good workflow? Maybe I just don't understand what you have in mind.
	--Chad1 0:42, 16 January 2007 (Central Standard Time) I would like this too, but as an expansion of Bender3D or Displace3D.  Allow a dataset to be used, like PointCache or some other format, including images, where RGB can be converted to either an absolute or relative transform of the vertices.
	--Daniel Is this not basically whatDisplace3Ddoes already, using images as the dataset? What further features would you want added?--ChadDisplace 3D can only displace along vertex normal or to camera vector.  I want to displace in object space (XYZ) or tangent space (UVW).  We feed it 4 channels, might as well use them for something.  RGBA could be used as normal+displace map.  That would be a good start.  An absolute object space transform, where the RGB values are converted to explicit locations in XYZ relative to pivot would be excellent as well.
	-- Would be also nice to displace vertices in the World space (I could use that when I was creating a tornado in Fusion). 
	-- Gringo08:29, 5 May 2010 (EDT)--At least XYZ world space displacement is available in current versions of Fusion
	-- But the normals aren't recalculated / faces are unwelded. 
	-- Chad17:46, 15 April 2011 (EDT)- Move/Modify/Randomize Points of 3DShapes
- Split/Subdivide Polygons
- Creating and Editing 3D-Objects(plain) by creating/selecting/moving Points/Polygons (very basic polygon modelling)
- Since many modeling-related feature requests are probably based on the need to create simple geometry for camera projection, maybe this is alleviated by having some kind of method that aligns image planes in 3D space by selecting 3 points. Something like the picker tool which doesn't copy rotation but rather orients an Image Plane so that it includes the two previously selected points (in addition to its center). 
	--[Tilt](index95f9.html?title=User:Tilt) 15:28, 15 April 2011 (EDT)
- Also, a better interface to modify the box primitive would be welcome. Right now, you can only adjust its center and then fiddle with the xyz-size. It would be easier to align a cube with a projection if one could adjust the cube's size by dragging its vertices or edges. No distortion and vertex editing, just adjusting the shape by dragging the corners. 
-- 15:28, 15 April 2011 (EDT)
- 3d Lattice transform (think of Grid Warp in 3d). This would alleviate the lack of modeling tools in Fusion and allows building rough geometry for texture projections. It will also make possible new kind of effects, like re-shaping imported 3d data to better match 2d elements in scene. This would be very usable tool for 3d compositing.
- The patent expired last year, so this would be a really nice thing to implement using found code. http://www.patentmonkey.com/PM/patentid/4821214.aspx
	-- Chad
  - It was patented? I'm flabbergasted. Anyway, it has been standard in Blender from the beginning (and in other 3d packages too, I presume). Another useful 3d deformation would be Curve deform, in which object is deformed along curve in 3d space (skewed and stretched according to curve angles).- 3d boolean operator tool for cutting and combining objects or scenes.
- 3D Patch or a Nurbs surface with (animated) CVs, like Flame has for a looong time. Great for all sorts of things (backgrounds/environments, screens etc). I'd like to have a bit more control on the shape of the 3D object, but NOT a 3D modeling type of interaction with points/faces 
	--[Misha](index9e9f.html?title=User:Misha&action=edit&redlink=1) 08:46, 8 February 2007 (Central Standard Time)
	-- I think this was(maybe still is) a plugin for Fusion 
	- yup,there it is at the Eyeon website.Although I think this hasn't been updated in ages. Is that what you might be after? 
	-- ShadowMaker SdR09:39, 8 February 2007 (Central Standard Time)
  - Well that's was a loooong time ago. Think of OGL accelerated surface with editable CVs, misha
	-- SalaTar17:26, 15 March 2007 (Central Daylight Time) Forge no longer works with Fusion , you cant grab its control sufaces- new 3d bevel and extrude tool
- More details, maybe? 
	--Hevonen - 3DBevel (e.g.: possibility to Bevel the entire object or a certain area(polygon surface) of a 3DShape)
- 3DExtrusion (e.g.: possibility to Extrude the entire object or a certain area(polygon surface) of a 3DShape)
- 3D Splines as a path for extrusions (e.g: doing a complex 3D pipe-work; u can do this with bender but very tricky)
- And another thing that would work well with that would be a sort of "mesh smoothing" node, based on a generic smoothing algorythm, in order to match those used in maya/xsi/3ds... It would then be possible to import nearly whatever moves in 3D, and then work with particles, create masks and so, directly in fusion.
- 3D Mirror/Merge function (e.g: to have a seamless front and back on a displaced 3DShape(with same amount of subdivisions and size))
Transform3D (3Xf) does this.  
	-- Chad well - Transform3D does only transform the object, but it does not physical merge 2 objects. Give you a short example: Create a Shape3D(Image Type) (500 x/y subdivisions) with an image of letter 'D'; Displace3D it with a slight blur of the same image of 'D'; use Duplicate3D(2 copies, Scale -1, Z-Rot: 180deg); now u have front and backside, but the edges will not aligned perfectly. So therefore a merge or mirror function or a function where you can adjust the cutting line would be a top notch to have, because now you are able to model everything from a displacement map also to have both sides for a full 360deg. movement.Not really, as the displacement only operates from the vertex normal.  None of the tools in Fusion allow for any change in the ratio of faces to vertices, so I don't expect that to change for just a mirror tool.  You'd need some general modeling functionality that I don't expect to happen immediately.  
		--Chad - Creating 3D-Objects(plain) of a 2D Polyline Mask
- Possibility to create 3D objects from 2D polygon masks by revolution or extrusion along an axis.
  - [Gringo](index27a2.html?title=User:Gringo) 07:19, 25 November 2009 (EST)
- Possibility to convert selected points of a PointCloud3D to s set of separate Locators3D directly. It's often needed when you want to connect 2D points to 3D-tracked features. 
	--[Gringo](index27a2.html?title=User:Gringo) 10:59, 18 April 2012 (EDT)
- Locator3D should output not only 2D coordinates, but also 2D size multiplier in case you want to connect a Polyline's position and scale to the 3D-tracked data.
 	--[Gringo](index27a2.html?title=User:Gringo) 10:59, 18 April 2012 (EDT)
- ImagePlane3D and Shape3D objects are always created so their normal vector points along the Z axis. For image planes it would sometimes be useful to select "X axis" or "Y axis" so you can use them as a ground plane and still have full control over their rotation without gimbal lock. 
	--[Tilt](index95f9.html?title=User:Tilt) 14:31, 8 August 2013 (EDT)
Why would you have gimbal lock?  Are you changing the Euler axis order?
  - Chad17:15, 12 August 2013 (EDT)I had some cases where I would have preferred not to waste the x axis rotation to bring the plane into a ground orientation. But you're right, I can work around this using a different rotation order or add a separate Transform3D.

### Transformations

- Support for more coordinate systems when transforming objects, local, object, world, screen etc. It should speed up workflow a lot. 
	--[theotheo](index8152.html?title=User:Theotheo&action=edit&redlink=1)
Switching between these could be accomplished by left-clicking on the axis at the bottom of 3D views, the one where you right-click for the viewport menu. The axis would then show an extra label (object, screen) and rotate accordingly. 
	--Tilt - Transform gizmo preview controls for 3TT and 3UV.  Screw controls are not always intuitive, and what you have for other 3D transform tools works well enough.  
	--[Chad](indexfe57.html?title=User:Chad) 11:36, 1 October 2009 (EDT)
- Invert Transform checkboxes for 3Xf and 3TT.  
	-- [Chad](indexfe57.html?title=User:Chad) 12:44, 20 October 2009 (EDT)
- Correctly transform the viewer overlay of rotoshapes that are fed into an image plane through 3D space so you can correctly move the vertices while looking at the renderer3D. Nuke does this and it's a big help when doing roto in 3D space. 
	--[Tilt](index95f9.html?title=User:Tilt) 03:45, 26 May 2010 (EDT)
- A modifier similar to CoordTransform Position, but much more simple. It could use the same drag'n'drop approach to just directly connect 3 coordinates of one object to 3 coordinates of another object. It would simplify the connection procedure eliminating the nessecity to connect them one-by-one. 
	--[Gringo](index27a2.html?title=User:Gringo) 08:48, 7 September 2010 (EDT)
- CoordTransform Rotation
	--[Tilt](index95f9.html?title=User:Tilt) 12:08, 30 September 2011 (EDT)
- Multi editing of selected transforms (translate, rotate, scale), right now when a user wants to, say, translate 20 objects by the same amount, they need to be merged with a Merge3D tool and that Merge3D needs to be translated (that or each and every object that needs to be edited needs to be translated by hand). It would be great to be able to edit all selected objects in the 3D view by simply dragging the (translate, rotate, scale) widget. [Sven](index24a9.html?title=User:Redoddity) 05:25, 15 June 2011 (EDT)
- Easy way to lock the entire transform tab (including the PC's).  When we set the transforms explicitly based on an imported scene, we don't want the user accidentally editing them.  Changing things like matte, or blend mode, or visibility still needs to be possible, so we don't want to lock the whole tool.  
	--[Chad](indexfe57.html?title=User:Chad) 10:26, 23 September 2011 (EDT)

### Animation

- 3D splines and capability to use them as path for all sort of objects
	--[Chuk](indexa3c8.html?title=User:Chuk&action=edit&redlink=1)

### Textures & Materials

- Checkbox (non-default) for Nearest sampling in Texture2D.  When encoding data to a texture, need to be able to ensure that the result is not interpolated, even if intervening texture nodes alter the uvw coordinates.  Trying to pass a texture for randomized unit vectors, and I keep getting non-unit-vectors in my shader.  So I have to normalize in the shader, but with the performance hit that's not desired 
	--[Chad](indexfe57.html?title=User:Chad) 10:50, 24 August 2010 (EDT)
- MIPmapping in Texture2D.  Minification looks terrible, and there's no decent way to pass multiple texture scales through a material tree otherwise.  Even if the current shaders don't support it initially, we could add it in Cg as needed if the data was available.  
	--[Chad](indexfe57.html?title=User:Chad) 11:45, 5 November 2010 (EDT)
- Material motion blur.  Currently any animated parameter on a material/texture is valid for the whole frame, so the 3Rn does the multiple passes, but nothing changes. 
	--[Chad](indexfe57.html?title=User:Chad) 13:44, 21 April 2011 (EDT)
- A possibility to control the Falloff shader by a curve before rendering to a 2D picture (without postprocessing). For example, I'd like to have an opaque sphere with a smooth falloff right near to the edges. 
	--[Gringo](index27a2.html?title=User:Gringo) 08:11, 5 May 2010 (EDT)
- Implement all the Catcher material's accumulation modes into the OpenGL renderer. Likewise, the software renderer is required to project the canvas color as a texture.
	--[Tilt](index95f9.html?title=User:Tilt) 07:16, 28 November 2011 (EST)
- It would sometimes be useful if the catcher tool accepted images with a DoD that exceed the image borders (to project overscan images) or to fill the area outside the frustum with repeated edge pixels.
	--[Tilt](index95f9.html?title=User:Tilt) 18:11, 26 April 2012 (EDT)
- A new accumulation mode for the Catcher, that looks at the angle of incidence of each incoming projector and uses the image that is most perpendicular to the currently shaded point. The matte painting toolkit for Maya by [Glyphfx](http://glyphfx.com/mptk.html) has such a feature since it assumes that this is the best-fitting projection with the least amount of stretching. As an alternative, this could probably be recreated in a shader network if the Falloff material were able to base its calculations on an arbitrary position in space instead of just the render camera.
  - [Tilt](index95f9.html?title=User:Tilt) 06:41, 4 December 2011 (EST)

### Rendering

- A plugin to use external 3d renderers instead of the buit in OGL/Software ones. My vote would be for a free one (Blender.org comes to mind) so licensing and platform wouldn't be an issue. The built in software renderer is not bad, but somewhat limited.
	-- There are currently better open-source cross-platform renderers than Blender's internal renderer, for example Sunflow and Indigo. But Blender is such a big project now that it will not go away anytime soon, and so it's a safe bet.
- More accurate Shadow calculations
- Render Shadows (Alpha) only (e.g.: Primary/Secondary Rays like in Softimage, hide objects from camera, but still have their receiving shadow)
- Shadows on all Light Sources
- Software Renderer take use of NVIDIA's CUDA engine to speed up render times
Let's get an SDK and then we can just entice 3rd party developers to make whatever renderer you want.
  - Chadhere it is:http://www.nvidia.com/object/cuda_get.htmlBut there's no 3D SDK for Fusion.  If that changes for Fusion 6, we will certainly write a renderer as well as some modeling tools.  Expect other studios and developers to do the same.
	--Chad - Per-pixel normals pass (currently, the normals channels are populated with the geometry normals only?)
  - [Chad](indexfe57.html?title=User:Chad) 12:49, 16 June 2010 (EDT)
- A way to render out an unwrapped UV map of the scene, either as part of the Render3D or as a separate node (so it can be branched off somewhere in the middle). Should have a checkbox to overlay polygon edges in a user-defined color/alpha value to aid with painting. 
	--[Tilt](index95f9.html?title=User:Tilt) 14:57, 21 August 2010 (EDT)
- The OpenGL Renderer should act as if the Depth of Field checkbox was disabled if the "amount of DoF Blur" slider is zero. Of course I can add an expression to the checkbox or animate it manually... but having this built-in would be neat.
	--[Tilt](index95f9.html?title=User:Tilt) 04:15, 26 January 2011 (EST)
- In lieu of multipass rendering (which would be swell to have), it would be nice if we could use the Override3D to tell certain things to be depth sorted or always on top.  I sometimes want Locator3D's to be 'in' the scene, and sometimes I want them to draw on top.
	--[Chad](indexfe57.html?title=User:Chad) 11:25, 30 March 2011 (EDT)
- Option to allow something to draw in the viewers, but NOT in the Renderer3D.  I often need things like Locator3D's to be visible as I work, but I don't want them to show up in my image output.  The current workaround (having a set of "render" Merge3D's and "view" Merge3D's in parallel) isn't ideal.
  - [Chad](indexfe57.html?title=User:Chad) 11:25, 30 March 2011 (EDT)
- Rendering Overscan by the Renderer3D, either by increasing the image size or by extending the DoD. There's a [workaround](index942d.html?title=EyeonTips:Manual/Fusion_6/Camera_3D), but that's, well, a workaround that has to be redone every time a new camera is imported. Maybe related to the viewport zooming wish above?
  - [Tilt](index95f9.html?title=User:Tilt) 14:32, 13 April 2011 (EDT)
- Create motion vector channels in the Renderer3D. Since good-looking 3D motion blur as implemented in Fusion requires a big amount of subdivisions for large blur (or objects close to the camera), vector motion blur would be a great time-saver for many situations.
  - [Tilt](index95f9.html?title=User:Tilt) 16:49, 29 August 2011 (EDT)
- Allow RGBA to be unchecked in 3Rn.  You still need RGBA in the output image, but you could write zeros to it and save a lot of time by not rendering the RGBA when all we want is Position or Normals. 
  - [Chad](indexfe57.html?title=User:Chad) 07:42, 8 November 2011 (EST)
- Allow VolumeFog to cast shadow on the scene surfaces as an option.
  - [Gringo](index27a2.html?title=User:Gringo) 04:10, 24 July 2012 (EDT)
- A possibility to soft-clip not only objects near the camera, but also objects which are farther than a certain distance. It could be either an additional range control in the SoftClip tool

or an additional tool (SoftClipNear / SoftClipFar).
  - [Gringo](index27a2.html?title=User:Gringo) 04:50, 13 September 2012 (EDT)
- Add Left and Right checkboxes to the Override3D's Do Unseen by Cameras nest.  Basically I want some tools to only show in one eye.
  - [Chad](indexfe57.html?title=User:Chad) 22:19, 26 April 2014 (EDT)

## Workarounds
- make for the image plane two input front and back faces.
- 3d Image Plane with different textures for front and back faces.
  - Hevonen- Create two 3Im at the same location with different textures, set one to cull front, the other to cull back.- Character Level Styling on 3D text
  - [Twester](index1d70.html?title=User:Twester)
There's aworkaroundby using a Text+ as a helper.- TimeSpeed3D/TimeStretcher3D.  The UI could probably be the same as the 2D tools.  Sometimes I need to offset a 3D animation to fit into a new timeline in the comp, or I need to merge two animations together with different timings.
  - [Chad](indexfe57.html?title=User:Chad)
-- This script:bzRetimeCurves.eyeonscriptcan help in most cases.
  - Gringo06:58, 25 November 2009 (EST)-- There's alsoTime3D Fuse.- Polygon BreakUp on 3DShapes (e.g.: to create explosions on 3DImagePlanes)
Is this solved by Krokodove's PolyPlay3D?

## Completed Requests

- lens shift in cameras for building toe in stereo camera rigs without keystoning
  - [Nebukadhezer](indexc6f2.html?title=User:Nebukadhezer)
6.1 build 697- DOF (depth of field) straight in the camera.
Available in Fusion 6
- Projections should support alphas, making the projected object be transparent where the alpha is. As it is now; its quite horrible to create multilayered projections and the need to use multiple instances of the scene just to create a alpha, is bogging down the speed of my flows.
  - [theotheo](index8152.html?title=User:Theotheo&action=edit&redlink=1)
Catcher Material in Fusion 6
- Reflection and Refraction Settings in the 3DMaterial (would be great to have)
Available in Fusion 6
- Use more than 8 Lights at 'Per Pixel Lighting' Mode
Have you tried FUSION_MAX_ARB_LIGHTS, and is your video card capable of more than 8?
  - ChadThanks a lot - this hint worked perfect!- Preference (similar to the 2D views) to allow float images in the 3D view.
  - [Chad](indexfe57.html?title=User:Chad)
- Fusion 6 and later.
  - Chad
- Ability to have environmental reflections in Text3D node. Take a look at Flame and what it does in this area. Text3D should at least generate its own UV information to allow the built in tools to map reflections. The front/back, sides and bevel edges should react to an environment reflection.
  - [Drswoboda](indexdb2e.html?title=User:Drswoboda)
- Is there a need to generate UV to get environmental reflections?
- Good question, I'm not a programmer. Perhaps normals is what I meant to say? Point being that the different faces of 3D Text need to be treated as independent elements (Front, back, sides, bevels) for reflection purposes.
  - Drswoboda
- Fusion 6 and later has a Reflect material that can be added to 3Txt.
  - Chad
- Matte material next to "standard material" in 3D tools. The form of the 3d object with this material would be subtracted from the alpha and the color of the other models in the scene. Users could create masks (holes) in a 3D environment with only one renderer3D node.
  - [Ata](indexce7e.html?title=User:Ata)
- +1 to the "matte" material too...(I remember having to render two scenes and making a difference beetween them to extract particles with a matte object in the middle...)
  - [chib](index7ebb.html?title=User:Chib&action=edit&redlink=1)
-- Can't believe it's not in here yet, I must have overlooked it, but I wish for an SDK for the 3D interface.
  - Chad-- Available in Fusion 6
  - Gringo07:19, 25 November 2009 (EST)- A node to freeze projected textures onto objects
--DanielIf you merge the projector with the object, then move the merge instead of the object, the texture stays glued to the object.-- if you add a displace3d after the merge, it slides.-- Can you add it before the merge instead?
  - Daniel
- Then it wouldn't warp the texture with mesh. Creating and using UV coordinates inside Fusion's 3d system would be useful (I didn't see this option in Renderer).
  - Hevonen-- Is this solved in Fu 6.x?
  - Gringo06:58, 25 November 2009 (EST)-- Yes, I would say that it is.  There are options to lock the mapping to a reference frame.
  - Chad15:07, 25 November 2009 (EST)- Viewport gizmos for the convergence plane and focal plane of the camera.
  - [Chad](indexfe57.html?title=User:Chad) 15:12, 22 January 2010 (EST) -- available in 6.1 build 697
- I love the new functions of the duplicate3D. Besides I wish it would have features like the duplicate in Houdini. I mean the basic functions are very similar (Houdini doesn't have even jitter options) but that has the ability to **duplicate the objects to points**. I imagine this in Fusion as a second input on the duplicate3D (like in Houdini) where we could connect a **pointCloud3D** or a **particle3D** tool. Duplicate3D would place the input geo on every points (Houdini takes those points as starting points means (number of points)*(number of duplicates)). Of course there would be problems with object rotations but nothing impossible. This way the requested particle instances would be done either and opens a tons of possibilities.
	- [Ata](indexce7e.html?title=User:Ata)
	- available in Fusion 6.4 (Replicate3D) 
