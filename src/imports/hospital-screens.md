HOSPITAL BACKEND (WEB) REQUIRED SCREENS (ADD 6 SCREENS)
Create a Web Admin + Staff UI (1440 grid) with role-based navigation.

Roles:
- Front Desk
- Nurse / Triage
- Doctor
- Queue Supervisor
- Help Desk
- Admin

Backend Screen A: Front Desk Registration + Token Issuance
- Patient search (phone, MRN, ABHA, slip QR)
- Create visit, choose department/doctor, assign arrival window
- Proxy relationship capture
- Print/SMS token slip with QR
- Flags: elderly, wheelchair, translator, urgent

Backend Screen B: Triage + Vitals Check-in
- “Mark Arrived” scan QR
- Record vitals templates
- Assign priority tier (routine/priority/urgent)
- Route to consult room or lab

Backend Screen C: Doctor Queue Console (Real-time)
- Now Serving card + timer
- Call next, recall, skip, mark no-show, redirect
- Emergency interrupt button: insert 5/10/15 min block
- Fast-lane toggle for short tasks
- Show patient summary + last visit context (minimal, privacy safe)

Backend Screen D: Department Queue Supervisor Dashboard
- Multi-doctor queue overview
- Bottleneck alerts and staffing recommendations
- Reassign tokens between doctors
- Pause/resume queue and set doctor delay reason

Backend Screen E: Navigation + Help Desk
- Search token, show gate-to-clinic steps
- Print mini-map and directions
- Reschedule, lost token recovery
- Multi-language guidance scripts

Backend Screen F: Admin Settings + Integrations
- Service time configuration by specialty
- Emergency reserve rate configuration
- Clinic schedules and room mapping
- ABHA/Health ID integration settings (pluggable)
- Audit logs, roles, permissions

Accessibility (backend too):
- Keyboard navigation, strong focus states
- Dense mode vs comfortable mode toggle
- High contrast and large text mode for staff kiosks