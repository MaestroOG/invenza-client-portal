'use client';


export default function DashboardNotFoundPage() {
    return (
        <main className="flex h-screen flex-col items-center justify-center text-center px-4">
            <h1 className="text-foreground text-6xl font-bold mb-2">404</h1>
            <p className="text-lg text-gray-500 mb-6">
                The page you’re looking for doesn’t exist or has been moved.
            </p>
        </main>
    )
}