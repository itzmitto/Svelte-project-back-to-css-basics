import { parseStylesheet } from './src/lib/utils/cssParser';

const dirtyUserCSS = `
/* ==========================================================================
   THE ULTIMATE PARSER STRESS TEST
   ========================================================================== */

/* 1. Duplicate Selector + Missing Semicolon + Trailing Spaces */
.hero-section {
    display: flex  ;
    flex-direction: column;
    background-color: #2ec27e;
    margin-bottom: 24px       /* Missing semicolon on purpose */
}

/* 2. Live Typo Carnage (User mid-keystroke) */
.hero-section {
    padding: 40px 20p;        /* '20p' is broken. Must heal to type: 'text' */
    border-color: #f;         /* Half-written Hex. Must heal to type: 'text' */
    color: ;                  /* Missing value completely. Must heal to type: 'text' */
    font-weight: 700;
}

/* 3. Multiple Selectors + Deep CSS Functions & Multi-Layered Values */
.card, .modal-popup {
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, #ffffff 100%);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgb(0 0 0 / 6%), inset 0 0 20px #fff;
    width: clamp(300px, 50vw, 800px);
    transform: translate3d(0, calc(-1 * var(--offset, 10px)), 0);
}

/* 4. Overwrite Duplicate (Checks if .card layout merges cleanly or glitches out) */
.card {
    border-radius: 12px;
    box-shadow: none;         /* Overwrites the complex shadow above for .card only */
}

/* 5. Modern Edge Cases & Completely Invalid Specs */
#sidebar {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
    filter: drop-shadow(0px 4px 12px var(--shadow-color, #00000022)) blur(0px);
    unknown-prop-xyz: absolute-nonsense; /* Completely fake property */
}

/* 6. Nested Media Query Ruleset (Checks if csstree deeply traverses inside blocks) */
@media (max-width: 768px) {
    .card {
        width: 100%;
        padding: 1rem;       /* Overwrites yet again inside context! */
    }
}
`;

console.log('--- RUNNING PARSER BENCHMARK ---');
const output = parseStylesheet(dirtyUserCSS);

// Format the object nicely in the terminal so you can read it like a book
console.log(JSON.stringify(output, null, 2));
