# Wishlist/eyeonscript

## [Fusion](http://96.0.243.189/index.php?title=Eyeon:Script/Reference/Applications/Fusion/Classes/Fusion)

- SetCurrentComp or SetCompFocus or comp.SetFocus to set the focus on a particular composition. Useful if an external asset manager controls the compositions. [[Pigsfly Thread](http://www.pigsfly.com/forums/index.php?showtopic=6608&pid=27114&st=0)] --[bfloch](http://96.0.243.189/index.php?title=User:Milho&action=edit&redlink=1)
- a function which takes a loader and returns the filepath of the current loaded frame --[bfloch](http://96.0.243.189/index.php?title=User:Milho&action=edit&redlink=1)- As Workaround the Metadata can be used --[bfloch](http://96.0.243.189/index.php?title=User:Milho&action=edit&redlink=1)
- allow on-the-fly modification of a loader's and saver's filename string by in-tool-scripts. I don't know if the modified string should be displayed instead of the original one though since the aim of such scripts might be string replacements for shot number or version number and it would be impossible to test this if you can't modifiy the original string. Maybe a tooltip could contain the modified string? --[Tilt](http://96.0.243.189/index.php?title=User:Tilt) 16:24, 29 August 2011 (EDT)
- GetSize and SetSize methods so that we can change Underlays without going through the clipboard --[bfloch](http://96.0.243.189/index.php?title=User:Milho&action=edit&redlink=1)
- A function to trigger the "Import Transform" button of a 3D tool from scripts (without user feedback). Takes a file name and maybe a name of a node if there are several objects in the 3D file. --[Tilt](http://96.0.243.189/index.php?title=User:Tilt) 15:41, 11 August 2011 (EDT)
- It would be nice if the selected nodes returned by comp:GetToolList(true) were sorted in the order they were selected. This would allow scripts to create nodes with background and foreground inputs and connect them accordingly (e.g. tool that was selected first gets connected to the background, the other tool will be regarded as the foreground). --[Tilt](http://96.0.243.189/index.php?title=User:Tilt) 17:31, 3 March 2012 (EST)
- Ability to access the active control through tool scripts (inpToModify = tool.ActiveControl).  This way we could make hotkeys for adding expressions / other modifiers / animating / etc.
- Scripting access to the currently selected points of a point cloud. This would allow us to write scripts that fit image planes to 3 vertices or align cameras so they are perpendicular to certain features and so on... I know I can read out all available points but a list of 200 enumerated items is hard to handle. --[Tilt](http://96.0.243.189/index.php?title=User:Tilt) 04:57, 8 May 2012 (EDT)
- A function to set the tile pic flag of a tool so the thumbnail can be toggled via hotkeys or scripts. --[Tilt](http://96.0.243.189/index.php?title=User:Tilt) 02:36, 1 August 2012 (EDT)
- A connection from an input control object (ScrewControl etc..) back to its actual input so scripts assigned to input controls via the Fusion.menus file can actually be used to do something useful (like baking an animation or importing data to that particular input) --[Tilt](http://96.0.243.189/index.php?title=User:Tilt) 02:42, 1 August 2012 (EDT)
- A method for BezierSplines to set keyframe interpolation modes (linear, flat, smooth, step-in...). This is how I would imagine such a method could look like: something like SetInterpolation(mode [, startframe [, endframe]]). If no frame range is specified, it would change the whole curve. If only one frame is specified, Fusion could either change both sides of the keyframe or - if there's no key at that point - change the segment of the spline that includes the specified frame number. If start and end are specified, the method would affect all handles within that range. --[Tilt](http://96.0.243.189/index.php?title=User:Tilt) 15:47, 13 December 2012 (EST)
- Replacing a Loader's filename using scripts is a pain. There are a lot of things to consider, for example things might not work when you're outside the loaders valid range and it has never been rendered, the length of the clip changes but you want frame 1000 still be at frame 1000 after the replacement is over, clip lists are involved etc... I guess everybody has cooked up his own solutions and none of them probably covers all cases. It would be cool if there was a function of the Loader which takes care of everything. Something like "Loader1:ReplaceClip("blabla.0000.dpx", mode), where "mode" would specify what should happen:
- act as if the user replaced the clip manually and clicked "Yes" in the reset trimming popup.- an intelligent adjustment of the inpoint so frame 1000 of the new clip is where frame 1000 of the old clip used to be.--Tilt03:43, 3 May 2013 (EDT)

### Simple Expressions

- Allow full Lua scripting in tool expressions, complete with "if-else" and loops. Current simple expressions are sometimes unintuitive and their logical constructs are limited.
-- Daniel Koch has recently suggested such syntax for if condition in Simple Expressions:(condition) and 1 or 0. For example,(Merge.Blend>0) and 5 or 0--Gringo-- Use anonymous functions for more complex expressions.Stuart14:34, 3 July 2014 (EDT)- Support for scriptlibs in simple expressions or if that would open up a can of worms there should be some more interpolation helper functions available like lerp/smoothstep (After Effects has a bunch of them). --[Tilt](http://96.0.243.189/index.php?title=User:Tilt) 08:51, 12 September 2011 (EDT)
- A variable for expressions that contains the current input's value if it didn't have an expression on it. Something like "this" or "thisValue"? Nuke uses "curve" which can be used to do simple expressions like "curve * 2" to scale an animation by a factor or "curve(frame - 1)" to shift it. *`self:GetValue()`* doesn't seem to be able to retrieve the value if an expression is present, and neither does *`connectedModifier.Value`*. --[Tilt](http://96.0.243.189/index.php?title=User:Tilt) 16:46, 11 March 2012 (EDT)
- Would it be possible to create an alias for each function of the math library? It's tedious (and doesn't improve readability) if there's the "math." prefix everywhere. --[Tilt](http://96.0.243.189/index.php?title=User:Tilt) 15:42, 13 December 2012 (EST)
Additionally, math.modf doesn't seem to work in expressions - because it returns two values?- Couldn't boolean results be treated as either 1.0 or 0.0? That way, we could simply enter "time < 50" into an expression field instead of "time < 50 and 1 or 0" or "iif(time < 50, 1, 0)". --[Tilt](http://96.0.243.189/index.php?title=User:Tilt) 10:59, 20 April 2013 (EDT)
- Access to the comp's HiQ setting, so I can write expressions to dynamically speed things up (for example reducing a pEmitter's particule amount when not in HiQ mode). Something like iif(comp.HiQ, 100, 10). --[Tilt](http://96.0.243.189/index.php?title=User:Tilt) 03:26, 3 May 2013 (EDT)

### Events

- Connectable Callbacks for Inputs/States so that scripts can be executed on change / trigger --[bfloch](http://96.0.243.189/index.php?title=User:Milho&action=edit&redlink=1)
- Event suite OnViewer that would let you modify a viewer with a script with arguments from the tool being viewed (I'm specifically thinking from metadata).  This would let you modify the viewer to view stereo/mono footage automatically, or to set the correct 3D viewpoint based on the tool being viewed.  --[Chad](http://96.0.243.189/index.php?title=User:Chad) 12:05, 12 October 2010 (EDT)
- OnCompositionChange event for EventSuite. Useful if external apps connect to current composition and needs constant feedback--[bfloch](http://96.0.243.189/index.php?title=User:Milho&action=edit&redlink=1)
- OnToolAdded event for EventSuite --[bfloch](http://96.0.243.189/index.php?title=User:Milho&action=edit&redlink=1)- See workaround below

## Fuse API

## [Python / peyeonScript](http://96.0.243.189/index.php?title=Eyeon:Script/PeyeonScript)

- [EventScripting](http://96.0.243.189/index.php?title=Eyeon:Script/General_Concepts/Script_Libraries_and_Event_Scripting) for python. --[bfloch](http://96.0.243.189/index.php?title=User:Milho&action=edit&redlink=1)
- HotkeyScript for python. --[bfloch](http://96.0.243.189/index.php?title=User:Milho&action=edit&redlink=1)
- New Scripts from fusions "Script->New.." menubar are always saved as .eyeonscript. Should allow .py as well.
- Allow unicode strings to be assigned to text inputs (.StyledText or .Comments)

## Workarounds

- Mimics an OnToolAdded event [File:Autotools.zip](http://96.0.243.189/index.php?title=File:Autotools.zip)  --[bfloch](http://96.0.243.189/index.php?title=User:Milho&action=edit&redlink=1)

## Completed requests

### since 6.2

- ability to execute python scripts from the customToolBar [pigsfly thread](http://www.pigsfly.com/forums/index.php?showtopic=6843&pid=28299&st=0&#entry28299) --[robocop](http://96.0.243.189/index.php?title=User:Robocop)
- Consider newer Python builds for PeyeonScript (3.2 / 2.7) [(dissussion)](http://96.0.243.189/index.php?title=Talk:Wishlist/eyeonscript)

### since 6.31

- Ability to modify the requested ROI of an image input. --[Tilt](http://96.0.243.189/index.php?title=User:Tilt) 04:32, 13 November 2011 (EST)

### since 7.0

- The python console should have a way to dump (like in LUA using ==) dicts in a nicely formatted way instead of a single long line. --[Tilt](http://96.0.243.189/index.php?title=User:Tilt) 04:32, 13 November 2011 (EST)
- (before 7.0) Use Pretty Print [pprint](http://docs.python.org/library/pprint.html) --[bfloch](http://96.0.243.189/index.php?title=User:Milho&action=edit&redlink=1)
 