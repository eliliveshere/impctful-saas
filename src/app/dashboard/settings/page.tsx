'use client';

import { Moon, Sun, Monitor, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function SettingsPage() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Initialize state based on document class
        setIsDark(document.documentElement.classList.contains('dark'));
    }, []);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);
        if (newIsDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <div className="max-w-[800px] mx-auto p-6 pb-32 lg:p-12 animate-in fade-in duration-700">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight mb-2">Settings</h1>
                <p className="text-zinc-500 dark:text-zinc-400">Manage your workspace preferences.</p>
            </header>

            <div className="space-y-6">
                {/* Appearance Section */}
                <section>
                    <h2 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-4 px-2">Appearance</h2>
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm dark:shadow-none">

                        <div className="p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400">
                                    {isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-zinc-900 dark:text-white">Dark Mode</p>
                                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Adjust the interface theme</p>
                                </div>
                            </div>

                            <button
                                onClick={toggleTheme}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:ring-offset-2 focus:ring-offset-zinc-950 ${isDark ? 'bg-indigo-600' : 'bg-zinc-200 dark:bg-zinc-700'}`}
                            >
                                <span className="sr-only">Toggle Dark Mode</span>
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isDark ? 'translate-x-6' : 'translate-x-1'}`}
                                />
                            </button>
                        </div>

                    </div>
                </section>

                {/* Account Section (Placeholder) */}
                <section>
                    <h2 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-4 px-2">Account</h2>
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm dark:shadow-none divide-y divide-zinc-100 dark:divide-zinc-800">
                        <button className="w-full p-4 flex items-center justify-between hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors text-left">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400">
                                    <Monitor className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-zinc-900 dark:text-white">Workspace Details</p>
                                </div>
                            </div>
                            <ChevronRight className="h-4 w-4 text-zinc-400" />
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}
