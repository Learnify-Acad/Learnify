# HTML Structure Fix Script
# This file documents the HTML structure issue found in competition.html

## Problem Found:
Lines 430-533 in competition.html have a critical structure issue:

The rubric download card (starting line 430) is NOT CLOSED properly.
Instead, the contact section (line 439) and footer (line 486) are NESTED INSIDE this card.

This causes all three sections to appear merged in one big card on the page.

## What needs to happen:
1. Close the rubric card div at line 437 (after the download button)
2. Close the downloads grid div  
3. Close the downloads section
4. THEN start the contact section (as a separate section, not nested)
5. THEN start the footer (as a separate footer, not nested)

## Current Structure (WRONG):
```
<div class="card"> <!-- Rubric card starts line 430 -->
    <h4>معايير التقييم</h4>
    <button>تحميل</button>
    
    <section class="contact"> <!-- WRONG: Inside the card! line 439 -->
        ...contact content...
    </section>
    
    <footer> <!-- WRONG: Inside the card! line 486 -->
        ...footer content...
    </footer>
</div>
```

## Correct Structure (NEEDED):
```
<div class="card"> <!-- Rubric card -->
    <h4>معايير التقييم</h4>
    <button>تحميل</button>
</div> <!-- CLOSE card -->
</div> <!-- CLOSE downloads grid -->
</div> <!-- CLOSE container -->
</section> <!-- CLOSE downloads section -->

<section class="contact"> <!-- NEW separate section -->
    ...contact content...
</section>

<footer> <!-- NEW separate footer -->
    ...footer content...
</footer>
```

## Manual Fix Required:
1. Open competition.html
2. Go to line 437 (after the rubric download button closes)
3. Add these closing tags:
   ```html
   </div>  <!-- Close rubric card -->
   </div>  <!-- Close downloads grid -->
   </div>  <!-- Close container -->
   </section>  <!-- Close downloads section -->
   ```
4. Remove the extra indentation from contact section (line 439) - it should NOT be indented as if inside a card
5. Remove the extra indentation from footer (line 486)
