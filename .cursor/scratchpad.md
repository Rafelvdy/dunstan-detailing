# Dunstan Detailing - iOS Mobile Viewport Height Issue

## Background and Motivation

**NEW CRITICAL ISSUE IDENTIFIED**: The website has a severe mobile UX issue on iOS Safari where the services content (and other sections) expand and contract when scrolling up/down. This happens because the site uses `100dvh` (dynamic viewport height) units which respond to iOS Safari's URL bar showing/hiding behavior.

**Previous Issue**: The desktop navigation bar had responsive design challenges, but this new viewport issue takes priority as it affects the core user experience on mobile.

## Key Challenges and Analysis

### 1. **Dynamic Viewport Height Problem**
**Root Cause**: The CSS uses `100dvh` units throughout the site:
- `.HeroContainer { height: 100dvh; }`
- `.AboutContainer { height: 100dvh; }`  
- `.ServicesContainer { height: 100dvh; }`
- `.GalleryContainer { height: 275dvh; }`

**What happens on iOS Safari**:
1. User scrolls up → URL bar hides → viewport height increases → `dvh` recalculates → content expands
2. User scrolls down → URL bar shows → viewport height decreases → `dvh` recalculates → content contracts
3. This creates a constant resize effect that makes the website feel unstable and janky

### 2. **Impact on User Experience**
- Services section constantly resizes during scroll
- Content appears to "breathe" or "bounce" 
- Breaks the flow of scrolling interaction
- Makes the website feel unprofessional and buggy
- Particularly noticeable on the Services section due to its layout

### 3. **Technical Solutions Available**
**Option 1: Use Static Viewport Height (`100vh`)**
- Replace `100dvh` with `100vh` (ignores URL bar changes)
- Pros: Stable, consistent behavior
- Cons: Content might be cut off when URL bar is visible

**Option 2: CSS Environment Variables**
- Use `height: 100vh; height: 100dvh;` (fallback approach)
- Or use `env(viewport-height)` when supported

**Option 3: JavaScript Solution**
- Dynamically calculate and set heights using `window.innerHeight`
- More complex but gives full control

## High-level Task Breakdown

### Phase 1: Immediate Fix - Replace dvh Units ⚡
- [ ] **CRITICAL**: Replace `100dvh` with `100vh` in main containers
- [ ] Test on iOS Safari to verify fix
- [ ] Ensure no content gets cut off with new heights

### Phase 2: Fine-tune Mobile Experience
- [ ] Adjust any layout issues caused by fixed viewport heights
- [ ] Test across different mobile devices and orientations
- [ ] Optimize for edge cases (very small screens, landscape mode)

### Phase 3: Advanced Mobile Optimizations
- [ ] Consider implementing JavaScript-based height calculation for perfect control
- [ ] Add CSS environment variable support for future-proofing
- [ ] Performance testing on mobile devices

### Phase 4: Cross-Device Testing
- [ ] Test on multiple iOS versions and devices
- [ ] Verify Android behavior remains good
- [ ] Desktop compatibility check

## Project Status Board

### URGENT Current Tasks
- [x] **COMPLETED**: Replace all `100dvh` and `275dvh` with `100vh` equivalents
- [ ] Test Services section behavior on iOS Safari
- [ ] Verify Hero, About, and Gallery sections remain properly sized

### Medium Priority
- [ ] Fine-tune any layout adjustments needed after dvh → vh change
- [ ] Implement more sophisticated mobile viewport handling if needed

### Completed Tasks
- [x] **CRITICAL DISCOVERY**: Identified `100dvh` as root cause of iOS expanding/contracting issue
- [x] Full codebase analysis completed
- [x] Located all problematic CSS classes using dynamic viewport units
- [x] **FIXED**: Replaced all `100dvh` → `100vh` and `275dvh` → `275vh` in CSS
- [x] **FIXED**: Updated responsive breakpoints to use `vh` instead of `dvh`

## Current Status / Progress Tracking

**Status**: CRITICAL FIX IMPLEMENTED ✅
**Current Focus**: Testing the fix on iOS Safari to verify the expanding/contracting issue is resolved

### Specific Problem Analysis

**Files Affected**: `src/app/page.module.css`

**Problematic CSS Classes**:
```css
.HeroContainer { height: 100dvh; }        ← Line 102
.AboutContainer { height: 100dvh; }       ← Line 233  
.ServicesContainer { height: 100dvh; }    ← Line 329
.GalleryContainer { height: 275dvh; }     ← Line 371
```

**The Fix**:
```css
.HeroContainer { height: 100vh; }         ← Static viewport
.AboutContainer { height: 100vh; }        ← Static viewport  
.ServicesContainer { height: 100vh; }     ← Static viewport
.GalleryContainer { height: 275vh; }      ← Static viewport (or calculate better)
```

### Why This Happens
1. **Dynamic Viewport Height (`100dvh`)**: Recalculates when browser UI changes
2. **iOS Safari URL Bar**: Hides/shows during scroll, changing viewport size
3. **CSS Recalculation**: Every URL bar change triggers height recalculation
4. **Visual Result**: Content appears to expand/contract during scroll

### Success Criteria
✅ **Fix Complete When**:
- Services section stops expanding/contracting during iOS scroll
- All content remains properly sized and accessible
- No content gets cut off at bottom of viewport
- Smooth scrolling experience restored

## Executor's Feedback or Assistance Requests

**IMPLEMENTATION COMPLETE** ✅ 

### Changes Made:
1. **Fixed all viewport height units** in `src/app/page.module.css`:
   - `.HeroContainer`: `100dvh` → `100vh`
   - `.AboutContainer`: `100dvh` → `100vh`
   - `.ServicesContainer`: `100dvh` → `100vh`
   - `.GalleryContainer`: `275dvh` → `275vh`

2. **Fixed responsive breakpoints**:
   - `@media (min-width: 600px)`: `280dvh` → `280vh`
   - `@media (min-width: 1440px)`: `305dvh` → `305vh`

### Next Steps:
**Please test the website on iOS Safari** to verify:
- Services section no longer expands/contracts during scroll
- All sections maintain proper heights
- No content is cut off
- Scrolling feels smooth and stable

The fix should be immediately noticeable - the "breathing" or expanding/contracting effect should be completely eliminated.

## Lessons

- **Never use `100dvh` on mobile-first websites** - Always prefer `100vh` for stability
- **iOS Safari's dynamic viewport** causes major UX issues with responsive units
- **Dynamic viewport units** should only be used when the resizing behavior is intentionally desired 