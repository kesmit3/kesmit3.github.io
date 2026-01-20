# Uplift Education — Official Color Reference

*Source: Uplift_Style-Guide.pdf (July 2021)*

---

## 🎨 Network Brand Colors

These are the ONLY official colors for Uplift Education network-wide materials.

| Name | PMS | Hex | RGB | CMYK | Usage |
|------|-----|-----|-----|------|-------|
| **Uplift Blue** | 293 | `#0067b1` | R0 G103 B177 | C100 M57 Y0 K2 | Primary brand, logos |
| **Uplift Yellow** | 123 | `#ffc425` | R255 G196 B37 | C0 M24 Y94 K0 | Logo sun, accents |
| **Uplift Orange** | 179 | `#f15d22` | R241 G93 B34 | C0 M79 Y100 K0 | Department logos |
| **Gray** | 877 | `#8e8e91` | R142 G142 B145 | C46 M38 Y36 K4 | Secondary elements |

---

## 🔵 Blue Variants (from School Palettes)

| Name | PMS | Hex | Schools Using |
|------|-----|-----|---------------|
| Uplift Blue | 293 | `#0067b1` | Network, Williams, Hampton |
| Dark Blue | 295 | `#004b85` | Atlas, Gradus, Triumph, Williams |
| Navy Blue | 281 | `#00205C` | Elevate |
| Navy Blue | 282 | `#002d62` | Lee |
| Light Blue | 279 | `#5091cd` | Lee |
| Bright Blue | 2925 | `#0097d7` | Crescendo, Summit |
| Powder Blue | 551 | `#a0c4da` | Grand |

---

## 🟡 Yellow/Gold Variants

| Name | PMS | Hex | Schools Using |
|------|-----|-----|---------------|
| Uplift Yellow | 123 | `#ffc425` | Network, Hampton, Williams, Pinnacle |
| Gold | 124 | `#eeb310` | Infinity |
| Tan/Cream | 467 | `#e7d2ad` | Luna |
| Gold Metallic | 874 | `#bc9b6a` | Mighty |

---

## 🟠 Orange/Red Variants

| Name | PMS | Hex | Schools Using |
|------|-----|-----|---------------|
| Uplift Orange | 179 | `#f15d22` | Network departments |
| Burnt Orange | 1595 | `#e67a1e` | Heights |
| Deep Orange | 159 | `#e36f1e` | Luna, Mighty |
| Red | 186 | `#e31837` | Hampton, Gradus |
| Maroon | 201 | `#a90533` | Atlas |
| Dark Maroon | 188 | `#8b0e04` | Luna |
| Burgundy | 1807 | `#b5121b` | Mighty |

---

## 🟢 Green Variants

| Name | PMS | Hex | Schools Using |
|------|-----|-----|---------------|
| Bright Green | 368 | `#76bd22` | Ascend |
| Lime Green | 376 | `#8dc63f` | Triumph, Wisdom |
| Yellow-Green | 382 | `#c1d22f` | White Rock Hills |
| Forest Green | 342 | `#006647` | White Rock Hills |
| Deep Green | 356 | `#008348` | Infinity |

---

## 🟣 Purple Variants

| Name | PMS | Hex | Schools Using |
|------|-----|-----|---------------|
| Purple | 269 | `#46166b` | Pinnacle, Wisdom |
| Light Purple | 271 | `#9695d3` | Elevate |
| Magenta | 222 | `#7a003c` | Crescendo, Summit |

---

## 🏫 School Color Quick Reference

| School | Primary | Secondary | Accent |
|--------|---------|-----------|--------|
| **Network** | `#0067b1` Blue | `#ffc425` Yellow | `#f15d22` Orange |
| Ascend | `#76bd22` Green | `#231f20` Black | `#8e8e91` Gray |
| Atlas | `#a90533` Maroon | `#004b85` Navy | `#8e8e91` Gray |
| Crescendo | `#0097d7` Blue | `#7a003c` Magenta | `#8e8e91` Gray |
| Elevate | `#00205C` Navy | `#9695d3` Purple | `#8e8e91` Gray |
| Gradus | `#e31837` Red | `#004b85` Navy | `#8e8e91` Gray |
| Grand | `#a0c4da` Lt Blue | `#231f20` Black | `#8e8e91` Gray |
| Hampton | `#0067b1` Blue | `#e31837` Red | `#8e8e91` Gray |
| Heights | `#e67a1e` Orange | `#004b85` Navy | `#8e8e91` Gray |
| Infinity | `#008348` Green | `#eeb310` Gold | `#8e8e91` Gray |
| Lee | `#002d62` Navy | `#5091cd` Lt Blue | `#8e8e91` Gray |
| Luna | `#e36f1e` Orange | `#e7d2ad` Tan | `#8e8e91` Gray |
| Mighty | `#b5121b` Burgundy | `#bc9b6a` Gold | `#8e8e91` Gray |
| Pinnacle | `#46166b` Purple | `#ffc425` Yellow | `#8e8e91` Gray |
| Summit | `#7a003c` Magenta | `#0097d7` Blue | `#8e8e91` Gray |
| Triumph | `#004b85` Navy | `#8dc63f` Green | `#8e8e91` Gray |
| White Rock | `#006647` Green | `#c1d22f` Lime | `#8e8e91` Gray |
| Williams | `#004b85` Navy | `#ffc425` Yellow | `#8e8e91` Gray |
| Wisdom | `#46166b` Purple | `#8dc63f` Green | `#8e8e91` Gray |

---

## ⚠️ Purpose Engine Color Mapping

For the Purpose Engine application, we'll use the **network colors** as our base, with semantic extensions:

```css
/* Primary Brand */
--uplift-blue: #0067b1;      /* PMS 293 - Main brand color */
--uplift-yellow: #ffc425;    /* PMS 123 - Logo, celebrations */
--uplift-orange: #f15d22;    /* PMS 179 - Accents, alerts */
--uplift-gray: #8e8e91;      /* PMS 877 - Neutral */

/* Extended Palette for UI */
--navy: #0D1421;             /* Dark backgrounds (not official, but needed for UI) */
--success: #10B981;          /* Green for celebrations/wins */
--warning: #F59E0B;          /* Amber for attention needed */
--danger: #EF4444;           /* Red for errors */
--ai-purple: #8B5CF6;        /* Purple for AI features */
```

---

## 🚫 DO NOT USE

These colors were incorrectly used in earlier prototypes:

| Wrong Color | Correction |
|-------------|------------|
| `#00838F` (teal) | Use `#0067b1` (Uplift Blue) |
| `#006064` (dark teal) | Use `#004b85` (Dark Blue PMS 295) |
| `#4DB6AC` (light teal) | Use `#5091cd` (Light Blue PMS 279) |

---

## 📐 Logo Usage Notes

From the Style Guide:

1. **Inside of sun icon SHALL remain white** when logo is on colored background
2. **Do NOT** use hand/sun icon independently without "Uplift Education" words
3. **Minimum sizes:**
   - Print/digital: 1/2" tall (horizontal) or 1-1/4" wide (vertical)
   - Apparel: 3/4" tall (horizontal) or 1-1/4" wide (vertical)
4. **Do NOT** scale disproportionately
5. **One-color versions** should be white, black, or PMS 293 blue

---

*Last Updated: January 17, 2025*
*Reference: Uplift_Style-Guide.pdf (July 2021)*
