Design a “World-Class Patient-Centered Hospital Appointment & Live Queue Tracking System” for high-volume South Asian OPDs (AIIMS / Bir Hospital / Apollo-type chains). This is not a generic scheduling app. Assume chaotic campuses, multilingual users, shared phones, assisted bookings, walk-ins, doctor delays, and emergency interrupts.

GOALS
1) Reduce crowding by showing real-time token/queue status with ETA ranges and arrival guidance.
2) Support assisted booking for illiterate parents and elderly users.
3) Work reliably in low connectivity environments with offline-first caching and sync.
4) Government ID portability readiness: ABHA (India) and future National Health ID (Nepal) via a pluggable identity layer.
5) WCAG 2.1 AAA accessibility with Devanagari (Hindi) and Nepali scripts.

PLATFORMS + LAYOUT
- Create both Mobile (primary) and Web (secondary staff/family use).
- Mobile frames: 360 x 800, 8pt spacing system, 4-column grid, 16px margins.
- Web frames: 1440 width, 12-column grid, 80px max content gutter, responsive breakpoints at 1280/1024/768.
- Use large touch targets (minimum 48x48), generous line spacing, and high legibility for elderly.

DESIGN SYSTEM (TOKENS)
Color palette (define tokens with accessible contrast):
- Primary: “Healing Teal” (brand safe, calming)
- Secondary: “Trust Blue” (reassurance and authority)
- Neutrals: warm gray scale for readability
- Semantic:
  - Success (confirmed booking)
  - Warning (delays, late policy)
  - Danger (emergency interrupt notices)
  - Info (navigation tips)
Accessibility: all text must meet AAA contrast targets; provide an alternate high-contrast mode toggle.

Typography (support local scripts):
- Use an accessible, highly legible sans-serif family that supports Devanagari + Nepali well.
- Type scale tokens:
  - Display 24/32 (screen titles)
  - H1 20/28
  - H2 18/26
  - Body 16/24 (default)
  - Large Body 18/28 (elder mode)
  - Caption 14/20 (avoid smaller than 14)
- Define language-aware line height for Devanagari/Nepali to avoid clipping.
- All components must support dynamic text expansion + 200% zoom.

Core components (build as variants with states)
1) Language + Script Toggle
- Hindi (Devanagari), Nepali (Devanagari), English
- Persist choice; allow caregiver to switch for patient.
2) Patient Profile Switcher (“Family Wallet”)
- Multiple profiles under one phone; privacy PIN for sensitive info.
3) Doctor Card (search + listing)
- Doctor name, qualifications, specialty, languages, clinic location, fees range, earliest slot, “on duty today” indicator.
- Variant for government OPD vs private wing.
4) Department Card
- OPD name, building, floor, average wait, next available token window.
5) Slot Picker + Arrival Window Selector
- Users choose a time window; show expected queue load by color + text.
6) Token / Queue Counter Component
- “Now Serving”, “You Are”, ETA range, last updated time, and offline cached state.
7) Emergency Interrupt Banner
- Explains delay in plain language; shows expanded ETA range; includes empathy microcopy.
8) Navigation Stepper
- Landmark based steps from gate to clinic; includes accessible route toggle (elevator/ramp).
9) Offline / Low Connectivity Status Bar
- “Working offline, last synced at …” + retry.
10) Help / Assistance CTA
- “Call help desk”, “Find a volunteer desk”, “Show this screen at counter” QR.

USER FLOW (5 MOBILE SCREENS)
Screen 1: Entry + Language + Booking Mode
- Choose language, choose “Book for myself” vs “Book for someone else (Parent/Family)”
- Show “Assisted booking available: call / kiosk / counter”
- Accessibility toggles: Elder Mode (bigger text), High Contrast, Voice Guidance

Screen 2: Find Care (Doctor/Department)
- Search by specialty, symptom keywords, or “scan old OPD slip” placeholder
- Show doctor cards with credentials + transparent fees range
- Filters: location (building), language spoken, earliest availability, government vs private

Screen 3: Appointment Details + Verification (Progressive)
- Select time window, visit type (new/follow-up), basic triage questions
- Optional: Link ABHA / Health ID (do not block booking)
- Show required documents checklist + estimated total cost range

Screen 4: Confirmation + Directions + Token
- Large confirmation state
- QR + Token number + arrival guidance (“arrive between …”)
- Landmark directions stepper + accessible route toggle
- Button: “Download/Share slip” and “Show at counter”

Screen 5: Live Queue Tracking (Day-of)
- “Now serving token …”, “You are …”, ETA range, confidence indicator
- Notifications timeline: T-60 / T-20 / T-5 prompts
- Emergency interrupt banner when needed
- Offline cached queue view with last updated timestamp
- Quick actions: reschedule, request assistance, call help desk

WEB STAFF VIEW (ONE OPTIONAL FRAME)
- Queue dashboard for a department: tokens list, priorities, emergency insert, mark no-show, update doctor delay, print slip.

CONTENT + MICROCOPY REQUIREMENTS
- Use plain language, local context phrasing, avoid jargon.
- Always show what happens next and where to go physically.
- Include “late policy” and “missed token” recovery instructions.
- Make price transparency prominent.

ACCESSIBILITY (WCAG 2.1 AAA)
- Keyboard navigable web UI with clear focus states.
- Screen reader labels for all controls; language tags per script.
- No color-only indicators; include icons + text.
- Motion reduced mode; avoid flashing; long press alternatives.
- Ensure forms have error prevention and clear recovery guidance.

Deliverables:
- A tokenized design system page
- Component library with variants and states
- 5 mobile screens as above with realistic OPD content and chaos-aware UX details
- Optional: 1 web staff dashboard frame