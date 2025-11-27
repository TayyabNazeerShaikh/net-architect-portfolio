import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="relative py-20 md:py-32 overflow-hidden border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      
      <!-- Background Element (Subtle Noise/Grid) -->
      <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 dark:opacity-10 pointer-events-none"></div>
      
      <div class="relative max-w-screen-lg mx-auto px-6">
        
        <!-- Status Badge -->
        <div class="inline-flex items-center gap-2 mb-8 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-mono uppercase tracking-widest">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          System Architect Available
        </div>
        
        <!-- Headline -->
        <h1 class="text-5xl md:text-7xl font-bold text-slate-900 dark:text-slate-100 tracking-tight leading-[1.1] mb-8 transition-colors duration-300">
          Resilient Architectures for<br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-100 dark:to-slate-400">Mission-Critical Systems.</span>
        </h1>
        
        <!-- Subheadline -->
        <p class="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-10 transition-colors duration-300">
          I leverage <span class="font-semibold text-slate-900 dark:text-slate-200">.NET 8</span>, <span class="font-semibold text-slate-900 dark:text-slate-200">Azure Functions</span>, and <span class="font-semibold text-slate-900 dark:text-slate-200">EF Core Optimization</span> to turn technical chaos into stability. 
          Specializing in platforms that handle <span class="text-slate-900 dark:text-slate-200 font-medium">$1M+ daily transactions</span> without downtime.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 mb-16">
          <a href="#case-studies" class="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white hover:bg-slate-800 dark:bg-emerald-600 dark:text-white dark:hover:bg-emerald-500 font-bold text-sm rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            View Architecture Case Studies
          </a>
          <a href="mailto:hello@example.com" class="inline-flex items-center justify-center px-8 py-4 border border-slate-300 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-white font-bold text-sm rounded-lg transition-all">
            Contact Me
          </a>
        </div>

        <!-- Social Proof / Metrics Bar -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-200 dark:border-slate-800 pt-8">
          
          <div class="group flex flex-col">
            <span class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">40%</span>
            <span class="text-sm font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">Latency Reduction</span>
            <span class="text-xs text-slate-400 dark:text-slate-500 mt-1">via Query Optimization</span>
          </div>
          
          <div class="group flex flex-col">
            <span class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">99.99%</span>
            <span class="text-sm font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">System Uptime</span>
            <span class="text-xs text-slate-400 dark:text-slate-500 mt-1">during Black Friday Peak</span>
          </div>
          
          <div class="group flex flex-col">
            <span class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">10k+</span>
            <span class="text-sm font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">Concurrent Users</span>
            <span class="text-xs text-slate-400 dark:text-slate-500 mt-1">Scaled via Kubernetes</span>
          </div>

        </div>

      </div>
    </section>
  `
})
export class HeroComponent {}