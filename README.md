# Overview

This is the Chroma RGB mod for RUST. This allows a RUST client to control Chroma RGB lighting on Windows. The server runs a mod and a client app (on Windows) handles displaying the lighting.

# Guide

## Server Setup

### SteamCMD

* Setup [SteamCMD](https://developer.valvesoftware.com/wiki/SteamCMD)

**Windows**

* Download [SteamCMD](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)

* Unpack to `C:\steamcmd`

* Run `steamcmd` on the command-line to setup.

```
cd C:\steamcmd
steamcmd
```

**SteamCMD Login Anonymous**

To download most game servers, you can login anonymously.

```
login anonymous
```

### RUST

* Setup the [RUST Dedicated Server](https://developer.valvesoftware.com/wiki/Rust_Dedicated_Server)

* Log in with a Steam account or anonymously: `login username` or `login anonymous`

* Make the install folder: `C:\steamcmd\steamapps\rust_server`

* Select install folder: `force_install_dir C:\steamcmd\steamapps\rust_server`

* Run: `app_update 258550` validate﻿ to download the public branch of rust dedicated server

* Launch the dedicated server:

```
cd C:\steamcmd\steamapps\rust_server\
RustDedicated.exe -batchmode +server.ip 0.0.0.0 +server.port 28015 +server.tickrate 10 +server.hostname "RUST Chroma Mod"
```

### RUST Game Client

* On the main menu open the console with `F1`

* Connect to the server:

```
connect 127.0.0.1:28015
```
