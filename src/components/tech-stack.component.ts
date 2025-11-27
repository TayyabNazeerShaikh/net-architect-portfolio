import { Component, inject } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  template: `
    <section id="tech-stack" class="py-20 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50 transition-colors duration-300">
      <div class="max-w-screen-lg mx-auto px-6">
        <h2 class="text-sm font-mono uppercase tracking-widest text-slate-500 mb-12">
          // Technology Stack
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          @for (category of portfolioService.techStack(); track category.name) {
            <div class="space-y-6">
              <h3 class="text-xl font-semibold text-slate-800 dark:text-slate-200 border-l-2 border-emerald-500 pl-4 transition-colors">
                {{ category.name }}
              </h3>
              <ul class="space-y-3">
                @for (item of category.items; track item.name) {
                  <li class="flex items-center justify-between group">
                    <span class="text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">
                      {{ item.name }}
                    </span>
                    <span class="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 dark:bg-slate-900 dark:text-slate-600 dark:border-slate-800 transition-colors">
                      {{ item.level }}
                    </span>
                  </li>
                }
              </ul>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class TechStackComponent {
  portfolioService = inject(PortfolioService);
}