'use client';

import { Moon, Sun, Monitor, ChevronRight, Smartphone, AlertTriangle, Edit2, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useStore } from '@/store/useStore';

export default function SettingsPage() {
    const creatorProfile = useStore((state) => state.creatorProfile);
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

                {/* Creator Profile Section */}
                <section>
                    <div className="flex items-center justify-between mb-4 px-2">
                        <h2 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Creator Profile</h2>
                        <Link href="/onboarding" className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300">
                            Re-run Setup
                        </Link>
                    </div>

                    {creatorProfile ? (
                        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm dark:shadow-none divide-y divide-zinc-100 dark:divide-zinc-800">
                            <div className="p-4 bg-zinc-50/50 dark:bg-zinc-800/30">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/20">
                                        {creatorProfile.channelName?.[0] || 'C'}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-zinc-900 dark:text-white text-lg">{creatorProfile.channelName}</h3>
                                        <p className="text-sm text-zinc-500 dark:text-zinc-400">{creatorProfile.niche} • {creatorProfile.primaryPlatform}</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div className="bg-white dark:bg-zinc-950 p-3 rounded-lg border border-zinc-200 dark:border-zinc-800">
                                        <span className="text-xs text-zinc-500 uppercase block mb-1">Tone</span>
                                        <span className="font-medium capitalize text-zinc-900 dark:text-zinc-200">{creatorProfile.tone}</span>
                                    </div>
                                    <div className="bg-white dark:bg-zinc-950 p-3 rounded-lg border border-zinc-200 dark:border-zinc-800">
                                        <span className="text-xs text-zinc-500 uppercase block mb-1">Goal</span>
                                        <span className="font-medium capitalize text-zinc-900 dark:text-zinc-200">{creatorProfile.primaryGoal}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 space-y-3">
                                <h4 className="text-xs font-semibold uppercase text-zinc-500">Content Strategy</h4>
                                <div className="flex flex-wrap gap-2">
                                    {creatorProfile.formats?.map(fmt => (
                                        <span key={fmt} className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded text-xs text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                                            {fmt}
                                        </span>
                                    ))}
                                    <span className="px-2 py-1 bg-indigo-50 dark:bg-indigo-900/20 rounded text-xs text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20">
                                        {creatorProfile.typicalLength}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 text-center shadow-sm dark:shadow-none">
                            <div className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mx-auto mb-3">
                                <Edit2 className="h-5 w-5" />
                            </div>
                            <h3 className="font-medium text-zinc-900 dark:text-white mb-1">No Profile Found</h3>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">Set up your creator profile to get personalized AI suggestions.</p>
                            <Link href="/onboarding" className="inline-block px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-colors">
                                Setup Profile
                            </Link>
                        </div>
                    )}
                </section>

                {/* Install on Phone Section */}
                <section>
                    <h2 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-4 px-2">Install App</h2>
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm dark:shadow-none divide-y divide-zinc-100 dark:divide-zinc-800">
                        <div className="p-6">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
                                    <Smartphone className="h-6 w-6 text-zinc-900 dark:text-white" />
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold text-zinc-900 dark:text-white mb-1">Add to Home Screen</h3>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-md">
                                        IMPCTFUL works best as a fullscreen app on your phone. Follow the instructions below to install it.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* iOS */}
                                <div className="bg-zinc-50 dark:bg-zinc-950 rounded-xl p-5 border border-zinc-200 dark:border-zinc-800">
                                    <h4 className="font-semibold text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
                                        <span className="text-indigo-500"></span> iOS (Safari)
                                    </h4>
                                    <ol className="space-y-4">
                                        <li className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-[10px] font-bold">1</span>
                                            <span>Tap the <span className="font-bold">Share</span> button in the bottom menu bar.</span>
                                        </li>
                                        <li className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-[10px] font-bold">2</span>
                                            <span>Scroll down and tap <span className="font-bold">Add to Home Screen</span>.</span>
                                        </li>
                                        <li className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-[10px] font-bold">3</span>
                                            <span>Confirm by tapping <span className="font-bold">Add</span>.</span>
                                        </li>
                                    </ol>
                                </div>

                                {/* Android */}
                                <div className="bg-zinc-50 dark:bg-zinc-950 rounded-xl p-5 border border-zinc-200 dark:border-zinc-800">
                                    <h4 className="font-semibold text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
                                        <span className="text-emerald-500">🤖</span> Android (Chrome)
                                    </h4>
                                    <ol className="space-y-4">
                                        <li className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-[10px] font-bold">1</span>
                                            <span>Tap the <span className="font-bold">Three Dots (Menu)</span> in the top right.</span>
                                        </li>
                                        <li className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-[10px] font-bold">2</span>
                                            <span>Select <span className="font-bold">Install App</span> or <span className="font-bold">Add to Home Screen</span>.</span>
                                        </li>
                                        <li className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-[10px] font-bold">3</span>
                                            <span>Confirm installation.</span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        <div className="bg-orange-50 dark:bg-orange-950/20 px-6 py-4 border-t border-orange-100 dark:border-orange-900/30">
                            <div className="flex gap-3">
                                <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                                <div className="space-y-1">
                                    <h4 className="text-sm font-semibold text-orange-700 dark:text-orange-400">Troubleshooting</h4>
                                    <p className="text-xs text-orange-600/80 dark:text-orange-400/70">
                                        If "Add to Home Screen" isn't appearing, ensure you are opening this link in <strong>Safari (iOS)</strong> or <strong>Chrome (Android)</strong> directly, not inside another app (like Instagram or Slack).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
