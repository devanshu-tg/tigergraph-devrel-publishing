---
id: "prj_69cd9a"
team: "kingbhadawar0"
title: "NO PROXY ATTENDANCE SYSTEM"
round: null
repo_url: "https://github.com/byteforge-765/NO-PROXY-ATTENDANCE-SYSTEM.git"
demo_url: "https://drive.google.com/drive/folders/173sCoGnOan-xfFim6fadszvhaScXKTbU?usp=sharing"
placement: null
prize: null
image_url: null
updated_at: "2026-10-14T19:20:31+05:30"
---

## How the team used TigerGraph

attendance pattern analysis / proxy detection graph

1. TigerGraph Client
Token management, REST++ calls, vertex/edge upsert, query runner
Auto mock-mode

2. TigerGraph Graph Schema
Vertices: Student, Class, Faculty, Department
Edges: ATTENDED (face_confidence, gps_distance), ABSENT_FROM, TEACHES, ENROLLED_IN
4 GSQL queries pre-installed: proxy detection, attendance pattern, low attendance, consecutive absences

3. TigerGraph Service 
syncStudent, syncClass, syncAttendancePresent, syncAttendanceAbsent
bulkSyncClassAttendance — full class sync
detectProxyCandidates, getAttendancePattern, getLowAttendanceStudents

4. TigerGraph Controller + Routes
GET health — TigerGraph connection check
GET proxy-detection: class_id — Proxy suspects
GET attendance-pattern:student_id — Graph pattern analysis
GET low-attendance?batch=X&threshold=75 — At-risk students
GET consecutive-absences:student_id
POST sync class:class_id — Manual sync

5. Auto-sync — Jab bhi student attendance mark hoti hai (OTP verify), TigerGraph mein automatically sync hoti hai.

## Links

- Slides: https://drive.google.com/drive/folders/173sCoGnOan-xfFim6fadszvhaScXKTbU?usp=sharing
