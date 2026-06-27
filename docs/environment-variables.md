# Environment Variables

# Fusion Environment Variables

This is a list of environment variables supported by Fusion 5 or later. For more on setting environment variables, see the [Windows documentation](http://www.microsoft.com/resources/documentation/windows/xp/all/proddocs/en-us/environment_variables.mspx?mfr=true).

As of 5.2, Fusion will also look within its preferences file (usually in `Fusion:Profiles\Default\Fusion.prefs`) for a table of entries under "`Global.EnvironmentVars`". These entries may override any external environment variables.

An example entry:

`["FUSION_Bins_NoPreview"] = "True"`,

## Startup Vars

`FUSION_PROFILE_DIR`

If this environment variable is set to a valid path, then Fusion will load and maintain profiles in that folder, instead of in the default `Fusion:\Profiles` folder.

`FUSION_PROFILE`

Normally the preferences and toolbar settings are stored in the `Fusion:\Profiles\Defaults` folder. If this environment variable is set then the folder will be the value of the environment variable. For example, if the value of `FUSION_PROFILE` is "Bob", then the preferences would be loaded from `Fusion:\Profiles\Bob`. This can be used in combination with `FUSION_PROFILE_DIR` to create sophisticated per user preferences.

`FUSION_MasterPrefs` (5.1)

This variable allows additional "master" prefs files to be used in addition to the main profile prefs, useful for maintaining common settings in a facility. One or more full paths may be specified, separated by semicolons. These files will not be written to by Fusion, and may contain a subset of all available settings. If the line "`Locked = true,`" appears in the main table of a master file, all settings in that file will override other prefs, and may not be altered by the user. An example file that turns off & locks the "Make this machine a Render Master" would look like :

```lua
{
	Global = {
		Network = {
			IsRenderServer = false,
		},
	},
	Locked = true,
}
```

`FUSION_PLUGINS`

When Fusion starts it will automatically attempt to load any .plugin files found in the `Fusion:\Plugins` folder. It then checks to see if this environment variable exists and is set to a valid path. Fusion will then load any plugins found in this folder as well.

`FUSION_AEPLUGINS`

When Fusion starts it will automatically attempt to load any AE plugins found in the `Fusion:\AEPlugins` folder. It then checks to see if this environment variable exists and is set to a valid path. Fusion will then load any AE plugins found in this folder as well.

`FUSION_OFX_PLUGIN_PATH` (5.3)

This is a Fusion-specifc path for loading OFX plugins, and is checked before other locations. This can be helpful if you want certain OFX plugins to be used by Fusion only.

`OFX_PLUGIN_PATH`

This is the standard path that all OFX plugin hosts look for when loading OFX plugins. If not specified, the default is to load from the `OFX\Plugins` subdir within the system Common Files location (Windows: usually `C:\Program Files\Common Files\OFX\`, Linux: `/usr/OFX/`). Plugins will be search for within both a 'Plugins' and 'Fusion' subdir within the specified path.

`EYEON_LICENSE_FILE`

This environment variable is used to specify a path to the license file or license server. If the environment variable is not provided, then Fusion will look for a file called Fusion.dat on startup. The first location searched will be the application folder, then the fixed path `C:\FlexLM`. FlexLM also keeps a cache of folders where a license was previously found, and may search those folders as well. If the environment variable is provided, then Fusion will use the paths and servers described as this variables value. Paths and server names must be seperated by a semi colon (;). A valid `EYEON_LICENSE_FILE` would be "`C:\License;@LICSERVER;@192.168.0.5`".

## Network Rendering Vars

`FUSION_FORCE_MANAGER`

If this environment variable is set to 'true' when a render slave is started, it will automatically set itself to use the first Render Manager it finds broadcasting on the local subnet. Use this if you want to force a slave to always use the same render manager, and you only intend to run one manager in your facility.

`FUSION_NETSENDCOMP`

An addition to Fusion 5.01 was the ability for the network render manager to send compositions directly to the slave as opposed to using a copy available on a network share.  This might cause problems or not be ideal for certain studios, so setting this variable to false will disable it.

`FUSION_SCAN_SCALE`

Adjusts how often RenderSlaves are scanned by a manager (either standalone or within Fusion).  Scan timing is determined by the number of slaves, rather than an absolute time; but an overall scale can be applied to the calculated value.  The default is 1.0; setting this to greater than one slows the scan rate down, while setting it to less than one will scan more often.

## Bin Library Vars

`FUSION_BINS_TIMEOUT`

Can be used to override the timeout for `Bin/Library` access, in seconds.  This may be useful if you find either very large bins or a slow network are causing bins to fail loading.  The default value is 10.0.

`FUSION_Bins_NoAvailableCheck`

If this is set to True, Fusion will not check to see if a bin file exists when drawing its icon. This can speed up the display of large bins, especially with network files. The default is to indicate missing files by a red X.

`FUSION_Bins_NoPreview`

If this is set to True, Fusion will not bring up the transport controls for scrubbing & playback when clicking on a clip or still image icon. This can eliminate delays when clicking on large or networked files. You may still scrub the bin icon by right-dragging it, and play it by selecting Play from its context menu.

## Display Vars

`FUSION_MAX_ARB_LIGHTS` (5.1) 

Use this to override the maximum number of lights allowed by Fusion's OpenGL renderer (default is 8).

`FUSION_TEXTURE_CONVERT` (5.2)

Setting this totruewill cause Fusion to convert OpenGL textures itself, rather than having the OpenGL driver do it. This works around a current bug in nVidia drivers that can manifest as partially-missing textures in 3D image planes or Tracker patterns.

`FUSION_FLOAT_SMR` (5.2)

If this is set totrue, Fusion will enable smooth resizing of float images. Series 8 nVidia chips should have no trouble with this, but Series 6/7 are only capable of smoothly resizing float16 images in hardware, so float32 images will be significantly slower.

`FUSION_USE_PBO` (5.2)

A value of false will prevent Fusion from using OpenGL Pixel Buffer Objects for fast graphics display, and will revert to a slightly slower traditional method. This might be useful to work around certain OpenGL driver issues.

`CGGL_LATEST_VERTEX_PROFILE`, `CGGL_LATEST_FRAGMENT_PROFILE` (6.0+)

environment variables for overriding the Cg’s shaders choice of vertex and fragment profiles.

`FUSION_USE_PBO` (6.0+) force Pixel Buffer Objects for ATI cards on (TRUE) or off as needed, since not all ATI cards fully support this feature. Defaults to TRUE.

## Miscellaneous Vars

`FUSION_DV`

Set the `FUSION_DV` environment variable to 'true" to enable an unsupported feature that provides "view on" and preview support through firewire cameras attached to the computer. Also activates support for saving AVI files with certain DirectShow-only codecs.

`FUSION_FMTID`

Use this to specify the script ID of the file format to be used for file sequence previews (i.e. Create Preview on -> File Sequence from a tool's context menu). The default is Targa files

`FUSION_DISKCACHE_EXT`

This allows you to specify the extension of the file format used by default for disk caches. For example, setting it to ".tga" will create disk caches from a series of Targa files, unless the user changes the default filename. If this environment variable is not specified, Raw files are used.

Please note: File formats other than Raw may not store all image information, including greater bit depths, image aspect, proxy and quality level, and auxiliary channels. It may also restrict disk cache functionality. It is generally recommended that you do not change this default.

`FUSION_Log`

If this is set to true, Fusion will copy any console messages to "`c:\Fusion.log`". As of Fusion 5.1, `FUSION_Log` may be set to any filename to use (global mapping is done). For example, "`Fusion:Fusion.log`" will echo all console output to the file "`Fusion.log`" in Fusion's program dir.

`FUSION_Console`

This will cause a system console (DOS prompt) window to be opened, and all messages to Fusion's Console view will be echoed here. As of 5.1, if Fusion has its own system console already, that will be used instead.

`FUSION_BLOCKS_ARE_EVIL`

Set to true to disable the StressReducer.

`FUSION_FONTS` (Linux only)(5.1)

Linux version will now scan a directory specified by `FUSION_FONTS`. If that doesn't exist, it'll fall back to the fonts directory used by Wine.

`FUSION_NO_OVERLAPPED_IO` (5.1)

Fusion uses an advanced asynchronous I/O system that minimises network latencies and enables simultaneous reading and decoding of files. However, not all network systems may deal correctly or efficiently with overlapped I/O requests. To revert to a simpler I/O system, set this var to true.

`FUSION_IO_BLOCK_SIZE` (5.1)

Define this to set the read block size used by Fusion's IO system. Default is 64K, but any larger multiple of 4K may be used, up to 64M. This can speed up file reads with some drive arrays.

`FUSION_Embiggen` (5.21)

Set this to true to unlock the 32K x 32K image size limit. Important: only a few tools will work correctly with oversized images. Many tools, particularly those that do subpixel sampling, will give poor quality or incorrect results. Some may even crash. Use with caution - not recommended for production use.

# eyeonServer Environment Variables

Running the eyeonServer app on a different machine allows you to provide a shared Bin that all artists on the network can access. These variables control how that server app operates. They may also be used when running eyeonServer along side Fusion.


`eyeonserver_LibrariesDir`

This environment variable is used to specify the directory eyeonServer.exe will use to store the Bin library, a file that describes the contents of the Bins. The default folder is "Libraries" within the same folder as the exe file. Specifying any valid path as a value for `eyeonserver_librariesDir` will override the default.

`eyeonserver_IconsDir`

Similar to `eyeonServer_LibrariesDir`, this variable lets you specify a separate directory to store icon files to be used with the bin contents. The default folder is "Icons" within the same folder as the exe file. Icons must be 32 bit BMP files, named the same as a corresponding bin item, with a .bmp extension.

`eyeonServer_PluginsDir`

As with the two above, you can use this to set a different directory to store eyeonServer plugins (.esplugin files). The default folder is "`esPlugins`" within the same folder as the exe file.

# eyeonScript.exe Environment Variables

`EYEONSCRIPT_PATH`

eyeonScript.exe doesn't use Fusion's prefs, nor can it do pathmaps, so it uses a scripts dir within the dir specified by the `EYEONSCRIPT_PATH` env var, or off its own executable dir otherwise.

# Fusion 4 Environment Variables

`DF_FLIPBOOK`

Fusion 4.03 and later provided experimental support for the use of OpenGL for flipbooks. To enable this unsupported option, set the environment variable DF_FLIPBOOK to "OpenGL".

`DF_FBTEXTURE`

When the `DF_FBTEXTURE` variable is set to "true" Fusion will use textured polygons for OpenGL flipbooks, as opposed to `glDrawPixel()` blits. This may work better (or worse) on some systems. Note that the `DF_FLIPBOOK` variable must be set to "true" for this to have any effect.

`DF_DV`

Set the `DF_DV` environment variable to "true" to enable an unsupported feature that provides "view on" and preview support through firewire cameras attached to the computer. Also activates support for saving AVI files with certain DirectShow-only codecs.

`DF_XF_REFSIZE`

If set to "true", enables controls to let you to use pixel values in Transform and Merge tools, if you type in a reference size in pixels. 
