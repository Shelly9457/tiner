export default async function sitemap() {
    const baseUrl = "https://tiner-self.vercel.app";

    // --- 手動列出所有頁面的路徑 ---
    // （這是最穩定的方法，Google 最喜歡明確列表）

    const staticRoutes = [
        "/",
        "/about",
        "/technology",
        "/patent",
        "/generation",
        "/generation/keyproduct",
        "/generation/component",
        "/waste",
        "/application",
        "/powersystem",
        "/powersystem/drones",
        "/powersystem/bus",
        "/powersystem/boat",
        "/revive",
        "/revive/sewage",
        "/revive/fram",
        "/store",
        "/powersupply",
        "/cooperate",
    ];

    // 產生 sitemap 格式
    const sitemap = staticRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly",
        priority: 1.0,
    }));

    return sitemap;
}
