export default function sitemap() {
    return [
        {
            url: "https://tiner-self.vercel.app",
            lastModified: new Date().toISOString(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
    ];
}