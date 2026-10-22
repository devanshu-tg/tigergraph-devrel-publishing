---
id: "blg_66a9fd"
slug: "install-the-tigergraph-mcp"
title: "Install the TigerGraph MCP"
author: "TigerGraph DevRel"
published_at: "2026-10-16T21:23:21+05:30"
updated_at: "2026-10-16T21:23:21+05:30"
tags: ["mcp", "claude-code", "cursor", "tutorial"]
cover_image_url: "/images/blogs/tigergraph-mcp.svg"
canonical_url: "https://mcp-setup.netlify.app/"
featured: true
---

Six steps to get TigerGraph tools working inside your editor. Each step below gives the commands for **macOS** and **Windows**, and for **Claude Code** and **Cursor**. Follow the ones that match your setup.

- **Time:** ~10 min
- **Requires:** Python 3.10+
- **Install:** 1 package
- **Tools unlocked:** 69

## Before you start

Have these three things ready. The install itself is one command — most of the time goes into the credentials.

| What | Why you need it |
| --- | --- |
| **Python 3.10+** | The MCP server is a Python package. Versions 3.10 through 3.14 are supported. |
| **Claude Code** or **Cursor** | Installed and signed in. For Claude Code, the CLI, desktop app, or IDE extension all work the same way. For Cursor, MCP support lives under Settings → Tools & MCP. |
| **TigerGraph access** | A host URL and either a GSQL secret or a username and password. Step 3 covers where to find them. |

## The six steps

Work top to bottom. Steps 1–3 are the same for everyone; step 4 is where your editor choice matters.

### 1. Check your Python version

Open a terminal and run:

**macOS** (Terminal):

```bash
python3 --version
```

**Windows** (PowerShell):

```powershell
python --version
```

You need `3.10` or newer. If the command is not found, install Python from [python.org](https://www.python.org/downloads/) first.

> **Windows:** When installing Python, tick **“Add python.exe to PATH”** on the first screen of the installer. Almost every Windows problem later traces back to this box being left unchecked.

### 2. Install the package

The command is the same in Terminal (macOS) and PowerShell (Windows):

```bash
pip install tigergraph-mcp
```

That is the entire install. It brings in `pyTigerGraph`, the `mcp` SDK, `pydantic`, `click` and `python-dotenv`, and adds a `tigergraph-mcp` command to your system.

> **No clone:** There is nothing to download from GitHub and nothing to deploy. The source repository is only for people modifying the server itself.

Now find where it landed — you may need this path in step 4:

**macOS** (Terminal):

```bash
which tigergraph-mcp
```

**Windows** (PowerShell):

```powershell
where tigergraph-mcp
```

If this prints nothing, the command is not on your **PATH**. That is fine — you will just use the full path in the next steps. A virtual environment install almost always needs this.

### 3. Collect your TigerGraph credentials

From the TigerGraph Savanna console (or your Enterprise admin), gather these:

| Variable | Example | Notes |
| --- | --- | --- |
| `TG_HOST` | `https://xxx.i.tgcloud.io` | Full URL, including `https://` |
| `TG_SECRET` | `abc123…` | A GSQL secret. Alternatively use `TG_USERNAME` and `TG_PASSWORD` |
| `TG_GRAPHNAME` | `MyGraph` | Optional — leave it out if the instance holds several graphs |
| `TG_TGCLOUD` | `true` | `true` for Savanna or Cloud, `false` for self-hosted |

Ports almost never need changing. `TG_RESTPP_PORT` defaults to **9000**, `TG_GS_PORT` to **14240** and `TG_SSL_PORT` to **443**.

### 4. Register the server

#### Claude Code

The CLI writes the config for you, in the right place and in valid JSON. This is the safest route:

**macOS** (Terminal):

```bash
# --scope user puts it in ~/.claude.json, available everywhere
claude mcp add tigergraph --scope user \
  --env TG_HOST=https://xxx.i.tgcloud.io \
  --env TG_TGCLOUD=true \
  --env TG_SECRET=your_secret \
  --env TG_GRAPHNAME=MyGraph \
  -- tigergraph-mcp
```

**Windows** (PowerShell):

```powershell
# --scope user puts it in %USERPROFILE%\.claude.json, available everywhere
claude mcp add tigergraph --scope user `
  --env TG_HOST=https://xxx.i.tgcloud.io `
  --env TG_TGCLOUD=true `
  --env TG_SECRET=your_secret `
  --env TG_GRAPHNAME=MyGraph `
  -- tigergraph-mcp
```

On Windows, PowerShell continues a line with a **backtick**, not a backslash. If you paste the macOS version into PowerShell it will fail.

Prefer to edit the file yourself? Back it up first, then add `mcpServers` as a **top-level** key — a sibling of `projects`, never nested inside it:

**macOS** (Terminal):

```bash
cp ~/.claude.json ~/.claude.json.backup
```

**Windows** (PowerShell):

```powershell
copy $env:USERPROFILE\.claude.json $env:USERPROFILE\.claude.json.backup
```

The file is `~/.claude.json` on macOS and `%USERPROFILE%\.claude.json` on Windows:

```json
{
  "projects": { … },
  "mcpServers": {
    "tigergraph": {
      "command": "tigergraph-mcp",
      "env": {
        "TG_HOST": "https://xxx.i.tgcloud.io",
        "TG_TGCLOUD": "true",
        "TG_SECRET": "your_secret",
        "TG_GRAPHNAME": "MyGraph"
      }
    }
  }
}
```

> **Careful:** Claude Code rewrites this file while it is running. Edit it only with Claude Code fully closed, or your change will be overwritten.

#### Cursor

Cursor reads MCP servers from a JSON file. Create it if it does not exist:

| Scope | File |
| --- | --- |
| **Global** — every project | macOS: `~/.cursor/mcp.json` · Windows: `%USERPROFILE%\.cursor\mcp.json` |
| **Project** — one folder | `.cursor/mcp.json` in the project root |

Global is the right default. Paste this in full — the file holds nothing else:

```json
{
  "mcpServers": {
    "tigergraph": {
      "command": "tigergraph-mcp",
      "env": {
        "TG_HOST": "https://xxx.i.tgcloud.io",
        "TG_TGCLOUD": "true",
        "TG_SECRET": "your_secret",
        "TG_GRAPHNAME": "MyGraph"
      }
    }
  }
}
```

You can also reach this through the UI: **Settings → Tools & MCP → Add new MCP server**, which opens the same file.

> **Windows:** Use **forward slashes or doubled backslashes** in JSON. A single `\` is an escape character, so `C:\Users\me` breaks the file — write `C:/Users/me` or `C:\\Users\\me`.

Cursor uses the same **mcpServers** key as Claude Code, so the inner block is identical across both editors. Only the file path differs.

> **If PATH failed:** If step 2 printed nothing, replace `"tigergraph-mcp"` with the full path to the executable. On Windows, remember the doubled backslashes.

### 5. Restart, then check it loaded

**Claude Code:** Quit Claude Code completely and reopen it. Config is read once at startup, so a new tab or window is not enough. Then run this in Terminal (macOS) or PowerShell (Windows):

```bash
claude mcp list
```

`tigergraph` should appear in the list.

**Cursor:** Reload Cursor, then open **Settings → Tools & MCP**. You should see `tigergraph` listed with a green indicator and a tool count beside it. If the indicator is red or spinning, click it to expand the error — it usually names a bad path or a malformed JSON file.

> **Loaded:** Seeing the server listed means the config was found and the process started. It does not yet prove the credentials work — step 6 does that.

### 6. Talk to your graph

Open the chat (in Claude Code, the Claude Code chat; in Cursor, the Cursor chat in Agent mode) and type this in plain English — no special syntax:

```text
List my TigerGraph connections
```

Cursor needs to be in **Agent** mode to call tools. Ask mode will not use the MCP.

Your host, graph name and auth mode should come back. Then try:

```text
Show me the schema of my graph
```

> **Done:** If the schema comes back, the install is complete and verified end to end. You now have all 69 tools available.

## What you just unlocked

69 tools across nine areas. Loading data from a warehouse is only one of them — you can ask for any of this in plain English.

| Area | What it does | Details |
| --- | --- | --- |
| **Schema** | Design the graph | Create graphs, add vertex and edge types, evolve a schema in place. |
| **Query** | Write and run GSQL | Generate queries from a description, install them, run them, read results. |
| **Data** | Load from anywhere | S3, GCS, Azure Blob, Snowflake, BigQuery, PostgreSQL, Kafka, Iceberg. |
| **Nodes** | Read and write vertices | Add, fetch, update and delete nodes one at a time or in bulk. |
| **Edges** | Traverse relationships | Create edges, find neighbours, check degrees and connectivity. |
| **Vectors** | Similarity search | Store embeddings on vertices and run top-k nearest-neighbour search. |
| **Stats** | Measure the graph | Vertex and edge counts, node degrees, graph-level details. |
| **GSQL** | Raw passthrough | Send GSQL directly when you want exact control over a statement. |
| **Connections** | Many environments | Named profiles for dev, staging and production in one config. |

## If something goes wrong

The failures that come up most on a first install, and what each one actually means.

| Symptom | Cause | Fix |
| --- | --- | --- |
| Server never appears | Config not loaded | **Claude Code:** Fully quit and reopen Claude Code. Check `mcpServers` sits at the top level of `.claude.json`, not inside `projects`. **Cursor:** Reload Cursor. Confirm the file is at `~/.cursor/mcp.json` (macOS) or `%USERPROFILE%\.cursor\mcp.json` (Windows) and the top-level key is `mcpServers`. |
| `spawn ENOENT` | Command not on `PATH` | Use the absolute path from step 2 as `command`. On Windows, write it with forward slashes or doubled backslashes. |
| `pip: command not found` | Python not installed or not on `PATH` | **macOS:** Try `python3 -m pip install tigergraph-mcp`. **Windows:** Reinstall Python with **“Add python.exe to PATH”** ticked, or try `py -m pip install tigergraph-mcp`. |
| Server loads, tools fail | Bad credentials or host | Check `TG_HOST` includes `https://`, and that `TG_TGCLOUD` is `true` for a Savanna instance. |
| Config file edits vanish | Editor rewrote the file | **Claude Code:** Claude Code saves state to `.claude.json` as it runs. Close it before editing by hand. **Cursor:** Save and close the file in Cursor before reloading the window, so the editor does not hold a stale buffer. |
| Tools are listed but never used | Wrong chat mode | **Claude Code:** Claude Code uses tools automatically. If it is not, ask more directly: “use the TigerGraph tools to…”. **Cursor:** Switch the chat from Ask to **Agent** mode. Only Agent mode can call MCP tools. |
| JSON errors after editing | Trailing comma or stray backslash | Validate with `python3 -m json.tool < ~/.cursor/mcp.json` (macOS) or `python -m json.tool < $env:USERPROFILE\.cursor\mcp.json` (Windows) and restore your backup if needed. |

## The short version

`pip install tigergraph-mcp` → put your TigerGraph credentials in the `env` block of your editor's config file → restart → ask “List my TigerGraph connections”.

The config file is:

- **Claude Code:** `~/.claude.json` (macOS) or `%USERPROFILE%\.claude.json` (Windows)
- **Cursor:** `~/.cursor/mcp.json` (macOS) or `%USERPROFILE%\.cursor\mcp.json` (Windows)

There is no server to deploy and no port to open. The MCP runs on this machine, started by your editor on demand.

---

This guide is also available as an [interactive page](https://mcp-setup.netlify.app/) where you pick your system and editor, and every command updates to match.
