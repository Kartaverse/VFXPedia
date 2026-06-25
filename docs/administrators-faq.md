# Administrators FAQ

This page addressess questions that system administrators and technical directors commonly ask when speaking to our support department.
Contents1Administrators FAQ1.1Is there a list of all the environment variables for Fusion?

## Is there a list of all the environment variables for Fusion?

Yes, there is. Click on [Environment Variables](indexdca0.html?title=Environment_Variables) to see it.

## Where do OFX plugins go?

By default, they install themselves into `C:\Program Files\Common Files\OFX\Plugins`. On 64bit Windows, this folder is meant for 64bit plugins. 32-bit plugins will be searched for in `C:\Program Files (x86)\Common Files\OFX\Plugins`.
You can also define an [environment variable](indexdca0.html?title=Environment_Variables) called FUSION_OFX_PLUGIN_PATH which will be searched as well. Use it to store OFX plugins that need to be hidden from other OFX hosts.

## How can I customize Fusion's hotkeys?

Hotkeys are defined in the file called Fusion.hotkeys which resides in the profile directory (located in AllDocs:Profiles, default on Windows Vista/7 would be `C:\ProgramData\eyeon\Fusion\Profiles\Default\Fusion.hotkeys`). If it doesn't exist, call the Hotkey Manager script from the main *File -> Script* menu which will create a template. You can of course use that dialog to edit hotkeys but copying&pasting is easier on the raw file.

The Fusion.hotkeys file is a standard LUA table with sections for each part of the interface. The "Frame" section contains keys that work anywhere in a composition window. Each subsection contains hotkey definitions in `KEYCODE = "command"` form. All available key codes can be found [on MSDN](http://msdn.microsoft.com/en-us/library/dd375731(VS.85).aspx). The command can either be pure LUA code or a call to an existing script by writing "`@path_to_lua_or_python_script`". Depending on the section, the *self* variable can be used here to call methods of the currently active object (e.g. a [viewer](indexc3e5.html?title=Eyeon:Script/Reference/Applications/Fusion/Classes/GLViewer) or the [flow view](index106c.html?title=Eyeon:Script/Reference/Applications/Fusion/Classes/FlowView)). Here's an example (the parameters for AddTool are documented [here](indexc8a1.html?title=Eyeon:Script/Reference/Applications/Fusion/Classes/Composition/AddTool)):

```lua
{
    Flow = {
        -- create blur tool when "B" is pressed. AddTool() is a method of the composition,
        -- which can be reached from the FlowView (self) like this:
        B = "t = self:Composition():AddTool('Blur', true, -32768, -32768)",
    },
    Frame = {
        -- call Add Tool script
        CONTROL_SPACE = "@Scripts:Comp/Add Tool.eyeonscript",
    }
}
```

If you have edited the file, press Ctrl-F12 in Fusion to update the hotkeys (or type `fusion.HotkeyManager:LoadHotkeys()` in the console).

### How can I customize Fusion's menus?

Starting with version 6.31 you can! The file in question is called `Fusion.menus` and is located in the profile directory (same as with the hotkeys file above). The syntax is similar to Fusion.hotkeys, with various sections describing modifications to a certain menu bar. Each entry consists of a menu label and LUA code that gets executed when the menu item is clicked.

A menu item's label is defined as a string using the tab character (\t) to separate hotkey commands from the label's text. These hotkeys, however, are just informative. They will not trigger that menu command unless backed by a definition in the Fusion.hotkeys file. New items are appended to existing menus by default unless you specify their position using the *Index* parameter. Separators can be created by using "SEPARATOR" as the menu label string. It's best to enclose the LUA code called by menu items in double square brackets, as this allows you to use any kind of quotation or escape character as part of the string). If it is nil, the menu item is hidden.

Scripts called via menu items don't have to be located in the Comp or Tool subfolders. In fact, you might want to put pipeline-related stuff somewhere else or into the HotkeyScripts folder so they don't clutter the script menus.

After changing Fusion.menus, either restart Fusion or type `fusion.MenuManager:LoadMenus()` in the console to see the new menu items. It not a single one of your menu items shows up, it's due to a syntax error in Fusion.menus. Make sure you add commas between tables, for example.

The following file demonstrates custom items for the viewer's context menu as well as changes to Fusion's main menu bar:

```lua
{
    GLView = {  -- Display view context menu: append "Add Tool..." item
        { "Add Tool...\tCtrl+A", [[@Scripts:Comp\Add Tool.eyeonscript]] },	
    },
 
    Fusion = {        -- Main window (if no comp is opened)
        "Workflow",   -- new main menu item
        Index = 3,    -- add before Help menu (Fusion 6.4 or later)
        {
            { "Load Shot...", [[@Scripts:Load_Shot.py]] },
        }
    },
 
    Comp = {           -- Main window (if a comp is opened)
        {              -- this level of parentheses is necessary since multiple subtables are listed
            "File",    -- modify File menu
            {
                { "SEPARATOR", Index = 4 },     -- adds a separator before item #4 ("Save")
                { "Macro Editor...", nil },     -- hide macro editor item
                { "Save New Version...", [[@Scripts:Comp\Save New Version.eyeonscript]], Index = 6 },
                {
                    "Extras...",    -- appends Extras submenu
                    {
                        { "Subitem 1", [[print('Extras Subitem 1')]] },
                        { "Subitem 2", [[print('Extras Subitem 2')]] },
                        { "Subitem 3", [[print('Extras Subitem 3')]] },
                    },
                },
            },
        },
        {
            "Tools",
            {
                { "Macro", nil },   -- hide macro and opencl submenus
                { "OpenCL", nil },  -- (tools will still be available of course)
            },
        },
        {
            "Workflow",   -- add new main menu item
            Index = 6,    -- add before Help menu (Fusion 6.4 or later)
            {
                { "Load Shot...", [[@Scripts:Load_Shot.py]] },
            }
        },
    },
}
```

Fusion 6.4 expands the places where you can append custom menu items. For example, scripts can be added to the context menu of tools or only to those of specific tool IDs. This is useful if you don't want to clutter the tool script menu with scripts that only work on certain tool types:

```lua
{
    Operator = {
        {
            "Custom Scripts",   -- a sub menu just to show off
            {
                { "Bake Animation", [[@Scripts:Tool\Bake Animation.eyeonscript]] },
            },
        },
    },
    LensDistort = {
        -- just appended to LensDistort tools
        { "Syntheyes Lens Distortion", [[@Scripts:Tool\LensDistort for Syntheyes.py]] },
    },   
    PointCloud3D = {
        -- just appended to point clouds. Script is in HotkeyScripts so it won't show up in regular tool scripts menu
        -- but it will have access to its "tool" variable anyways.
        { "3 Point Image Plane", [[@Scripts:HotkeyScripts\3-Point-ImagePlane.eyeonscript]] },
    },   
}
```

You can also add menu items to the context menus of input or preview controls, to different sections of the interface (views) and the bins. The required keywords can be listed by typing something like this in the console:

```lua
for k,v in fu:GetRegList(CT_View) do print(v.ID) end
--[[ note: not all of them have context menus
FlowView
ConsoleView
ControlView
TimelineView
ModifierView
SplineEditorView
FloatLUTView
MultiView
GraphView
KeyFrameView
TimeView
TransportView
GLView
PreviewContainer
InfoView
ChatView
]]--
```

Instead of CT_View you can use most [constants listed here](index21f3.html?title=Eyeon:Script/Reference/Applications/Fusion/Classes/Fusion/GetRegList#Valid_Mask_Constants).
