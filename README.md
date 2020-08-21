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

* Use a valid install folder (use the fullpath): `force_install_dir C:\steamcmd\steamapps\rust_server`

* Run: `app_update 258550` validate﻿ to download the public branch of rust dedicated server

* Exit steamcmd with `exit`

### Run the RUST - Dedicated Server

* Extract [Oxide.Rust.zip](https://umod.org/games/rust) to `C:\steamcmd\steamapps\rust_server`

* Launch the RUST dedicated server:

```
cd "C:\steamcmd\steamapps\rust_server\"
RustDedicated.exe -batchmode +server.ip 0.0.0.0 +server.port 28015 +server.tickrate 10 +server.hostname "RUST Chroma Mod" +server.identity "dev_rust_chroma_mod" +server.seed 793197 +server.maxplayers 50 +server.worldsize 3000 +server.saveinterval 600 +rcon.ip 0.0.0.0 +rcon.port 28016 +rcon.password "Your_Rcon_Password" -logfile "logfilename.log"
```

### Run RUST - Game Client

* On the main menu open the console with `F1`

* Connect to the dedicated server (method 1):

**Note: Localhost didn't want to connect in the case you try to run a dedicated server and client on the same machine, that didn't work.**

```
connect <SERVER_IP_ADDRESS>:28015
```

* Connect to the local server (method 2):

```
client.connect <SERVER_IP_ADDRESS>:28015
```

## Creating the Chroma RGB Mod

* [Getting Started with uMod](https://umod.org/documentation/getting-started)

* Bind Chroma to [RustHooks.cs](https://github.com/OxideMod/Oxide.Rust/blob/develop/src/RustHooks.cs) game events

## Setup

* Copy [RustChromaMod.hs](oxide/plugins/RustChromaMod.js) to `C:\steamcmd\steamapps\rust_server\oxide\plugins`

* Copy [RustChromaMod.cs](oxide/plugins/RustChromaMod.cs) to `C:\steamcmd\steamapps\rust_server\oxide\plugins`

* Disable sandbox: Create an empty text file `C:\steamcmd\steamapps\rust_server\RustDedicated_Data\Managed\oxide.disable-sandbox`

* Launch the dedicated RUST server
