import { useState } from "react";

const accent = "#E86C3A";
const gold = "#D4A843";
const deep = "#1A1209";
const cream = "#FAF5EC";
const sage = "#5C7A5A";


const phases = [
  {
    phase: "Phase 1",
    days: "Days 1–25",
    subtitle: "Reset & Metabolic Repair",
    color: "#E8A87C",
    bg: "#2A1A10",
    focus: "Heal gut inflammation, stabilise blood sugar for PCOD, crush cravings",
    calories: "1450–1550 kcal",
    carbs: "120g",
    protein: "110g",
    fat: "50g",
  },
  {
    phase: "Phase 2",
    days: "Days 26–50",
    subtitle: "Fat Burn & Build",
    color: "#6BBF7A",
    bg: "#0F1F12",
    focus: "Accelerate fat loss, build lean muscle, manage PCOD hormones",
    calories: "1350–1450 kcal",
    carbs: "100g",
    protein: "120g",
    fat: "48g",
  },
  {
    phase: "Phase 3",
    days: "Days 51–75",
    subtitle: "Peak & Lock In",
    color: "#6BAECF",
    bg: "#0D1A22",
    focus: "Maximise definition, sustain energy for dual workouts, solidify habits",
    calories: "1300–1400 kcal",
    carbs: "90g",
    protein: "125g",
    fat: "45g",
  },
];

const mealPlan = [
  {
    time: "7:00 AM",
    label: "Wake-Up Ritual",
    icon: "🌅",
    meals: [
      "500ml warm water with ½ lemon + a pinch of cinnamon",
      "Helps: cortisol regulation, PCOD insulin resistance, digestion kick-start",
    ],
    note: "Do this BEFORE tea or food. Non-negotiable.",
  },
  {
    time: "7:30 AM",
    label: "Breakfast",
    icon: "🍳",
    meals: [
      "Option A — Egg Power Bowl: 3 whole eggs scrambled (coconut oil) + 1 cup sautéed spinach/zucchini + 1 small apple or ½ cup berries",
      "Option B — Protein Idly: 2 homemade wheat/ragi idly + sambar (home-made, lentil-rich) + 2 boiled eggs on side",
      "Option C — Yoghurt Bowl: ¾ cup low-fat Greek yoghurt (lactase drops or lactose-free) + 2 tbsp chia seeds + 1 tbsp flaxseed + ½ cup fresh fruit",
      "Option D — Omelette Wrap: 3-egg omelette with onion, tomato, capsicum + 1 small multigrain roti (no white bread)",
    ],
    note: "Rotate daily. No store-bought granola — too much sugar.",
  },
  {
    time: "8:30 AM",
    label: "Post-Breakfast Tea",
    icon: "🍵",
    meals: [
      "Replace milk tea with: Cinnamon tea OR Spearmint tea (proven to lower androgens in PCOD)",
      "If you MUST have milk: use lactose-free milk (Almarai LF) or oat milk, ½ cup, no sugar",
      "Add 1 tsp raw honey if needed — wean off over 2 weeks",
    ],
    note: "Spearmint tea = your secret PCOD weapon. Drink it daily.",
  },
  {
    time: "11:30 AM",
    label: "Mid-Morning Snack",
    icon: "🥜",
    meals: [
      "Option A: 10 raw almonds + 1 small orange",
      "Option B: 1 hard-boiled egg + cucumber slices + lemon + black pepper",
      "Option C: 1 tbsp peanut butter + 2–3 rice cakes (unsalted)",
    ],
    note: "This kills the pre-lunch binge urge. Do not skip.",
  },
  {
    time: "1:00–1:30 PM",
    label: "Lunch (Meal Prep)",
    icon: "🍱",
    meals: [
      "Base (pick 1): ½ cup brown rice OR 2 whole wheat chapatis OR ½ cup red/brown rice",
      "Protein (pick 1): 150g air-fried chicken breast (marinated in cumin, turmeric, lemon) OR 1 can tuna stir-fried OR 2 eggs + 100g paneer bhurji",
      "Vegetables: 1 large portion stir-fried veggies (broccoli, carrot, beans, capsicum) with coconut oil + mustard seeds",
      "Add: 1 small bowl mixed salad with olive oil + lemon dressing",
    ],
    note: "Prep Tuesday + Friday nights for 2 days. Use airtight containers.",
  },
  {
    time: "2:00 PM",
    label: "Post-Lunch Tea",
    icon: "☕",
    meals: [
      "Green tea OR Black coffee (no sugar, no milk) OR Jeera water",
      "Helps digestion + energy before afternoon desk work",
    ],
    note: "Cut the milk tea here completely. This is the easier swap.",
  },
  {
    time: "4:30–5:00 PM",
    label: "Pre-Workout Snack",
    icon: "⚡",
    meals: [
      "Option A: 1 banana + 10 cashews",
      "Option B: 1 small apple + 1 tbsp almond butter",
      "Option C: ½ cup oats (overnight oats, no-cook) + 1 tbsp chia seeds",
    ],
    note: "Eat 30–45 min before gym. Fuel, not bulk.",
  },
  {
    time: "7:30–8:00 PM",
    label: "Post-Workout Dinner",
    icon: "🥗",
    meals: [
      "Option A — Chicken Stir-Fry: 150g chicken breast (your fave!) stir-fried with capsicum, onion, tomato, spices + 1 cup cauliflower rice OR small portion brown rice",
      "Option B — Egg Curry Light: 3-egg curry (coconut milk base, light) + 1–2 whole wheat appam OR 1 roti",
      "Option C — Fish Option: 150g grilled/baked fish (tilapia, hammour) + steamed veggies + yoghurt dip",
      "Option D — Paneer Tikka: 100g paneer cubed, marinated, air-fried + salad + 1 roti",
    ],
    note: "No carb-heavy meals post 7pm. Protein + veg dominant.",
  },
  {
    time: "10:00–10:30 PM",
    label: "Evening Snack (Optional)",
    icon: "🌙",
    meals: [
      "ONLY if genuinely hungry: ½ cup warm lactose-free milk with turmeric (haldi doodh)",
      "OR: 5 walnut halves + 1 small kiwi",
      "OR: 2 dates (natural sugar, iron boost for PCOD)",
    ],
    note: "This replaces chocolate. Dates are your new chocolate fix.",
  },
];

const chocolatePlan = [
  { week: "Week 1–2", plan: "2 squares dark chocolate (85%+) after dinner ONLY. NOT milk chocolate." },
  { week: "Week 3–4", plan: "1 square dark chocolate + 2 dates. Swap chocolate desire to dates." },
  { week: "Week 5–6", plan: "Dates only + 1 tsp cacao powder in warm milk. No solid chocolate." },
  { week: "Week 7–11", plan: "Cacao in smoothies/milk only. Celebrate how far you've come." },
];

const mealPrepGuide = [
  {
    day: "Tuesday Night",
    tasks: [
      "Marinate & air-fry 300g chicken breast (enough for Wed + Thu lunch)",
      "Cook 1 cup brown rice (lasts 3 days in fridge)",
      "Stir-fry mixed vegetables in bulk (broccoli, beans, capsicum)",
      "Boil 6 eggs (snacks + breakfast rotation)",
      "Portion into 3 lunchboxes",
    ],
  },
  {
    day: "Friday Night",
    tasks: [
      "Repeat chicken or switch to paneer/fish rotation",
      "Prep 2 days of chapati dough, refrigerate",
      "Chop salad vegetables for the weekend",
      "Make overnight oats jars for Sat + Sun pre-workout",
      "Batch-cook sambar/dal (freeze half)",
    ],
  },
];

const waterPlan = [
  { time: "7:00 AM", amount: "500ml (lemon water)", icon: "🍋" },
  { time: "9:00 AM", amount: "300ml (post breakfast)", icon: "💧" },
  { time: "11:30 AM", amount: "300ml (with snack)", icon: "💧" },
  { time: "1:00 PM", amount: "300ml (with lunch)", icon: "💧" },
  { time: "3:30 PM", amount: "300ml (afternoon)", icon: "💧" },
  { time: "5:00 PM", amount: "300ml (pre-workout)", icon: "⚡" },
  { time: "7:30 PM", amount: "500ml (post-workout)", icon: "🏋️" },
  { time: "9:30 PM", amount: "300ml (with dinner)", icon: "💧" },
];

const pcodTips = [
  { icon: "🌿", tip: "Spearmint tea daily", why: "Lowers testosterone, reduces PCOD symptoms" },
  { icon: "🥚", tip: "Protein at every meal", why: "Stabilises insulin, reduces cravings" },
  { icon: "🚫", tip: "No white sugar/refined carbs", why: "PCOD is insulin-driven; sugar is the enemy" },
  { icon: "🥑", tip: "Include healthy fats daily", why: "Required for hormone synthesis" },
  { icon: "🌰", tip: "Flaxseeds + chia seeds daily", why: "Phytoestrogen balance, fibre, anti-inflammatory" },
  { icon: "🥦", tip: "Cruciferous vegetables 4x/week", why: "Broccoli, cauliflower support oestrogen metabolism" },
  { icon: "💊", tip: "Consider: Inositol supplement", why: "Clinically proven for PCOD insulin resistance — ask your doctor" },
  { icon: "😴", tip: "Sleep by 11:30 PM minimum", why: "PCOD worsens with cortisol from sleep deprivation" },
];

const avoidList = [
  "White bread (replace with multigrain/whole wheat)",
  "Store-bought granola (hidden sugars — make your own or skip)",
  "Biriyani & shawarma (outside food = unknown oils, portions, calories)",
  "Daily chocolate (wean off with the plan below)",
  "Milk tea with sugar (swap to herbal/black)",
  "Deep-fried anything",
  "Fruit juices (eat whole fruit instead)",
  "Processed/packaged snacks",
  "Cigarettes (1/day = cortisol spike, kills fat-burn, worsens PCOD)",
];

const weeklyReward = [
  "Week 1: New water bottle or meal prep containers",
  "Week 2: A new workout outfit",
  "Week 3: Facial or self-care evening",
  "Week 4: Progress photos (compare Week 1 vs 4)",
  "Week 5: Cook your favourite healthy recipe as a 'fancy meal'",
  "Week 6: A new book, podcast or experience",
  "Week 7: Spa day or massage",
  "Week 8: New workout gear",
  "Week 9: Celebrate — you are almost there. Plan your Day 76 celebration meal!",
];

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedMeal, setExpandedMeal] = useState(null);

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "meals", label: "Daily Meals" },
    { id: "phases", label: "3 Phases" },
    { id: "mealprep", label: "Meal Prep" },
    { id: "pcod", label: "PCOD Care" },
    { id: "rules", label: "Rules & Tips" },
  ];

  return (
    <div style={{
      background: deep,
      minHeight: "100vh",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      color: cream,
      overflowX: "hidden",
    }}>
      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, #1A1209 0%, #2C1A08 50%, #1A1209 100%)`,
        borderBottom: `2px solid ${accent}`,
        padding: "40px 20px 32px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(ellipse at 20% 50%, rgba(232,108,58,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(212,168,67,0.08) 0%, transparent 60%)",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "11px", letterSpacing: "4px", color: gold, textTransform: "uppercase", marginBottom: "12px" }}>
            Resounding Life · 75 Hard Challenge
          </div>
          <h1 style={{
            fontSize: "clamp(28px, 6vw, 48px)",
            fontWeight: "normal",
            margin: "0 0 8px",
            letterSpacing: "-0.5px",
            color: cream,
          }}>
            Shaziya's Complete
          </h1>
          <h1 style={{
            fontSize: "clamp(32px, 7vw, 56px)",
            fontWeight: "bold",
            margin: "0 0 16px",
            color: accent,
            letterSpacing: "-1px",
          }}>
            75-Day Nutrition Plan
          </h1>
          <div style={{
            display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap",
            fontSize: "13px", color: "rgba(250,245,236,0.7)",
          }}>
            <span>📅 June 8 – Aug 21, 2025</span>
            <span>🎯 70kg → 55kg</span>
            <span>⚡ 1300–1550 kcal/day</span>
            <span>🏥 PCOD-Optimised</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{
        display: "flex", overflowX: "auto", gap: "4px",
        padding: "16px 16px 0",
        borderBottom: `1px solid rgba(232,108,58,0.2)`,
        background: "rgba(255,255,255,0.02)",
      }}>
        {tabs.map(tab => (
          <button key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "10px 18px",
              background: activeTab === tab.id ? accent : "transparent",
              color: activeTab === tab.id ? "#fff" : "rgba(250,245,236,0.6)",
              border: activeTab === tab.id ? "none" : `1px solid rgba(232,108,58,0.2)`,
              borderRadius: "8px 8px 0 0",
              cursor: "pointer",
              fontSize: "13px",
              whiteSpace: "nowrap",
              fontFamily: "Georgia, serif",
              transition: "all 0.2s",
              borderBottom: activeTab === tab.id ? "none" : undefined,
            }}
          >{tab.label}</button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: "24px 16px", maxWidth: "800px", margin: "0 auto" }}>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            {/* Your Stats */}
            <Section title="📊 Your Numbers">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "12px" }}>
                {[
                  { label: "Current Weight", val: "70 kg" },
                  { label: "Target Weight", val: "55 kg" },
                  { label: "To Lose", val: "15 kg" },
                  { label: "BMI Now", val: "29.9" },
                  { label: "Target BMI", val: "23.5" },
                  { label: "Daily Calories", val: "1300–1550" },
                  { label: "Daily Protein", val: "110–125g" },
                  { label: "Daily Water", val: "3+ Litres" },
                ]
                  .map(s => (
                    <div key={s.label} style={{
                      background: "rgba(232,108,58,0.08)",
                      border: "1px solid rgba(232,108,58,0.2)",
                      borderRadius: "12px",
                      padding: "16px",
                      textAlign: "center",
                    }}>
                      <div style={{ fontSize: "22px", fontWeight: "bold", color: accent }}>{s.val}</div>
                      <div style={{ fontSize: "11px", color: "rgba(250,245,236,0.6)", marginTop: "4px" }}>{s.label}</div>
                    </div>
                  ))}
              </div>
            </Section>

            {/* The Strategy */}
            <Section title="🧠 The Strategy for Shaziya">
              <p style={{ lineHeight: 1.8, color: "rgba(250,245,236,0.85)", fontSize: "15px" }}>
                You have PCOD with a BMI of ~30, which means your body is dealing with <strong style={{ color: gold }}>insulin resistance</strong> — the core reason fat clings on and energy crashes hit hard. Your plan is built around three pillars:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
                {[
                  { num: "01", title: "Insulin Stability", desc: "Every meal pairs protein + fibre + healthy fat to prevent blood sugar spikes. No more energy crashes or 3pm brain fog." },
                  { num: "02", title: "Hormone Reset", desc: "Spearmint tea, flaxseeds, and anti-inflammatory foods directly address PCOD. Reducing sugar is more powerful than any supplement." },
                  { num: "03", title: "Real Fat Loss", desc: "A 400–500 calorie daily deficit combined with your 2 daily workouts creates ~0.7kg/week loss — realistic to hit 55kg by Day 75." },
                ].map(p => (
                  <div key={p.num} style={{
                    display: "flex", gap: "16px", alignItems: "flex-start",
                    background: "rgba(255,255,255,0.03)", borderRadius: "10px", padding: "16px",
                    border: "1px solid rgba(212,168,67,0.15)",
                  }}>
                    <div style={{ fontSize: "28px", fontWeight: "bold", color: gold, minWidth: "40px", opacity: 0.6 }}>{p.num}</div>
                    <div>
                      <div style={{ fontWeight: "bold", color: gold, marginBottom: "4px" }}>{p.title}</div>
                      <div style={{ fontSize: "14px", color: "rgba(250,245,236,0.75)", lineHeight: 1.6 }}>{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Avoid List */}
            <Section title="🚫 Foods to Eliminate (Starting Day 1)">
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {avoidList.map((item, i) => (
                  <div key={i} style={{
                    display: "flex", gap: "12px", alignItems: "flex-start",
                    padding: "10px 14px",
                    background: "rgba(255,60,60,0.05)",
                    border: "1px solid rgba(255,60,60,0.15)",
                    borderRadius: "8px",
                    fontSize: "14px",
                    color: "rgba(250,245,236,0.8)",
                  }}>
                    <span style={{ color: "#FF6B6B", fontSize: "16px" }}>✕</span>
                    {item}
                  </div>
                ))}
              </div>
            </Section>

            {/* Cigarette note */}
            <div style={{
              background: "rgba(212,168,67,0.08)",
              border: `1px solid ${gold}`,
              borderRadius: "12px",
              padding: "20px",
              marginTop: "24px",
            }}>
              <div style={{ fontSize: "16px", fontWeight: "bold", color: gold, marginBottom: "8px" }}>🚬 A note on smoking</div>
              <p style={{ fontSize: "14px", lineHeight: 1.7, color: "rgba(250,245,236,0.8)", margin: 0 }}>
                Even 1 cigarette/day spikes cortisol (the stress hormone), which directly worsens PCOD, increases belly fat retention, and blunts your workout recovery. 75 Hard is the perfect container to go completely smoke-free. Replace the urge with a cup of warm spearmint tea or a 2-minute breathing reset. You've got this.
              </p>
            </div>
          </div>
        )}

        {/* MEALS TAB */}
        {activeTab === "meals" && (
          <div>
            <p style={{ color: "rgba(250,245,236,0.6)", fontSize: "14px", marginBottom: "20px", lineHeight: 1.7 }}>
              Your full daily meal schedule. Tap any meal to expand options. All meals designed for meal-prep and budget under 25 AED/day.
            </p>
            {/* Water schedule */}
            <Section title="💧 Daily Water Schedule (3+ Litres)">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "8px" }}>
                {waterPlan.map((w, i) => (
                  <div key={i} style={{
                    background: "rgba(107,174,207,0.08)",
                    border: "1px solid rgba(107,174,207,0.2)",
                    borderRadius: "8px",
                    padding: "10px 14px",
                    display: "flex", gap: "8px", alignItems: "center",
                  }}>
                    <span style={{ fontSize: "18px" }}>{w.icon}</span>
                    <div>
                      <div style={{ fontSize: "12px", color: "rgba(250,245,236,0.5)" }}>{w.time}</div>
                      <div style={{ fontSize: "13px", color: "rgba(250,245,236,0.9)" }}>{w.amount}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {mealPlan.map((meal, i) => (
              <div key={i} style={{
                background: expandedMeal === i ? "rgba(232,108,58,0.08)" : "rgba(255,255,255,0.03)",
                border: `1px solid ${expandedMeal === i ? "rgba(232,108,58,0.4)" : "rgba(255,255,255,0.08)"}`,
                borderRadius: "14px",
                marginBottom: "12px",
                overflow: "hidden",
                transition: "all 0.3s",
              }}>
                <button
                  onClick={() => setExpandedMeal(expandedMeal === i ? null : i)}
                  style={{
                    width: "100%", padding: "16px 20px",
                    background: "transparent", border: "none", cursor: "pointer",
                    display: "flex", alignItems: "center", gap: "14px", textAlign: "left",
                  }}
                >
                  <span style={{ fontSize: "24px" }}>{meal.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ fontSize: "12px", color: gold, letterSpacing: "1px" }}>{meal.time}</span>
                      <span style={{ fontSize: "15px", fontWeight: "bold", color: cream }}>{meal.label}</span>
                    </div>
                  </div>
                  <span style={{ color: accent, fontSize: "18px", transform: expandedMeal === i ? "rotate(180deg)" : "none", transition: "0.3s" }}>▾</span>
                </button>
                {expandedMeal === i && (
                  <div style={{ padding: "0 20px 20px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "12px" }}>
                      {meal.meals.map((m, j) => (
                        <div key={j} style={{
                          padding: "10px 14px",
                          background: "rgba(255,255,255,0.04)",
                          borderRadius: "8px",
                          fontSize: "14px",
                          lineHeight: 1.6,
                          color: "rgba(250,245,236,0.85)",
                          borderLeft: `3px solid ${accent}`,
                        }}>
                          {m}
                        </div>
                      ))}
                    </div>
                    <div style={{
                      background: "rgba(212,168,67,0.1)",
                      borderRadius: "8px",
                      padding: "10px 14px",
                      fontSize: "13px",
                      color: gold,
                      fontStyle: "italic",
                    }}>
                      💡 {meal.note}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Chocolate weaning plan */}
            <Section title="🍫 Chocolate Addiction Weaning Plan">
              <p style={{ fontSize: "13px", color: "rgba(250,245,236,0.6)", marginBottom: "12px" }}>
                Cold turkey doesn't work for sugar addiction. This gradual plan breaks the habit over 75 days.
              </p>
              {chocolatePlan.map((c, i) => (
                <div key={i} style={{
                  display: "flex", gap: "14px", alignItems: "flex-start",
                  padding: "12px",
                  background: "rgba(212,168,67,0.05)",
                  borderRadius: "8px",
                  marginBottom: "8px",
                  border: "1px solid rgba(212,168,67,0.1)",
                }}>
                  <div style={{ minWidth: "90px", fontSize: "12px", color: gold, fontWeight: "bold" }}>{c.week}</div>
                  <div style={{ fontSize: "14px", color: "rgba(250,245,236,0.8)", lineHeight: 1.6 }}>{c.plan}</div>
                </div>
              ))}
            </Section>
          </div>
        )}

        {/* PHASES TAB */}
        {activeTab === "phases" && (
          <div>
            <p style={{ color: "rgba(250,245,236,0.6)", fontSize: "14px", marginBottom: "20px", lineHeight: 1.7 }}>
              Your 75 days are split into 3 progressive phases. Calories step down as your body adapts and you build momentum.
            </p>
            {phases.map((p, i) => (
              <div key={i} style={{
                background: p.bg,
                border: `1px solid ${p.color}40`,
                borderRadius: "16px",
                marginBottom: "20px",
                overflow: "hidden",
              }}>
                <div style={{
                  background: `linear-gradient(135deg, ${p.color}20, ${p.color}08)`,
                  borderBottom: `1px solid ${p.color}30`,
                  padding: "20px",
                  display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                }}>
                  <div>
                    <div style={{ fontSize: "11px", letterSpacing: "3px", color: p.color, textTransform: "uppercase", marginBottom: "4px" }}>{p.days}</div>
                    <div style={{ fontSize: "22px", fontWeight: "bold", color: cream }}>{p.phase}</div>
                    <div style={{ fontSize: "16px", color: p.color, marginTop: "2px" }}>{p.subtitle}</div>
                  </div>
                  <div style={{
                    background: `${p.color}20`,
                    border: `1px solid ${p.color}40`,
                    borderRadius: "10px",
                    padding: "10px 16px",
                    textAlign: "center",
                  }}>
                    <div style={{ fontSize: "18px", fontWeight: "bold", color: p.color }}>{p.calories}</div>
                    <div style={{ fontSize: "11px", color: "rgba(250,245,236,0.5)" }}>kcal/day</div>
                  </div>
                </div>
                <div style={{ padding: "20px" }}>
                  <p style={{ fontSize: "14px", color: "rgba(250,245,236,0.75)", lineHeight: 1.7, marginBottom: "16px" }}>
                    🎯 Focus: {p.focus}
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
                    {[
                      { label: "Carbs", val: p.carbs },
                      { label: "Protein", val: p.protein },
                      { label: "Fat", val: p.fat },
                    ].map(m => (
                      <div key={m.label} style={{
                        background: "rgba(255,255,255,0.04)",
                        borderRadius: "10px",
                        padding: "14px",
                        textAlign: "center",
                      }}>
                        <div style={{ fontSize: "20px", fontWeight: "bold", color: p.color }}>{m.val}</div>
                        <div style={{ fontSize: "11px", color: "rgba(250,245,236,0.5)", marginTop: "2px" }}>{m.label}/day</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Sample weekly progress */}
            <Section title="📈 Expected Progress Timeline">
              {[
                { period: "Day 1–10", expect: "Water weight drops 1–2kg. Bloating reduces. Energy still adjusting. Do not weigh daily — weigh every Sunday morning only." },
                { period: "Day 11–25", expect: "First 3–4kg lost. Skin clearer (PCOD improvement). Cravings significantly reduced. Sleep quality improving." },
                { period: "Day 26–40", expect: "Visible body composition change. 6–8kg down from start. Clothes fitting differently. Brain fog gone. Gym performance improving." },
                { period: "Day 41–60", expect: "You're in the zone. 10–12kg down. PCOD symptoms noticeably better. Energy consistent all day. Strength visibly increasing." },
                { period: "Day 61–75", expect: "Final push. 13–15kg down. Mental transformation complete. Habits are locked in. You feel like a different person." },
              ].map((t, i) => (
                <div key={i} style={{
                  display: "flex", gap: "16px",
                  padding: "14px",
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: "10px",
                  marginBottom: "8px",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}>
                  <div style={{ minWidth: "80px", fontSize: "12px", color: accent, fontWeight: "bold", paddingTop: "2px" }}>{t.period}</div>
                  <div style={{ fontSize: "14px", color: "rgba(250,245,236,0.78)", lineHeight: 1.6 }}>{t.expect}</div>
                </div>
              ))}
            </Section>
          </div>
        )}

        {/* MEAL PREP TAB */}
        {activeTab === "mealprep" && (
          <div>
            <div style={{
              background: "rgba(92,122,90,0.15)",
              border: `1px solid ${sage}`,
              borderRadius: "12px",
              padding: "20px",
              marginBottom: "24px",
            }}>
              <div style={{ fontSize: "16px", fontWeight: "bold", color: sage, marginBottom: "8px" }}>🥘 Meal Prep Philosophy</div>
              <p style={{ fontSize: "14px", lineHeight: 1.7, color: "rgba(250,245,236,0.8)", margin: 0 }}>
                You work 8–5 at a desk job. Cooking daily = failure waiting to happen. With a <strong style={{ color: cream }}>twice-weekly prep session</strong> (Tuesday + Friday nights, ~45 minutes each), you'll always have clean food ready, never default to shawarma, and stay within your budget.
              </p>
            </div>

            {mealPrepGuide.map((day, i) => (
              <Section key={i} title={`📦 ${day.day} Prep Session`}>
                {day.tasks.map((task, j) => (
                  <div key={j} style={{
                    display: "flex", gap: "12px", alignItems: "flex-start",
                    padding: "10px 0",
                    borderBottom: j < day.tasks.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    fontSize: "14px",
                    color: "rgba(250,245,236,0.8)",
                    lineHeight: 1.5,
                  }}>
                    <span style={{ color: sage, fontSize: "16px", minWidth: "20px" }}>✓</span>
                    {task}
                  </div>
                ))}
              </Section>
            ))}

            <Section title="🛒 Weekly Grocery List (~20–25 AED/day)">
              {[
                {
                  cat: "Proteins", color: "#E8A87C",
                  items: ["Chicken breast 700g (≈ AED 18–22)", "Eggs × 12 (≈ AED 10–12)", "Paneer 200g (≈ AED 6–8)", "Canned tuna × 2 (≈ AED 6–10)", "Low-fat yoghurt 500g (≈ AED 7–9)"]
                },
                {
                  cat: "Carbs", color: "#6BBF7A",
                  items: ["Brown rice 1kg (buy monthly, ≈ AED 8)", "Whole wheat chapati flour (buy fortnightly)", "Oats 500g (buy fortnightly, ≈ AED 8–12)", "Sweet potato × 3 (≈ AED 5)"]
                },
                {
                  cat: "Vegetables & Fruit", color: "#6BAECF",
                  items: ["Broccoli, spinach, capsicum, zucchini, tomato, cucumber", "Seasonal mixed veg bag (≈ AED 8–10)", "Fruits: apples, bananas, kiwi, berries (≈ AED 15–20/week)"]
                },
                {
                  cat: "Pantry Essentials", color: "#D4A843",
                  items: ["Coconut oil / olive oil small bottle", "Flaxseeds, chia seeds (buy once/month)", "Cinnamon, turmeric, cumin, black pepper", "Spearmint tea bags", "Almonds/walnuts small pack", "Dates (small pack)"]
                },
              ].map(cat => (
                <div key={cat.cat} style={{ marginBottom: "16px" }}>
                  <div style={{ fontSize: "13px", fontWeight: "bold", color: cat.color, marginBottom: "8px", letterSpacing: "1px" }}>{cat.cat.toUpperCase()}</div>
                  {cat.items.map((item, j) => (
                    <div key={j} style={{
                      padding: "8px 12px",
                      fontSize: "13px",
                      color: "rgba(250,245,236,0.78)",
                      borderLeft: `2px solid ${cat.color}60`,
                      marginBottom: "4px",
                    }}>{item}</div>
                  ))}
                </div>
              ))}
            </Section>

            <Section title="🥡 Batch Recipes (Air Fryer + Stove)">
              {[
                {
                  name: "Signature Air-Fryer Chicken Tenders",
                  time: "20 min",
                  serves: "3 days",
                  recipe: "600g chicken breast, sliced into strips. Marinate: 1 tsp cumin, 1 tsp turmeric, 1 tsp chilli powder, 2 tbsp yoghurt, lemon juice, salt, garlic paste. Marinate 30 min. Air-fry at 190°C for 18–20 min, turning halfway. Store in fridge up to 4 days. Use in stir-fry, wraps, or with rice."
                },
                {
                  name: "Bulk Dal/Sambar",
                  time: "30 min",
                  serves: "4 meals",
                  recipe: "1 cup masoor dal or toor dal, 2 tomatoes, 1 onion, 1 cup mixed veg (carrot, beans, drumstick). Cook in pressure cooker with turmeric, salt, tamarind. Tadka: mustard seeds, curry leaves, dried red chilli in coconut oil. Freeze half for next week."
                },
                {
                  name: "Overnight Oats (3 jars)",
                  time: "10 min",
                  serves: "3 breakfasts",
                  recipe: "Each jar: ½ cup rolled oats + 1 tbsp chia seeds + 1 tbsp flaxseeds + ¾ cup oat milk / LF milk. Refrigerate overnight. Morning: top with ½ cup berries/banana. High satiety, zero cooking in the morning."
                },
              ].map((r, i) => (
                <div key={i} style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "12px",
                  padding: "16px",
                  marginBottom: "12px",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                    <div style={{ fontSize: "15px", fontWeight: "bold", color: cream }}>{r.name}</div>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <span style={{ fontSize: "11px", background: "rgba(232,108,58,0.2)", color: accent, padding: "2px 8px", borderRadius: "20px" }}>⏱ {r.time}</span>
                      <span style={{ fontSize: "11px", background: "rgba(107,191,122,0.2)", color: "#6BBF7A", padding: "2px 8px", borderRadius: "20px" }}>🍱 {r.serves}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: "13px", lineHeight: 1.7, color: "rgba(250,245,236,0.7)", margin: 0 }}>{r.recipe}</p>
                </div>
              ))}
            </Section>
          </div>
        )}

        {/* PCOD TAB */}
        {activeTab === "pcod" && (
          <div>
            <div style={{
              background: "linear-gradient(135deg, rgba(212,168,67,0.12), rgba(212,168,67,0.04))",
              border: `1px solid ${gold}`,
              borderRadius: "16px",
              padding: "24px",
              marginBottom: "24px",
            }}>
              <div style={{ fontSize: "18px", fontWeight: "bold", color: gold, marginBottom: "12px" }}>🌸 PCOD & This Plan</div>
              <p style={{ fontSize: "14px", lineHeight: 1.8, color: "rgba(250,245,236,0.85)", margin: 0 }}>
                PCOD is fundamentally a <strong style={{ color: gold }}>hormone and insulin disorder</strong>. The standard advice of "eat less, exercise more" misses the point. This plan is specifically engineered to address the <em>root causes</em>: insulin resistance, chronic inflammation, and androgen excess. Every food choice is deliberate.
              </p>
            </div>

            <Section title="✅ PCOD-Specific Nutrition Rules">
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {pcodTips.map((t, i) => (
                  <div key={i} style={{
                    display: "flex", gap: "14px", alignItems: "flex-start",
                    padding: "14px",
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: "10px",
                    border: "1px solid rgba(212,168,67,0.1)",
                  }}>
                    <span style={{ fontSize: "22px", minWidth: "28px" }}>{t.icon}</span>
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: "bold", color: cream, marginBottom: "3px" }}>{t.tip}</div>
                      <div style={{ fontSize: "13px", color: "rgba(250,245,236,0.65)", lineHeight: 1.5 }}>{t.why}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="🥗 Anti-Inflammatory Foods to Prioritise">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "8px" }}>
                {[
                  "🥑 Avocado", "🥦 Broccoli", "🐟 Fatty fish", "🫚 Olive oil", "🍋 Lemon", "🧄 Garlic",
                  "🫚 Coconut oil", "🌰 Walnuts", "🫐 Berries", "🍵 Green tea", "🌿 Turmeric", "🌿 Cinnamon",
                  "🫘 Lentils", "🌱 Flaxseeds", "🥬 Spinach", "🥚 Eggs",
                ].map((f, i) => (
                  <div key={i} style={{
                    background: "rgba(92,122,90,0.1)",
                    border: "1px solid rgba(92,122,90,0.25)",
                    borderRadius: "8px",
                    padding: "10px",
                    fontSize: "13px",
                    textAlign: "center",
                    color: "rgba(250,245,236,0.85)",
                  }}>{f}</div>
                ))}
              </div>
            </Section>

            <Section title="⚠️ Foods That Worsen PCOD (Avoid)">
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  { food: "Sugar & refined carbs", why: "Spikes insulin directly — the primary PCOD driver" },
                  { food: "Dairy (excess)", why: "Increases IGF-1 and can elevate androgen levels — use lactose-free or moderate amounts" },
                  { food: "Soy in excess", why: "Phytoestrogen effects — limit soy milk, tofu" },
                  { food: "Processed vegetable oils", why: "Pro-inflammatory omega-6 oils (sunflower, corn oil)" },
                  { food: "Alcohol (zero during 75 Hard)", why: "Disrupts oestrogen metabolism and liver detox" },
                  { food: "White rice in large portions", why: "High glycaemic — stick to ½ cup serving only" },
                ].map((f, i) => (
                  <div key={i} style={{
                    display: "flex", gap: "12px", alignItems: "flex-start",
                    padding: "10px 14px",
                    background: "rgba(255,60,60,0.04)",
                    border: "1px solid rgba(255,60,60,0.12)",
                    borderRadius: "8px",
                  }}>
                    <span style={{ color: "#FF6B6B" }}>✕</span>
                    <div>
                      <div style={{ fontSize: "14px", color: cream, fontWeight: "bold" }}>{f.food}</div>
                      <div style={{ fontSize: "12px", color: "rgba(250,245,236,0.6)", marginTop: "2px" }}>{f.why}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        )}

        {/* RULES TAB */}
        {activeTab === "rules" && (
          <div>
            <Section title="📋 Your 75 Hard Nutrition Rules">
              {[
                { num: "01", rule: "ZERO cheat meals", detail: "Not one. 75 Hard resets to Day 1 if you break it. This is the whole point — you are building mental fortitude, not just losing weight." },
                { num: "02", rule: "ZERO alcohol", detail: "Not a sip. Alcohol raises oestrogen, disrupts sleep, spikes cortisol, and is empty calories. This is the easiest rule if you're committed." },
                { num: "03", rule: "Follow your chosen diet", detail: "Your chosen diet is this PCOD-optimised high-protein plan. Every day for 75 days. Meal prep is your insurance policy." },
                { num: "04", rule: "Drink 3+ litres of water daily", detail: "Set alarms. Use the water schedule. Track it. Dehydration causes brain fog, fatigue, and hunger signals — all of which you already experience." },
                { num: "05", rule: "No eating outside", detail: "Outside food = unknown oil quality, hidden sugar, massive portions. Pack your meal-prepped food to work every day. This is non-negotiable." },
              ].map(r => (
                <div key={r.num} style={{
                  display: "flex", gap: "16px", alignItems: "flex-start",
                  padding: "16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(232,108,58,0.15)",
                  borderRadius: "12px",
                  marginBottom: "10px",
                }}>
                  <div style={{ fontSize: "24px", fontWeight: "bold", color: accent, minWidth: "36px", opacity: 0.7 }}>{r.num}</div>
                  <div>
                    <div style={{ fontSize: "15px", fontWeight: "bold", color: accent, marginBottom: "4px" }}>{r.rule}</div>
                    <div style={{ fontSize: "13px", color: "rgba(250,245,236,0.75)", lineHeight: 1.6 }}>{r.detail}</div>
                  </div>
                </div>
              ))}
            </Section>

            <Section title="🏆 Weekly Non-Food Rewards (Stay Motivated)">
              {weeklyReward.map((r, i) => (
                <div key={i} style={{
                  display: "flex", gap: "12px", alignItems: "flex-start",
                  padding: "10px 0",
                  borderBottom: i < weeklyReward.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  fontSize: "14px",
                  color: "rgba(250,245,236,0.78)",
                  lineHeight: 1.5,
                }}>
                  <span style={{ color: gold, minWidth: "24px" }}>★</span>
                  {r}
                </div>
              ))}
            </Section>

            <Section title="😩 When You Want to Quit (Read This)">
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { trigger: "Craving chocolate", response: "Eat 2 dates + warm cacao milk. Brush your teeth immediately after. Cravings last 90 seconds — breathe through it." },
                  { trigger: "Exhausted after work + gym", response: "Your evening meal prep means dinner is READY. You just need to reheat. Put your gym clothes on before you sit down." },
                  { trigger: "Social event, everyone is eating/drinking", response: "You are the most disciplined person in that room. Eat before you go. Drink sparkling water with lime. Own it." },
                  { trigger: "Stalled on the scale for a week", response: "Weigh only Sunday mornings. Measurements and photos tell the real story. Muscle gained + fat lost = same weight. Trust the process." },
                  { trigger: "Missed meal prep and starving", response: "Emergency options: 3 boiled eggs + apple. Canned tuna + rice cakes. Greek yoghurt + banana. Always keep these at home." },
                ].map((s, i) => (
                  <div key={i} style={{
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: "10px",
                    padding: "14px",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}>
                    <div style={{ fontSize: "13px", color: accent, fontWeight: "bold", marginBottom: "6px" }}>📌 {s.trigger}</div>
                    <div style={{ fontSize: "13px", color: "rgba(250,245,236,0.78)", lineHeight: 1.6 }}>{s.response}</div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Final message */}
            <div style={{
              background: `linear-gradient(135deg, rgba(232,108,58,0.15), rgba(212,168,67,0.08))`,
              border: `1px solid ${accent}`,
              borderRadius: "16px",
              padding: "28px",
              marginTop: "24px",
              textAlign: "center",
            }}>
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>🔥</div>
              <div style={{ fontSize: "20px", fontWeight: "bold", color: accent, marginBottom: "12px" }}>
                Shaziya, you have everything you need.
              </div>
              <p style={{ fontSize: "14px", lineHeight: 1.8, color: "rgba(250,245,236,0.8)", margin: "0 0 16px" }}>
                75 days. No excuses. No cheat meals. No alcohol. Just you, your plan, and the version of yourself you're becoming. PCOD is not a life sentence — it responds to exactly what you're about to do. The girl who finishes Day 75 will not be the same girl who started Day 1.
              </p>
              <div style={{ fontSize: "16px", fontWeight: "bold", color: gold }}>
                June 8 to August 21. Let's go. 💪
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{
        textAlign: "center",
        padding: "24px",
        borderTop: "1px solid rgba(232,108,58,0.15)",
        color: "rgba(250,245,236,0.35)",
        fontSize: "12px",
        marginTop: "20px",
      }}>
        Built for Shaziya · Resounding Life 75 Hard Challenge · June 8, 2025<br />
        Consult your doctor before major dietary changes, especially with PCOD.
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: "28px" }}>
      <div style={{
        fontSize: "14px",
        fontWeight: "bold",
        color: "rgba(250,245,236,0.9)",
        marginBottom: "14px",
        paddingBottom: "8px",
        borderBottom: "1px solid rgba(232,108,58,0.25)",
        letterSpacing: "0.5px",
      }}>
        {title}
      </div>
      {children}
    </div>
  );
}
