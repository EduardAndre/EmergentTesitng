import { useState, useEffect } from "react";
import "@/App.css";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sun, 
  Moon, 
  ShoppingCart, 
  Plus, 
  Minus, 
  ArrowRight, 
  ArrowLeft, 
  Check,
  Instagram,
  Mail,
  Phone,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Toaster, toast } from "sonner";

// TikTok icon SVG component
const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

// Soap product data - 15 models
const SOAP_MODELS = [
  { id: 1, name: "Inimă", image: "https://images.unsplash.com/photo-1607006344152-62699f97b42c?auto=format&fit=crop&w=800&q=80" },
  { id: 2, name: "Stea", image: "https://images.unsplash.com/photo-1709462970940-64ed68e6bf5d?auto=format&fit=crop&w=800&q=80" },
  { id: 3, name: "Floare", image: "https://images.unsplash.com/photo-1607006555278-8d2de55615e2?auto=format&fit=crop&w=800&q=80" },
  { id: 4, name: "Lună",  image: "https://images.unsplash.com/photo-1750919753634-f89bdf1bae79?auto=format&fit=crop&w=800&q=80" },
  { id: 5, name: "Trandafir", image: "https://images.unsplash.com/photo-1646910863463-777f86df957e?auto=format&fit=crop&w=800&q=80" },
  { id: 6, name: "Fluture",  image: "https://images.unsplash.com/photo-1607006344152-62699f97b42c?auto=format&fit=crop&w=800&q=80" },
  { id: 7, name: "Frunză",  image: "https://images.unsplash.com/photo-1709462970940-64ed68e6bf5d?auto=format&fit=crop&w=800&q=80" },
  { id: 8, name: "Scoică",  image: "https://images.unsplash.com/photo-1607006555278-8d2de55615e2?auto=format&fit=crop&w=800&q=80" },
  { id: 9, name: "Nor",  image: "https://images.unsplash.com/photo-1750919753634-f89bdf1bae79?auto=format&fit=crop&w=800&q=80" },
  { id: 10, name: "Steluță",  image: "https://images.unsplash.com/photo-1646910863463-777f86df957e?auto=format&fit=crop&w=800&q=80" },
  { id: 11, name: "Cerc",  image: "https://images.unsplash.com/photo-1607006344152-62699f97b42c?auto=format&fit=crop&w=800&q=80" },
  { id: 12, name: "Oval",  image: "https://images.unsplash.com/photo-1709462970940-64ed68e6bf5d?auto=format&fit=crop&w=800&q=80" },
  { id: 13, name: "Pătrat",  image: "https://images.unsplash.com/photo-1607006555278-8d2de55615e2?auto=format&fit=crop&w=800&q=80" },
  { id: 14, name: "Lavandă",  image: "https://images.unsplash.com/photo-1750919753634-f89bdf1bae79?auto=format&fit=crop&w=800&q=80" },
  { id: 15, name: "Mentă",  image: "https://images.unsplash.com/photo-1646910863463-777f86df957e?auto=format&fit=crop&w=800&q=80" },
];

// Available colors
const COLORS = [
  { id: "pink", name: "Roz", hex: "#FEC1D3" },
  { id: "orange", name: "Portocaliu", hex: "#FFA500" },
  { id: "blue", name: "Albastru", hex: "#B0E0E6" },
  { id: "white", name: "Alb", hex: "#FFFFFF" },
  { id: "purple", name: "Mov", hex: "#E6E6FA" },
];

// Available fragrances
const FRAGRANCES = [
  { id: "orange", name: "Portocale" },
  { id: "orchid", name: "Orhidee" },
  { id: "vanilla", name: "Vanilie" },
];

// WhatsApp number - CHANGE THIS TO YOUR NUMBER
const WHATSAPP_NUMBER = "40700000000";

// Social media links - CHANGE THESE TO YOUR LINKS
const SOCIAL_LINKS = {
  instagram: "https://instagram.com/yourshop",
  tiktok: "https://tiktok.com/@yourshop",
  email: "contact@yourshop.ro",
  phone: "+40 700 000 000",
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [step, setStep] = useState(1);
  const [cart, setCart] = useState([]);
  const [cartCustomizations, setCartCustomizations] = useState({});

  // Apply dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Add item to cart
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      setCartCustomizations((prev) => ({
        ...prev,
        [product.id]: { color: COLORS[0].id, fragrance: FRAGRANCES[0].id },
      }));
    }
    toast.success(`${product.name} adăugat în coș`);
  };

  // Update quantity
  const updateQuantity = (productId, delta) => {
    setCart(
      cart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
    setCartCustomizations((prev) => {
      const newCustomizations = { ...prev };
      delete newCustomizations[productId];
      return newCustomizations;
    });
    toast.info("Produs eliminat din coș");
  };

  // Update customization
  const updateCustomization = (productId, field, value) => {
    setCartCustomizations((prev) => ({
      ...prev,
      [productId]: { ...prev[productId], [field]: value },
    }));
  };

  // Calculate total
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Generate WhatsApp message
  const generateWhatsAppMessage = () => {
    let message = "Bună! Aș dori să comand:\n\n";
    cart.forEach((item) => {
      const customization = cartCustomizations[item.id];
      const color = COLORS.find((c) => c.id === customization?.color)?.name || "Nealeasă";
      const fragrance = FRAGRANCES.find((f) => f.id === customization?.fragrance)?.name || "Nealeasă";
      message += `• ${item.quantity}x ${item.name}\n`;
      message += `  Culoare: ${color}, Parfum: ${fragrance}\n`;
      message += `  Preț: ${item.price * item.quantity} RON\n\n`;
    });
    message += `Total: ${totalPrice} RON\n\nMulțumesc!`;
    return encodeURIComponent(message);
  };

  // Send to WhatsApp
  const sendToWhatsApp = () => {
    const message = generateWhatsAppMessage();
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-right" richColors />
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          {/* Theme Toggle - Left */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
            data-testid="theme-toggle"
            className="rounded-full"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          {/* Logo - Center */}
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight font-['Playfair_Display']">
            Săpunuri Artizanale
          </h1>

          {/* Cart indicator - Right */}
          <div className="flex items-center gap-2">
            {totalItems > 0 && (
              <Badge variant="secondary" className="px-3 py-1" data-testid="cart-badge">
                <ShoppingCart className="h-4 w-4 mr-1" />
                {totalItems}
              </Badge>
            )}
          </div>
        </div>

        {/* Step indicator */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 pb-4">
          <div className="flex items-center justify-center gap-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium step-indicator ${
                    step === s
                      ? "active"
                      : step > s
                      ? "completed"
                      : "bg-muted text-muted-foreground"
                  }`}
                  data-testid={`step-${s}`}
                >
                  {step > s ? <Check className="h-4 w-4" /> : s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-12 md:w-24 h-0.5 mx-2 ${
                      step > s ? "bg-[#25D366]" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-8 md:gap-20 mt-2 text-xs md:text-sm text-muted-foreground">
            <span className={step >= 1 ? "text-foreground font-medium" : ""}>
              Alege modele
            </span>
            <span className={step >= 2 ? "text-foreground font-medium" : ""}>
              Personalizează
            </span>
            <span className={step >= 3 ? "text-foreground font-medium" : ""}>
              Comandă
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <AnimatePresence mode="wait">
          {/* Step 1: Product Catalog */}
          {step === 1 && (
            <motion.div
              key="step1"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 font-['Playfair_Display']">
                  Colecția Noastră
                </h2>
                <p className="text-muted-foreground">
                  Alege modelele preferate și cantitatea dorită
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {SOAP_MODELS.map((product) => {
                  const cartItem = cart.find((item) => item.id === product.id);
                  return (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: product.id * 0.05 }}
                    >
                      <Card
                        className="soap-card overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300"
                        data-testid={`product-card-${product.id}`}
                      >
                        <div className="aspect-square overflow-hidden bg-muted">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover soap-card-image"
                          />
                        </div>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="font-semibold text-lg font-['Playfair_Display']">
                                {product.name}
                              </h3>
                              <p className="text-xl font-bold text-primary">
                                {product.price} RON
                              </p>
                            </div>
                            {cartItem && (
                              <Badge variant="secondary" className="bg-[#25D366] text-white">
                                {cartItem.quantity} în coș
                              </Badge>
                            )}
                          </div>

                          {cartItem ? (
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8 rounded-full"
                                  onClick={() => updateQuantity(product.id, -1)}
                                  data-testid={`decrease-${product.id}`}
                                >
                                  <Minus className="h-4 w-4" />
                                </Button>
                                <span className="w-8 text-center font-medium">
                                  {cartItem.quantity}
                                </span>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8 rounded-full"
                                  onClick={() => updateQuantity(product.id, 1)}
                                  data-testid={`increase-${product.id}`}
                                >
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-destructive hover:text-destructive"
                                onClick={() => removeFromCart(product.id)}
                                data-testid={`remove-${product.id}`}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          ) : (
                            <Button
                              className="w-full rounded-full"
                              onClick={() => addToCart(product)}
                              data-testid={`add-to-cart-${product.id}`}
                            >
                              <Plus className="h-4 w-4 mr-2" />
                              Adaugă în coș
                            </Button>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              {/* Continue Button */}
              {cart.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="fixed bottom-6 left-0 right-0 px-4 md:px-8"
                >
                  <div className="max-w-7xl mx-auto">
                    <Button
                      className="w-full md:w-auto md:ml-auto md:flex rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                      onClick={() => setStep(2)}
                      data-testid="continue-to-step-2"
                    >
                      Continuă ({totalItems} produse - {totalPrice} RON)
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Step 2: Customization */}
          {step === 2 && (
            <motion.div
              key="step2"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <div className="mb-8">
                <Button
                  variant="ghost"
                  className="mb-4"
                  onClick={() => setStep(1)}
                  data-testid="back-to-step-1"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Înapoi la produse
                </Button>
                <h2 className="text-3xl md:text-4xl font-bold mb-2 font-['Playfair_Display']">
                  Personalizează
                </h2>
                <p className="text-muted-foreground">
                  Alege culoarea și parfumul pentru fiecare produs
                </p>
              </div>

              <div className="space-y-6">
                {cart.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6" data-testid={`customization-card-${item.id}`}>
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Product Image & Info */}
                        <div className="flex items-center gap-4">
                          <div className="w-20 h-20 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg font-['Playfair_Display']">
                              {item.name}
                            </h3>
                            <p className="text-muted-foreground">
                              {item.quantity} x {item.price} RON
                            </p>
                          </div>
                        </div>

                        {/* Customization Options */}
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Color Selection */}
                          <div>
                            <label className="block text-sm font-medium mb-3">
                              Culoare
                            </label>
                            <div className="flex flex-wrap gap-3">
                              {COLORS.map((color) => (
                                <button
                                  key={color.id}
                                  className={`w-10 h-10 rounded-full color-swatch border-2 ${
                                    cartCustomizations[item.id]?.color === color.id
                                      ? "selected"
                                      : "border-border"
                                  }`}
                                  style={{ backgroundColor: color.hex }}
                                  onClick={() =>
                                    updateCustomization(item.id, "color", color.id)
                                  }
                                  title={color.name}
                                  data-testid={`color-${item.id}-${color.id}`}
                                />
                              ))}
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">
                              Selectat:{" "}
                              {COLORS.find(
                                (c) => c.id === cartCustomizations[item.id]?.color
                              )?.name || "Niciuna"}
                            </p>
                          </div>

                          {/* Fragrance Selection */}
                          <div>
                            <label className="block text-sm font-medium mb-3">
                              Parfum
                            </label>
                            <div className="flex flex-wrap gap-2">
                              {FRAGRANCES.map((fragrance) => (
                                <Button
                                  key={fragrance.id}
                                  variant={
                                    cartCustomizations[item.id]?.fragrance ===
                                    fragrance.id
                                      ? "default"
                                      : "outline"
                                  }
                                  className="rounded-full"
                                  onClick={() =>
                                    updateCustomization(
                                      item.id,
                                      "fragrance",
                                      fragrance.id
                                    )
                                  }
                                  data-testid={`fragrance-${item.id}-${fragrance.id}`}
                                >
                                  {fragrance.name}
                                </Button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Continue Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 flex justify-end"
              >
                <Button
                  className="rounded-full px-8 py-6 text-lg"
                  onClick={() => setStep(3)}
                  data-testid="continue-to-step-3"
                >
                  Continuă la comandă
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          )}

          {/* Step 3: Order Summary */}
          {step === 3 && (
            <motion.div
              key="step3"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <div className="mb-8">
                <Button
                  variant="ghost"
                  className="mb-4"
                  onClick={() => setStep(2)}
                  data-testid="back-to-step-2"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Înapoi la personalizare
                </Button>
                <h2 className="text-3xl md:text-4xl font-bold mb-2 font-['Playfair_Display']">
                  Sumar Comandă
                </h2>
                <p className="text-muted-foreground">
                  Verifică comanda și trimite pe WhatsApp
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Order Items */}
                <div className="lg:col-span-2 space-y-4">
                  {cart.map((item, index) => {
                    const customization = cartCustomizations[item.id];
                    const color = COLORS.find((c) => c.id === customization?.color);
                    const fragrance = FRAGRANCES.find(
                      (f) => f.id === customization?.fragrance
                    );
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className="p-4" data-testid={`order-item-${item.id}`}>
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold font-['Playfair_Display']">
                                {item.name}
                              </h3>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div
                                  className="w-4 h-4 rounded-full border"
                                  style={{ backgroundColor: color?.hex }}
                                />
                                <span>{color?.name}</span>
                                <span>•</span>
                                <span>{fragrance?.name}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold">
                                {item.quantity} x {item.price} RON
                              </p>
                              <p className="text-lg font-bold">
                                {item.quantity * item.price} RON
                              </p>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Order Total & WhatsApp Button */}
                <div>
                  <Card className="p-6 sticky top-32" data-testid="order-summary">
                    <h3 className="font-semibold text-lg mb-4 font-['Playfair_Display']">
                      Total Comandă
                    </h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-muted-foreground">
                        <span>Produse ({totalItems})</span>
                        <span>{totalPrice} RON</span>
                      </div>
                      <div className="flex justify-between text-muted-foreground">
                        <span>Livrare</span>
                        <span>Se calculează</span>
                      </div>
                    </div>
                    <div className="border-t pt-4 mb-6">
                      <div className="flex justify-between text-xl font-bold">
                        <span>Total</span>
                        <span>{totalPrice} RON</span>
                      </div>
                    </div>

                    <Button
                      className="w-full whatsapp-btn rounded-full py-6 text-lg font-semibold"
                      style={{ backgroundColor: "#25D366" }}
                      onClick={sendToWhatsApp}
                      data-testid="send-whatsapp"
                    >
                      <svg
                        className="w-6 h-6 mr-2"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Trimite pe WhatsApp
                    </Button>

                    <p className="text-xs text-muted-foreground text-center mt-4">
                      Vei fi redirecționat către WhatsApp pentru a finaliza comanda
                    </p>
                  </Card>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4 font-['Playfair_Display']">
                Săpunuri Artizanale
              </h3>
              <p className="text-muted-foreground">
                Săpunuri naturale, făcute cu dragoste pentru tine și familia ta.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <a
                  href={`tel:${SOCIAL_LINKS.phone}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-phone"
                >
                  <Phone className="h-4 w-4" />
                  {SOCIAL_LINKS.phone}
                </a>
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-email"
                >
                  <Mail className="h-4 w-4" />
                  {SOCIAL_LINKS.email}
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4">Urmărește-ne</h4>
              <div className="flex gap-4">
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  data-testid="footer-instagram"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={SOCIAL_LINKS.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  data-testid="footer-tiktok"
                  aria-label="TikTok"
                >
                  <TikTokIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 Săpunuri Artizanale. Toate drepturile rezervate.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
