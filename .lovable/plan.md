
# Plan: Update Astrology Landing Page

## Changes Overview

### 1. Replace astrologer photo
- Save the uploaded image (image.png - the moon photo) as the main astrologer photo in `src/assets/`
- This replaces the existing `src/assets/astrologer.jpg`
- The other two photos (image-2.png, image-3.png) will be used in the new informational blocks

### 2. Rename "Аделина" to "Вера"
Files to update:
- `src/components/MultiStepQuiz.tsx` -- "Дипломированный астролог Аделина" -> "Дипломированный астролог Вера"
- `src/components/SuccessModal.tsx` -- "Напишите его Аделине" -> "Напишите его Вере"

### 3. Change year 2024 to 2026
- `src/components/Footer.tsx` line 90: "2024" -> "2026"

### 4. Remove all buttons except Telegram in SuccessModal
- Remove WhatsApp button (lines 45-60)
- Remove VK button (lines 79-94)
- Keep only Telegram button, update its link to `https://t.me/m/Z4ZIfl2yYjZi`

### 5. Add 2-3 informational blocks on the first page (Step 1)
Add new sections below the "Получить анализ" button in `MultiStepQuiz.tsx` (step 1 view):

**Block 1 -- "Об астрологии"**: Brief text about what astrology can reveal (relationships, career, health), with a mystical styled card.

**Block 2 -- "Об эксперте Вере"**: Photo (image-2.png) + short bio about experience, certifications, number of consultations.

**Block 3 -- "Что вы получите"**: Photo (image-3.png) + list of what the free analysis includes (natal chart highlights, key planetary aspects, personal recommendations).

Each block will use the existing mystical card styling (`bg-card/20 backdrop-blur-md border-2 border-accent/30 rounded-2xl glow-mystical`).

---

## Technical Details

### Files to modify:
1. **`src/components/MultiStepQuiz.tsx`** -- rename to Вера, add info blocks after the CTA button in step 1
2. **`src/components/SuccessModal.tsx`** -- rename to Вере, remove WhatsApp/VK buttons, update TG link
3. **`src/components/Footer.tsx`** -- change 2024 to 2026

### Files to create:
- Copy `user-uploads://image.png` to `src/assets/astrologer.jpg` (replace existing)
- Copy `user-uploads://image-2.png` to `src/assets/astrologer-2.png`
- Copy `user-uploads://image-3.png` to `src/assets/astrologer-3.png`
