---
id: "prj_5e227e"
team: "ByteFours"
title: "Health Hack"
round: null
repo_url: "https://github.com/Eesha0407/Health-Hack.git"
demo_url: "https://drive.google.com/file/d/1BT20HcL1uT8NAB_SkL56Nv992p3LupjE/view?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:17:51+05:30"
---

## How the team used TigerGraph

The integration of TigerGraph into HealthHack 2.0 transforms the application from a static tracker into a dynamic decision engine that performs real-time graph traversals to ensure user safety.
1. The Backend Bridge (Flask & REST API)
The solution uses a Python/Flask backend to act as a secure intermediary between the web frontend and the TigerGraph Cloud instance.
    ●Data Mapping: On startup, the backend loads local CSV files (like injuries.csv and exercise.csv) to map user-friendly names to specific internal Graph IDs.
     ●Endpoint Routing: When a user selects an injury, the frontend hits a Flask endpoint (/api/get_safe_workouts), which triggers the graph logic.

2. GSQL Query Execution
The core intelligence resides in a custom GSQL query named find_safe_workouts hosted on the TigerGraph engine.
      ●Parameterized Traversal: The Flask app sends the specific injury_id to this query via a RESTful GET request.
      ●Graph Logic: The engine traverses the relationships between Injuries, Muscles, and Exercises to identify which workout nodes are "safe" (not connected to aggravated muscle nodes) and which should be pruned.

3. Secure Authentication
To maintain data integrity and security, the integration utilizes GSQL-Secret authentication.
      ●The Flask backend includes an Authorization header containing a unique secret key for every request made to the TigerGraph RESTPP server.
      ●This ensures that the sensitive biological relationship data within the graph is only accessible by the authorized application.

4. Dynamic Frontend Consumption
Once TigerGraph returns the results, the solution processes the vertex data and updates the UI instantly.
      ●Safe Workout Display: The workouts.html page receives a list of safe exercise names and renders them as interactive cards.
      ●Biological Insights: The injuries.html page uses graph traversal insights to explain which specific muscle groups (e.g., Quadriceps or Deltoids) are currently under constraint based on the active injury.

## Links

- Slides: https://canva.link/5gepeaq5h2nfrv4
