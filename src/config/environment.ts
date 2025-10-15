// تكوين البيئة
export const config = {
  // رابط API
  apiUrl: import.meta.env.VITE_API_URL || "https://api.nafs-baserah.com/api/",

  // البيئة الحالية
  environment: import.meta.env.MODE || "development",

  // إعدادات الأمان
  security: {
    // تفعيل HTTPS في الإنتاج
    enforceHttps: import.meta.env.MODE === "production",
    // تفعيل console.log في التطوير فقط
    enableLogging: import.meta.env.MODE === "development",
  },
  
  // إعدادات التطبيق
  app: {
    name: "نفس بصيرة",
    version: "1.0.0",
    // صفحات محمية تتطلب تسجيل دخول
    protectedRoutes: ["/dashboard", "/profile"],
    // صفحات الأدمن فقط
    adminRoutes: ["/dashboard"],
  },
};

// دالة للتحقق من البيئة
export const isDevelopment = () => config.environment === "development";
export const isProduction = () => config.environment === "production";

// دالة للحصول على رابط API
export const getApiUrl = () => config.apiUrl;

// دالة للتسجيل الآمن (فقط في التطوير)
export const secureLog = (message: string, data?: any) => {
  if (config.security.enableLogging) {
    console.log(`[${config.app.name}] ${message}`, data);
  }
};

// دالة للتحقق من المسارات المحمية
export const isProtectedRoute = (path: string): boolean => {
  return config.app.protectedRoutes.some(route => path.startsWith(route));
};

// دالة للتحقق من مسارات الأدمن
export const isAdminRoute = (path: string): boolean => {
  return config.app.adminRoutes.some(route => path.startsWith(route));
};
