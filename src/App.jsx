import { useState, useEffect } from "react";

// ─── Íconos SVG inline ───────────────────────────────────────────────────────
const IconHome = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"
      fill={active ? "#5B8A5F" : "none"}
      stroke={active ? "#5B8A5F" : "#9CA3AF"} strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M9 21V12h6v9" stroke={active ? "#5B8A5F" : "#9CA3AF"} strokeWidth="1.8" strokeLinejoin="round"/>
  </svg>
);
const IconRecipes = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="2" width="16" height="20" rx="2"
      fill={active ? "#5B8A5F" : "none"}
      stroke={active ? "#5B8A5F" : "#9CA3AF"} strokeWidth="1.8"/>
    <path d="M8 7h8M8 11h8M8 15h5" stroke={active ? "#fff" : "#9CA3AF"} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
const IconGlucose = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2C12 2 5 9.5 5 14a7 7 0 0014 0C19 9.5 12 2 12 2z"
      fill={active ? "#5B8A5F" : "none"}
      stroke={active ? "#5B8A5F" : "#9CA3AF"} strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M9 15a3 3 0 006 0" stroke={active ? "#fff" : "#9CA3AF"} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
const IconProfile = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4"
      fill={active ? "#5B8A5F" : "none"}
      stroke={active ? "#5B8A5F" : "#9CA3AF"} strokeWidth="1.8"/>
    <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7"
      stroke={active ? "#5B8A5F" : "#9CA3AF"} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
const IconStar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);
const IconClock = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
  </svg>
);
const IconChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.5">
    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconPlus = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
    <path d="M12 5v14M5 12h14" strokeLinecap="round"/>
  </svg>
);
const IconTrend = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5B8A5F" strokeWidth="2">
    <path d="M22 7l-8.5 8.5-5-5L2 17" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconClose = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5">
    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/>
  </svg>
);
const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5B8A5F" strokeWidth="2.5">
    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconFire = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#EF4444">
    <path d="M12 2c0 0-5 5.5-5 10a5 5 0 0010 0C17 7.5 12 2 12 2z"/>
  </svg>
);

// ─── Datos mock ───────────────────────────────────────────────────────────────
const RECIPES = [
  {
    id: 1, name: "Bowl de Avena con Berries", time: "10 min", cal: 280,
    gi: "Bajo", rating: 4.8, tag: "Desayuno",
    color: "#FEF3C7",
    emoji: "🫐",
    desc: "Avena integral con arándanos, frambuesas y semillas de chía. Rico en fibra y antioxidantes.",
    ingredients: ["1 taza avena integral", "1 taza leche vegetal", "½ taza arándanos", "½ taza frambuesas", "1 cdta semillas de chía", "1 cdta miel de agave"],
    steps: ["Cocinar la avena con la leche a fuego medio.", "Agregar las semillas de chía y revolver.", "Servir con las frutas encima.", "Endulzar con miel de agave al gusto."]
  },
  {
    id: 2, name: "Ensalada Mediterránea", time: "15 min", cal: 220,
    gi: "Bajo", rating: 4.6, tag: "Almuerzo",
    color: "#DCFCE7",
    emoji: "🥗",
    desc: "Mezcla de vegetales frescos con aceite de oliva, feta y aceitunas. Perfecta para mantener niveles estables.",
    ingredients: ["2 tazas espinaca", "1 pepino", "100g queso feta", "½ taza aceitunas", "2 tomates cherry", "2 cdas aceite de oliva", "Limón al gusto"],
    steps: ["Lavar y cortar todos los vegetales.", "Mezclar en un bol grande.", "Agregar queso feta desmenuzado.", "Aderezar con aceite de oliva y limón."]
  },
  {
    id: 3, name: "Salmón al Horno con Quinoa", time: "30 min", cal: 420,
    gi: "Bajo", rating: 4.9, tag: "Cena",
    color: "#FEE2E2",
    emoji: "🐟",
    desc: "Filete de salmón con hierbas frescas sobre cama de quinoa. Alto en omega-3 y proteínas.",
    ingredients: ["200g filete de salmón", "1 taza quinoa", "2 dientes ajo", "Eneldo fresco", "Limón", "Aceite de oliva", "Sal y pimienta"],
    steps: ["Precalentar horno a 200°C.", "Marinar el salmón con ajo, limón y eneldo.", "Cocinar la quinoa según instrucciones.", "Hornear el salmón por 15-18 minutos.", "Servir sobre la quinoa."]
  },
  {
    id: 4, name: "Smoothie Verde Detox", time: "5 min", cal: 150,
    gi: "Bajo", rating: 4.5, tag: "Snack",
    color: "#D1FAE5",
    emoji: "🥤",
    desc: "Batido de espinaca, pepino, manzana verde y jengibre. Refrescante y bajo en índice glicémico.",
    ingredients: ["1 taza espinaca", "½ pepino", "1 manzana verde", "1 trozo jengibre", "1 taza agua de coco", "Hielo"],
    steps: ["Lavar todos los ingredientes.", "Cortar en trozos grandes.", "Licuar hasta obtener consistencia suave.", "Servir inmediatamente con hielo."]
  },
  {
    id: 5, name: "Tortilla de Claras con Vegetales", time: "12 min", cal: 190,
    gi: "Muy bajo", rating: 4.7, tag: "Desayuno",
    color: "#FEF9C3",
    emoji: "🍳",
    desc: "Tortilla proteica con pimiento, espinaca y champiñones. Perfecta para comenzar el día.",
    ingredients: ["4 claras de huevo", "½ pimiento rojo", "½ taza champiñones", "1 taza espinaca", "1 cdta aceite de coco", "Sal y pimienta"],
    steps: ["Batir las claras de huevo con sal.", "Saltear los vegetales en aceite de coco.", "Verter las claras sobre los vegetales.", "Doblar y cocinar 2 minutos más."]
  },
  {
    id: 6, name: "Lentejas con Cúrcuma", time: "35 min", cal: 340,
    gi: "Bajo", rating: 4.4, tag: "Almuerzo",
    color: "#FEE2C8",
    emoji: "🫘",
    desc: "Guiso de lentejas rojas con cúrcuma, jengibre y especias antiinflamatorias.",
    ingredients: ["1 taza lentejas rojas", "1 cebolla", "2 tomates", "1 cdta cúrcuma", "1 cdta jengibre", "Cilantro fresco", "2 tazas caldo de vegetales"],
    steps: ["Sofreír cebolla y tomates.", "Agregar especias y mezclar.", "Añadir lentejas y caldo.", "Cocinar 25 minutos a fuego medio.", "Decorar con cilantro."]
  },
];

const GLUCOSE_READINGS = [
  { id: 1, value: 95, time: "08:00", type: "Ayunas", date: "Hoy", status: "normal" },
  { id: 2, value: 142, time: "10:30", type: "Posprandial", date: "Hoy", status: "alto" },
  { id: 3, value: 118, time: "13:00", type: "Antes almuerzo", date: "Hoy", status: "normal" },
  { id: 4, value: 156, time: "15:30", type: "Posprandial", date: "Ayer", status: "alto" },
  { id: 5, value: 102, time: "07:45", type: "Ayunas", date: "Ayer", status: "normal" },
  { id: 6, value: 88, time: "20:00", type: "Antes cena", date: "Ayer", status: "normal" },
];

const TIPS = [
  "Caminar 10 min después de comer reduce el índice glucémico un 22%",
  "La canela puede ayudar a regular los niveles de azúcar en sangre",
  "Comer vegetales antes del plato principal mejora la respuesta glicémica",
  "Dormir bien regula la insulina y el metabolismo de la glucosa",
  "El ayuno intermitente puede mejorar la sensibilidad a la insulina",
];

// ─── Componente principal ─────────────────────────────────────────────────────
export default function App() {
  const [tab, setTab] = useState("inicio");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [filterTag, setFilterTag] = useState("Todos");
  const [showAddGlucose, setShowAddGlucose] = useState(false);
  const [glucoseValue, setGlucoseValue] = useState("");
  const [glucoseType, setGlucoseType] = useState("Ayunas");
  const [readings, setReadings] = useState(GLUCOSE_READINGS);
  const [tipIndex, setTipIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [savedRecipes, setSavedRecipes] = useState([1, 3]);

  // Rotar tips
  useEffect(() => {
    const interval = setInterval(() => {
      setTipIndex(i => (i + 1) % TIPS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const palette = {
    bg: "#FDFAF5",
    primary: "#5B8A5F",
    primaryLight: "#EBF3EC",
    primaryDark: "#3D6B41",
    accent: "#F59E0B",
    accentLight: "#FEF3C7",
    text: "#1F2937",
    textMid: "#4B5563",
    textLight: "#9CA3AF",
    card: "#FFFFFF",
    border: "#E5E7EB",
    danger: "#EF4444",
    dangerLight: "#FEE2E2",
    warning: "#F59E0B",
    warningLight: "#FEF3C7",
    success: "#5B8A5F",
    successLight: "#DCFCE7",
  };

  const styles = {
    root: {
      minHeight: "100vh",
      backgroundColor: palette.bg,
      fontFamily: "'Nunito', sans-serif",
      maxWidth: 430,
      margin: "0 auto",
      position: "relative",
      overflowX: "hidden",
    },
    screen: {
      paddingBottom: 90,
      minHeight: "100vh",
    },
    navbar: {
      position: "fixed",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "100%",
      maxWidth: 430,
      backgroundColor: "#FFFFFF",
      borderTop: `1px solid ${palette.border}`,
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      padding: "8px 0 12px",
      zIndex: 100,
      boxShadow: "0 -4px 20px rgba(0,0,0,0.06)",
    },
    navItem: (active) => ({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 3,
      cursor: "pointer",
      padding: "4px 16px",
      borderRadius: 12,
      transition: "all 0.2s",
    }),
    navLabel: (active) => ({
      fontSize: 11,
      fontWeight: active ? 700 : 500,
      color: active ? palette.primary : palette.textLight,
      transition: "color 0.2s",
    }),
  };

  // ─── Pantalla Inicio ───────────────────────────────────────────────────────
  const HomeScreen = () => {
    const avgGlucose = Math.round(readings.reduce((a, r) => a + r.value, 0) / readings.length);
    const todayReadings = readings.filter(r => r.date === "Hoy");
    const highCount = readings.filter(r => r.status === "alto").length;

    return (
      <div style={styles.screen}>
        {/* Header */}
        <div style={{
          background: "linear-gradient(135deg, #5B8A5F 0%, #3D6B41 100%)",
          padding: "52px 20px 28px",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Círculos decorativos */}
          <div style={{
            position: "absolute", top: -40, right: -40,
            width: 140, height: 140, borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
          }}/>
          <div style={{
            position: "absolute", top: 20, right: 60,
            width: 60, height: 60, borderRadius: "50%",
            background: "rgba(255,255,255,0.06)",
          }}/>
          <div style={{ position: "relative", zIndex: 1 }}>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, margin: "0 0 4px", fontWeight: 600 }}>
              ¡Bienvenida! 👋
            </p>
            <h1 style={{
              color: "#fff", fontSize: 26, fontWeight: 800,
              margin: "0 0 4px", fontFamily: "'Quicksand', sans-serif",
            }}>Elena APP</h1>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, margin: 0, fontWeight: 500 }}>
              Tu salud, bajo control 🌿
            </p>
          </div>
        </div>

        {/* Tarjetas resumen glucosa */}
        <div style={{ padding: "0 16px", marginTop: -24 }}>
          <div style={{
            backgroundColor: palette.card, borderRadius: 20,
            padding: "20px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            marginBottom: 20,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: palette.text }}>
                Glucosa hoy
              </h3>
              <button onClick={() => setTab("glucosa")} style={{
                background: "none", border: "none", cursor: "pointer",
                color: palette.primary, fontSize: 13, fontWeight: 700,
              }}>Ver todo</button>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              {[
                { label: "Promedio", value: `${avgGlucose}`, unit: "mg/dL", color: palette.primary, bg: palette.primaryLight },
                { label: "Registros", value: `${todayReadings.length}`, unit: "hoy", color: "#6366F1", bg: "#EEF2FF" },
                { label: "Elevados", value: `${highCount}`, unit: "total", color: palette.danger, bg: palette.dangerLight },
              ].map((item, i) => (
                <div key={i} style={{
                  flex: 1, backgroundColor: item.bg, borderRadius: 14,
                  padding: "12px 10px", textAlign: "center",
                }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: item.color, fontFamily: "'Quicksand', sans-serif" }}>
                    {item.value}
                  </div>
                  <div style={{ fontSize: 10, color: item.color, fontWeight: 700, opacity: 0.8 }}>{item.unit}</div>
                  <div style={{ fontSize: 11, color: palette.textMid, fontWeight: 600, marginTop: 2 }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tip del día */}
          <div style={{
            backgroundColor: palette.accentLight, borderRadius: 16,
            padding: "14px 16px", marginBottom: 20,
            display: "flex", alignItems: "flex-start", gap: 10,
            border: `1px solid #FDE68A`,
          }}>
            <span style={{ fontSize: 22 }}>💡</span>
            <div>
              <p style={{ margin: "0 0 2px", fontSize: 11, fontWeight: 700, color: "#92400E" }}>Sabías que...</p>
              <p style={{ margin: 0, fontSize: 13, color: "#78350F", fontWeight: 600, lineHeight: 1.4 }}>
                {TIPS[tipIndex]}
              </p>
            </div>
          </div>

          {/* Registro rápido glucosa */}
          <button onClick={() => { setTab("glucosa"); setShowAddGlucose(true); }} style={{
            width: "100%", background: "linear-gradient(135deg, #5B8A5F, #3D6B41)",
            border: "none", borderRadius: 16, padding: "16px 20px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            cursor: "pointer", marginBottom: 20,
            boxShadow: "0 4px 15px rgba(91,138,95,0.35)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 28 }}>💉</span>
              <div style={{ textAlign: "left" }}>
                <p style={{ margin: 0, color: "#fff", fontWeight: 800, fontSize: 15 }}>Registrar glucosa</p>
                <p style={{ margin: 0, color: "rgba(255,255,255,0.75)", fontSize: 12 }}>Añade tu medición ahora</p>
              </div>
            </div>
            <div style={{
              backgroundColor: "rgba(255,255,255,0.2)", borderRadius: 10,
              width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <IconPlus />
            </div>
          </button>

          {/* Recetas destacadas */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
              <h3 style={{ margin: 0, fontSize: 17, fontWeight: 800, color: palette.text }}>
                Recetas de hoy 🍽️
              </h3>
              <button onClick={() => setTab("recetas")} style={{
                background: "none", border: "none", cursor: "pointer",
                color: palette.primary, fontSize: 13, fontWeight: 700,
              }}>Ver todas</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {RECIPES.slice(0, 3).map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} compact />
              ))}
            </div>
          </div>

          {/* Últimas mediciones */}
          <div style={{ marginBottom: 20 }}>
            <h3 style={{ margin: "0 0 14px", fontSize: 17, fontWeight: 800, color: palette.text }}>
              Últimas mediciones 📊
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {readings.slice(0, 3).map(r => (
                <ReadingRow key={r.id} reading={r} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ─── Componente RecipeCard ─────────────────────────────────────────────────
  const RecipeCard = ({ recipe, compact = false }) => {
    const isSaved = savedRecipes.includes(recipe.id);
    return (
      <div onClick={() => setSelectedRecipe(recipe)} style={{
        backgroundColor: palette.card, borderRadius: 18,
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        overflow: "hidden", cursor: "pointer",
        border: `1px solid ${palette.border}`,
        transition: "transform 0.15s, box-shadow 0.15s",
        display: compact ? "flex" : "block",
        alignItems: compact ? "center" : undefined,
      }}>
        {/* Imagen/Emoji */}
        <div style={{
          backgroundColor: recipe.color,
          width: compact ? 80 : "100%",
          height: compact ? 80 : 160,
          minWidth: compact ? 80 : undefined,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: compact ? 36 : 64,
          flexShrink: 0,
        }}>
          {recipe.emoji}
        </div>
        {/* Info */}
        <div style={{ padding: compact ? "12px 14px" : "14px 16px", flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
            <div style={{ flex: 1 }}>
              <span style={{
                fontSize: 10, fontWeight: 700, color: palette.primary,
                backgroundColor: palette.primaryLight, padding: "2px 8px",
                borderRadius: 20, display: "inline-block", marginBottom: 4,
              }}>{recipe.tag}</span>
              <h4 style={{ margin: "0 0 4px", fontSize: 14, fontWeight: 800, color: palette.text, lineHeight: 1.3 }}>
                {recipe.name}
              </h4>
              {!compact && (
                <p style={{ margin: "0 0 8px", fontSize: 12, color: palette.textMid, lineHeight: 1.4 }}>
                  {recipe.desc}
                </p>
              )}
              <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                  <IconStar /><span style={{ fontSize: 12, fontWeight: 700, color: palette.text }}>{recipe.rating}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                  <IconClock /><span style={{ fontSize: 12, color: palette.textLight }}>{recipe.time}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                  <IconFire /><span style={{ fontSize: 12, color: palette.textLight }}>{recipe.cal} kcal</span>
                </div>
                <span style={{
                  fontSize: 10, fontWeight: 700, padding: "2px 7px",
                  backgroundColor: palette.successLight, color: palette.primary,
                  borderRadius: 20,
                }}>IG {recipe.gi}</span>
              </div>
            </div>
            <button onClick={e => {
              e.stopPropagation();
              setSavedRecipes(prev =>
                prev.includes(recipe.id) ? prev.filter(id => id !== recipe.id) : [...prev, recipe.id]
              );
            }} style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: 18, lineHeight: 1,
            }}>
              {isSaved ? "❤️" : "🤍"}
            </button>
          </div>
        </div>
      </div>
    );
  };

  // ─── Componente ReadingRow ─────────────────────────────────────────────────
  const ReadingRow = ({ reading }) => {
    const isHigh = reading.status === "alto";
    const isLow = reading.value < 70;
    const statusColor = isHigh ? palette.danger : isLow ? palette.warning : palette.primary;
    const statusBg = isHigh ? palette.dangerLight : isLow ? palette.warningLight : palette.primaryLight;
    const statusLabel = isHigh ? "Alto" : isLow ? "Bajo" : "Normal";

    return (
      <div style={{
        backgroundColor: palette.card, borderRadius: 14, padding: "12px 16px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        boxShadow: "0 1px 6px rgba(0,0,0,0.05)", border: `1px solid ${palette.border}`,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 12,
            backgroundColor: statusBg,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontSize: 18, fontWeight: 800, color: statusColor }}>
              {reading.value}
            </span>
          </div>
          <div>
            <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: palette.text }}>{reading.type}</p>
            <p style={{ margin: 0, fontSize: 11, color: palette.textLight }}>{reading.date} · {reading.time}</p>
          </div>
        </div>
        <span style={{
          fontSize: 11, fontWeight: 700, padding: "4px 10px",
          backgroundColor: statusBg, color: statusColor, borderRadius: 20,
        }}>{statusLabel}</span>
      </div>
    );
  };

  // ─── Pantalla Recetas ──────────────────────────────────────────────────────
  const RecipesScreen = () => {
    const tags = ["Todos", "Desayuno", "Almuerzo", "Cena", "Snack"];
    const filtered = RECIPES.filter(r => {
      const matchTag = filterTag === "Todos" || r.tag === filterTag;
      const matchSearch = r.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchTag && matchSearch;
    });

    return (
      <div style={styles.screen}>
        {/* Header */}
        <div style={{ padding: "52px 20px 16px", backgroundColor: palette.bg }}>
          <h2 style={{ margin: "0 0 4px", fontSize: 24, fontWeight: 800, color: palette.text, fontFamily: "'Quicksand', sans-serif" }}>
            Recetas saludables 🥗
          </h2>
          <p style={{ margin: "0 0 16px", fontSize: 14, color: palette.textMid }}>
            {filtered.length} recetas con bajo índice glicémico
          </p>
          {/* Buscador */}
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            backgroundColor: palette.card, borderRadius: 14,
            padding: "10px 14px", boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
            border: `1px solid ${palette.border}`, marginBottom: 14,
          }}>
            <span style={{ fontSize: 16 }}>🔍</span>
            <input
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Buscar recetas..."
              style={{
                border: "none", outline: "none", fontSize: 14,
                backgroundColor: "transparent", flex: 1, fontFamily: "'Nunito', sans-serif",
                color: palette.text,
              }}
            />
          </div>
          {/* Filtros */}
          <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4 }}>
            {tags.map(tag => (
              <button key={tag} onClick={() => setFilterTag(tag)} style={{
                border: "none", borderRadius: 20, padding: "7px 16px",
                fontSize: 12, fontWeight: 700, cursor: "pointer",
                whiteSpace: "nowrap", transition: "all 0.2s", fontFamily: "'Nunito', sans-serif",
                backgroundColor: filterTag === tag ? palette.primary : palette.card,
                color: filterTag === tag ? "#fff" : palette.textMid,
                boxShadow: filterTag === tag ? "0 2px 10px rgba(91,138,95,0.35)" : "0 1px 4px rgba(0,0,0,0.06)",
              }}>{tag}</button>
            ))}
          </div>
        </div>

        {/* Lista de recetas */}
        <div style={{ padding: "0 16px 16px", display: "flex", flexDirection: "column", gap: 14 }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 20px", color: palette.textLight }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
              <p style={{ fontSize: 15, fontWeight: 600 }}>No se encontraron recetas</p>
              <p style={{ fontSize: 13 }}>Intenta con otra búsqueda</p>
            </div>
          ) : (
            filtered.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)
          )}
        </div>
      </div>
    );
  };

  // ─── Pantalla Glucosa ──────────────────────────────────────────────────────
  const GlucoseScreen = () => {
    const avg = Math.round(readings.reduce((a, r) => a + r.value, 0) / readings.length);
    const max = Math.max(...readings.map(r => r.value));
    const min = Math.min(...readings.map(r => r.value));

    const handleAdd = () => {
      if (!glucoseValue || isNaN(Number(glucoseValue))) return;
      const newReading = {
        id: Date.now(),
        value: Number(glucoseValue),
        time: new Date().toLocaleTimeString("es", { hour: "2-digit", minute: "2-digit" }),
        type: glucoseType,
        date: "Hoy",
        status: Number(glucoseValue) > 140 ? "alto" : Number(glucoseValue) < 70 ? "bajo" : "normal",
      };
      setReadings(prev => [newReading, ...prev]);
      setGlucoseValue("");
      setShowAddGlucose(false);
    };

    return (
      <div style={styles.screen}>
        {/* Header */}
        <div style={{
          background: "linear-gradient(135deg, #5B8A5F 0%, #3D6B41 100%)",
          padding: "52px 20px 32px",
        }}>
          <h2 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 800, color: "#fff", fontFamily: "'Quicksand', sans-serif" }}>
            Control Glucémico 💉
          </h2>
          <p style={{ margin: "0 0 20px", fontSize: 13, color: "rgba(255,255,255,0.75)" }}>
            Monitorea tus niveles de glucosa
          </p>
          {/* Stats */}
          <div style={{ display: "flex", gap: 10 }}>
            {[
              { label: "Promedio", value: avg, unit: "mg/dL" },
              { label: "Máximo", value: max, unit: "mg/dL" },
              { label: "Mínimo", value: min, unit: "mg/dL" },
            ].map((s, i) => (
              <div key={i} style={{
                flex: 1, backgroundColor: "rgba(255,255,255,0.15)",
                borderRadius: 14, padding: "12px 8px", textAlign: "center",
                backdropFilter: "blur(4px)",
              }}>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#fff" }}>{s.value}</div>
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>{s.unit}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.85)", fontWeight: 600, marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: "20px 16px" }}>
          {/* Botón agregar */}
          <button onClick={() => setShowAddGlucose(true)} style={{
            width: "100%", background: "linear-gradient(135deg, #5B8A5F, #3D6B41)",
            border: "none", borderRadius: 16, padding: "14px 20px",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            cursor: "pointer", marginBottom: 20,
            boxShadow: "0 4px 15px rgba(91,138,95,0.35)",
          }}>
            <IconPlus />
            <span style={{ color: "#fff", fontWeight: 800, fontSize: 15, fontFamily: "'Nunito', sans-serif" }}>
              Nueva medición
            </span>
          </button>

          {/* Referencia */}
          <div style={{
            backgroundColor: palette.primaryLight, borderRadius: 16,
            padding: "14px 16px", marginBottom: 20,
          }}>
            <p style={{ margin: "0 0 8px", fontSize: 13, fontWeight: 800, color: palette.primary }}>📋 Valores de referencia</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {[
                { label: "Ayunas normal", range: "70 - 100 mg/dL", color: palette.primary },
                { label: "Posprandial normal", range: "< 140 mg/dL", color: palette.primary },
                { label: "Elevado (ayunas)", range: "> 100 mg/dL", color: palette.warning },
                { label: "Elevado (posprandial)", range: "> 140 mg/dL", color: palette.danger },
              ].map((ref, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 12, color: palette.textMid, fontWeight: 600 }}>{ref.label}</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: ref.color }}>{ref.range}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Historial */}
          <h3 style={{ margin: "0 0 14px", fontSize: 17, fontWeight: 800, color: palette.text }}>
            Historial de mediciones
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {readings.map(r => <ReadingRow key={r.id} reading={r} />)}
          </div>
        </div>

        {/* Modal agregar glucosa */}
        {showAddGlucose && (
          <div style={{
            position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 200, display: "flex", alignItems: "flex-end",
            justifyContent: "center",
          }} onClick={() => setShowAddGlucose(false)}>
            <div onClick={e => e.stopPropagation()} style={{
              backgroundColor: palette.card, borderRadius: "24px 24px 0 0",
              padding: "24px 20px 40px", width: "100%", maxWidth: 430,
              boxShadow: "0 -8px 40px rgba(0,0,0,0.15)",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: palette.text }}>
                  Registrar glucosa 💉
                </h3>
                <button onClick={() => setShowAddGlucose(false)} style={{
                  background: "none", border: "none", cursor: "pointer", padding: 4,
                }}><IconClose /></button>
              </div>

              {/* Valor */}
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 13, fontWeight: 700, color: palette.textMid, display: "block", marginBottom: 6 }}>
                  Nivel de glucosa (mg/dL)
                </label>
                <input
                  type="number"
                  value={glucoseValue}
                  onChange={e => setGlucoseValue(e.target.value)}
                  placeholder="Ej: 95"
                  style={{
                    width: "100%", borderRadius: 14, border: `2px solid ${palette.border}`,
                    padding: "14px 16px", fontSize: 24, fontWeight: 800, textAlign: "center",
                    fontFamily: "'Quicksand', sans-serif", outline: "none",
                    color: palette.text, backgroundColor: palette.bg,
                    boxSizing: "border-box",
                  }}
                />
              </div>

              {/* Tipo */}
              <div style={{ marginBottom: 24 }}>
                <label style={{ fontSize: 13, fontWeight: 700, color: palette.textMid, display: "block", marginBottom: 8 }}>
                  Tipo de medición
                </label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {["Ayunas", "Antes almuerzo", "Posprandial", "Antes cena", "Al dormir"].map(type => (
                    <button key={type} onClick={() => setGlucoseType(type)} style={{
                      border: "none", borderRadius: 20, padding: "8px 14px",
                      fontSize: 12, fontWeight: 700, cursor: "pointer",
                      fontFamily: "'Nunito', sans-serif",
                      backgroundColor: glucoseType === type ? palette.primary : palette.primaryLight,
                      color: glucoseType === type ? "#fff" : palette.primary,
                      transition: "all 0.2s",
                    }}>{type}</button>
                  ))}
                </div>
              </div>

              <button onClick={handleAdd} style={{
                width: "100%", background: "linear-gradient(135deg, #5B8A5F, #3D6B41)",
                border: "none", borderRadius: 16, padding: "16px",
                fontSize: 16, fontWeight: 800, color: "#fff", cursor: "pointer",
                fontFamily: "'Nunito', sans-serif",
                boxShadow: "0 4px 15px rgba(91,138,95,0.35)",
                opacity: glucoseValue ? 1 : 0.6,
              }}>
                Guardar medición ✓
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  // ─── Pantalla Perfil ───────────────────────────────────────────────────────
  const ProfileScreen = () => {
    const savedRecipesList = RECIPES.filter(r => savedRecipes.includes(r.id));

    return (
      <div style={styles.screen}>
        {/* Header */}
        <div style={{
          background: "linear-gradient(135deg, #5B8A5F 0%, #3D6B41 100%)",
          padding: "52px 20px 32px",
          textAlign: "center",
        }}>
          <div style={{
            width: 80, height: 80, borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 36, margin: "0 auto 12px",
            border: "3px solid rgba(255,255,255,0.4)",
          }}>👩‍⚕️</div>
          <h2 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 800, color: "#fff", fontFamily: "'Quicksand', sans-serif" }}>
            Mi perfil
          </h2>
          <p style={{ margin: 0, fontSize: 13, color: "rgba(255,255,255,0.75)" }}>
            Elena — Desarrollado por Elena
          </p>
        </div>

        <div style={{ padding: "20px 16px" }}>
          {/* Stats generales */}
          <div style={{
            backgroundColor: palette.card, borderRadius: 18, padding: "16px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)", marginBottom: 20,
            border: `1px solid ${palette.border}`,
          }}>
            <h3 style={{ margin: "0 0 14px", fontSize: 15, fontWeight: 800, color: palette.text }}>
              Tu progreso 📈
            </h3>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              {[
                { label: "Recetas guardadas", value: savedRecipes.length, emoji: "❤️" },
                { label: "Mediciones", value: readings.length, emoji: "💉" },
                { label: "Días activa", value: 7, emoji: "🔥" },
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 24, marginBottom: 4 }}>{stat.emoji}</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: palette.primary, fontFamily: "'Quicksand', sans-serif" }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: 11, color: palette.textMid, fontWeight: 600, maxWidth: 70, lineHeight: 1.2 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recetas guardadas */}
          {savedRecipesList.length > 0 && (
            <div style={{ marginBottom: 20 }}>
              <h3 style={{ margin: "0 0 14px", fontSize: 17, fontWeight: 800, color: palette.text }}>
                Recetas favoritas ❤️
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {savedRecipesList.map(recipe => (
                  <RecipeCard key={recipe.id} recipe={recipe} compact />
                ))}
              </div>
            </div>
          )}

          {/* Opciones */}
          <div style={{ marginBottom: 20 }}>
            <h3 style={{ margin: "0 0 14px", fontSize: 17, fontWeight: 800, color: palette.text }}>
              Configuración ⚙️
            </h3>
            <div style={{
              backgroundColor: palette.card, borderRadius: 18,
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)", overflow: "hidden",
              border: `1px solid ${palette.border}`,
            }}>
              {[
                { emoji: "👤", label: "Editar perfil", desc: "Nombre y datos personales" },
                { emoji: "🎯", label: "Objetivos glucémicos", desc: "Configura tus rangos meta" },
                { emoji: "🔔", label: "Notificaciones", desc: "Recordatorios de medición" },
                { emoji: "📊", label: "Exportar datos", desc: "Descarga tu historial en PDF" },
                // TODO: Agregar integración con glucómetro Bluetooth
                // TODO: Compartir datos con médico
              ].map((item, i, arr) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "14px 16px",
                  borderBottom: i < arr.length - 1 ? `1px solid ${palette.border}` : "none",
                  cursor: "pointer",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 20 }}>{item.emoji}</span>
                    <div>
                      <p style={{ margin: 0, fontSize: 14, fontWeight: 700, color: palette.text }}>{item.label}</p>
                      <p style={{ margin: 0, fontSize: 12, color: palette.textLight }}>{item.desc}</p>
                    </div>
                  </div>
                  <IconChevronRight />
                </div>
              ))}
            </div>
          </div>

          {/* Sobre Elena APP */}
          <div style={{
            backgroundColor: palette.primaryLight, borderRadius: 18,
            padding: "16px 20px", textAlign: "center", marginBottom: 20,
            border: `1px solid ${palette.primary}30`,
          }}>
            <p style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 800, color: palette.primary, fontFamily: "'Quicksand', sans-serif" }}>
              Elena APP
            </p>
            <p style={{ margin: "0 0 4px", fontSize: 12, color: palette.textMid }}>
              Desarrollado por Elena · Versión 1.0.0
            </p>
            <p style={{ margin: 0, fontSize: 12, color: palette.textMid }}>
              Tu salud, bajo control 🌿
            </p>
          </div>
        </div>
      </div>
    );
  };

  // ─── Modal de detalle de receta ────────────────────────────────────────────
  const RecipeDetail = ({ recipe }) => {
    const [activeTab, setActiveTab] = useState("ingredientes");
    const isSaved = savedRecipes.includes(recipe.id);

    return (
      <div style={{
        position: "fixed", inset: 0, backgroundColor: palette.bg,
        zIndex: 150, overflowY: "auto",
      }}>
        {/* Imagen/Emoji header */}
        <div style={{
          backgroundColor: recipe.color,
          height: 220, display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 90, position: "relative",
        }}>
          {recipe.emoji}
          <button onClick={() => setSelectedRecipe(null)} style={{
            position: "absolute", top: 48, left: 16,
            backgroundColor: "rgba(255,255,255,0.9)", border: "none",
            borderRadius: 12, width: 40, height: 40,
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5">
              <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button onClick={() => setSavedRecipes(prev =>
            prev.includes(recipe.id) ? prev.filter(id => id !== recipe.id) : [...prev, recipe.id]
          )} style={{
            position: "absolute", top: 48, right: 16,
            backgroundColor: "rgba(255,255,255,0.9)", border: "none",
            borderRadius: 12, width: 40, height: 40,
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            fontSize: 18,
          }}>
            {isSaved ? "❤️" : "🤍"}
          </button>
        </div>

        {/* Contenido */}
        <div style={{ padding: "20px 20px 100px" }}>
          <span style={{
            fontSize: 11, fontWeight: 700, color: palette.primary,
            backgroundColor: palette.primaryLight, padding: "3px 10px",
            borderRadius: 20, display: "inline-block", marginBottom: 8,
          }}>{recipe.tag}</span>
          <h2 style={{ margin: "0 0 8px", fontSize: 22, fontWeight: 800, color: palette.text, fontFamily: "'Quicksand', sans-serif" }}>
            {recipe.name}
          </h2>
          <p style={{ margin: "0 0 16px", fontSize: 14, color: palette.textMid, lineHeight: 1.5 }}>
            {recipe.desc}
          </p>

          {/* Info chips */}
          <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
            {[
              { icon: "⏱️", text: recipe.time },
              { icon: "🔥", text: `${recipe.cal} kcal` },
              { icon: "⭐", text: `${recipe.rating}/5` },
              { icon: "📊", text: `IG ${recipe.gi}` },
            ].map((chip, i) => (
              <div key={i} style={{
                backgroundColor: palette.card, borderRadius: 20, padding: "6px 12px",
                display: "flex", alignItems: "center", gap: 4,
                border: `1px solid ${palette.border}`,
              }}>
                <span style={{ fontSize: 13 }}>{chip.icon}</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: palette.textMid }}>{chip.text}</span>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div style={{
            display: "flex", backgroundColor: palette.card, borderRadius: 14,
            padding: 4, marginBottom: 20, border: `1px solid ${palette.border}`,
          }}>
            {["ingredientes", "preparación"].map(t => (
              <button key={t} onClick={() => setActiveTab(t)} style={{
                flex: 1, border: "none", borderRadius: 11, padding: "10px",
                fontSize: 13, fontWeight: 700, cursor: "pointer",
                fontFamily: "'Nunito', sans-serif", textTransform: "capitalize",
                transition: "all 0.2s",
                backgroundColor: activeTab === t ? palette.primary : "transparent",
                color: activeTab === t ? "#fff" : palette.textMid,
                boxShadow: activeTab === t ? "0 2px 8px rgba(91,138,95,0.3)" : "none",
              }}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
            ))}
          </div>

          {/* Ingredientes */}
          {activeTab === "ingredientes" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {recipe.ingredients.map((ing, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 12,
                  backgroundColor: palette.card, borderRadius: 12, padding: "12px 14px",
                  border: `1px solid ${palette.border}`,
                }}>
                  <div style={{
                    width: 24, height: 24, borderRadius: "50%",
                    backgroundColor: palette.primaryLight,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <IconCheck />
                  </div>
                  <span style={{ fontSize: 14, color: palette.text, fontWeight: 600 }}>{ing}</span>
                </div>
              ))}
            </div>
          )}

          {/* Preparación */}
          {activeTab === "preparación" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {recipe.steps.map((step, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: "50%",
                    background: "linear-gradient(135deg, #5B8A5F, #3D6B41)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, color: "#fff", fontSize: 14, fontWeight: 800,
                  }}>{i + 1}</div>
                  <div style={{
                    flex: 1, backgroundColor: palette.card, borderRadius: 14, padding: "12px 14px",
                    border: `1px solid ${palette.border}`,
                  }}>
                    <p style={{ margin: 0, fontSize: 14, color: palette.text, lineHeight: 1.5, fontWeight: 600 }}>{step}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Botón acción */}
        <div style={{
          position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)",
          width: "100%", maxWidth: 430, padding: "12px 20px 24px",
          backgroundColor: palette.bg, boxShadow: "0 -4px 20px rgba(0,0,0,0.06)",
        }}>
          <button style={{
            width: "100%", background: "linear-gradient(135deg, #5B8A5F, #3D6B41)",
            border: "none", borderRadius: 16, padding: "16px",
            fontSize: 16, fontWeight: 800, color: "#fff", cursor: "pointer",
            fontFamily: "'Nunito', sans-serif",
            boxShadow: "0 4px 15px rgba(91,138,95,0.35)",
          }}>
            🍽️ ¡Preparar esta receta!
          </button>
        </div>
      </div>
    );
  };

  // ─── Renderizado principal ─────────────────────────────────────────────────
  return (
    <div style={styles.root}>
      {/* Contenido según tab */}
      {tab === "inicio" && <HomeScreen />}
      {tab === "recetas" && <RecipesScreen />}
      {tab === "glucosa" && <GlucoseScreen />}
      {tab === "perfil" && <ProfileScreen />}

      {/* Detalle receta (modal full screen) */}
      {selectedRecipe && <RecipeDetail recipe={selectedRecipe} />}

      {/* Barra de navegación inferior */}
      {!selectedRecipe && (
        <nav style={styles.navbar}>
          {[
            { id: "inicio", label: "Inicio", Icon: IconHome },
            { id: "recetas", label: "Recetas", Icon: IconRecipes },
            { id: "glucosa", label: "Glucosa", Icon: IconGlucose },
            { id: "perfil", label: "Perfil", Icon: IconProfile },
          ].map(({ id, label, Icon }) => (
            <button key={id} onClick={() => setTab(id)} style={{
              ...styles.navItem(tab === id),
              background: "none", border: "none",
            }}>
              <div style={{
                backgroundColor: tab === id ? palette.primaryLight : "transparent",
                borderRadius: 12, padding: "6px 14px",
                transition: "background-color 0.2s",
              }}>
                <Icon active={tab === id} />
              </div>
              <span style={styles.navLabel(tab === id)}>{label}</span>
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}