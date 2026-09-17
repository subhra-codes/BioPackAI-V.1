# BioPack AI 2.0

A polished, demo-ready intelligent packaging decision platform for food and agri-food packaging.

## Run

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Build

```bash
npm run build
npm run preview
```

## Demo flow for the panel

1. Overview → explain the problem and platform.
2. Analyze → choose Alphonso Mango.
3. Conditions → show temperature, humidity, transit and cold-chain.
4. Priorities → move Sustainability/Shelf-life sliders.
5. Recommendation → show suitability score and alternatives.
6. View score breakdown → explain the transparent decision logic.
7. Compare → show three materials side by side.
8. Library → show the structured material knowledge base.
9. AI Assistant → ask “Why this material?”
10. History → show saved decisions.

## Important

The recommendation and preservation model in this demo is a decision-support simulation, not a substitute for laboratory validation or regulatory approval. Critical commercial decisions should be validated with experimental packaging and shelf-life studies.


## BioPack AI 2.1 — Priority Normalization

The Analyze workflow uses independent user-facing Priority Scores (0–100). Affordability, Shelf-life, and Sustainability may each be set to 100 because they represent importance levels, not final percentages of the decision.

Before material scoring, BioPack AI normalizes the three values so the business-priority weights always total 100%. The final suitability model combines 35% technical protection with 65% of these normalized business-priority weights.

Example: 100 / 100 / 100 → 33.3% / 33.3% / 33.4% decision weights.

## BioPack AI 2.1 — Full feature parity additions

The existing page structure and analysis workflow are preserved. The enhanced build keeps the current Overview, Analyze, Compare, Library and History pages while adding the core functionality from the reference BioPack AI experience inside those existing pages:

- Quick-demo scenario presets for mango, paneer, spices and strawberries.
- Explainable recommendation radar and alternative matrix.
- Technical/regulatory barrier comparison with OTR, WVTR, puncture resistance, cost, bio-based content, recyclability and food-contact reference fields.
- Vendor matching for the recommended material.
- Batch/MOQ calculator, estimated order cost and unit estimate.
- Indian supplier cards with ratings, locations, lead times and certifications.
- CO2e offset estimate for the selected batch.
- RFQ generation with a reference ID.
- Vendor assignment and procurement-ready state.
- Decision dossier with normalized decision weights and assigned supplier.
- Existing preservation simulation, compare workspace, library, history and assistant remain in place.
