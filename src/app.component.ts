import { Component, inject, signal, effect } from '@angular/core';
import { HeroComponent } from './components/hero.component';
import { TechStackComponent } from './components/tech-stack.component';
import { CaseStudyComponent } from './components/case-study.component';
import { CodeShowcaseComponent } from './components/code-showcase.component';
import { PortfolioService } from './services/portfolio.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    TechStackComponent,
    CaseStudyComponent,
    CodeShowcaseComponent
  ],
  host: {
    '(window:scroll)': 'onWindowScroll()'
  },
  template: `
    <div class="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-300 transition-colors duration-300 ease-in-out selection:bg-emerald-500/30 selection:text-emerald-700 dark:selection:text-emerald-200">

      <!-- Scroll Progress Bar -->
      <div class="fixed top-0 left-0 h-1 bg-emerald-500 z-[100] transition-[width] duration-150 ease-out"
           [style.width.%]="scrollProgress()">
      </div>

      <!-- Nav / Header -->
      <header class="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/50 transition-colors duration-300 ease-in-out">
        <div class="max-w-screen-lg mx-auto px-6 h-16 flex items-center justify-between">
          <div class="font-bold text-slate-900 dark:text-slate-100 tracking-tight transition-colors duration-300 ease-in-out">
            Tayyyab Shaikh // Portfolio
          </div>

          <div class="flex items-center gap-6">
            <nav class="hidden md:flex gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
              <a href="#tech-stack" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 ease-in-out">Stack</a>
              <a href="#case-studies" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 ease-in-out">Work</a>
              <a href="mailto:hello@example.com" class="text-slate-900 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 ease-in-out">Contact</a>
            </nav>

            <!-- Theme Toggle -->
            <button
              (click)="toggleTheme()"
              class="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              aria-label="Toggle Dark Mode">
              @if (isDarkMode()) {
                <!-- Sun Icon -->
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              } @else {
                <!-- Moon Icon -->
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                </svg>
              }
            </button>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="pt-16">
        <app-hero />

        <app-tech-stack />

        <section id="case-studies" class="py-24 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 ease-in-out">
          <div class="max-w-screen-lg mx-auto px-6">
            <h2 class="text-sm font-mono uppercase tracking-widest text-slate-500 mb-12">
              // Selected Architecture
            </h2>
            <div class="space-y-12">
              @for (study of portfolioService.caseStudies(); track study.id) {
                <app-case-study [data]="study" />
              }
            </div>
          </div>
        </section>

        <app-code-showcase />
      </main>

      <!-- Footer -->
      <footer class="py-12 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/50 transition-colors duration-300 ease-in-out">
        <div class="max-w-screen-lg mx-auto px-6 text-center">
          <p class="text-slate-500 dark:text-slate-600 text-sm">
            © 2025 • Made by Tayyab Shaikh • Code. Design. Architecture.
          </p>
        </div>
      </footer>
    </div>
  `
})
export class AppComponent {
  portfolioService = inject(PortfolioService);
  isDarkMode = signal(true);
  scrollProgress = signal(0);

  constructor() {
    effect(() => {
      if (this.isDarkMode()) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    });
  }

  toggleTheme() {
    this.isDarkMode.update(prev => !prev);
  }

  onWindowScroll() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (height > 0) {
      const scrolled = (winScroll / height) * 100;
      this.scrollProgress.set(scrolled);
    }
  }
}
