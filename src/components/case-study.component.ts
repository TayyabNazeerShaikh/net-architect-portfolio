import { Component, input } from '@angular/core';
import { CaseStudy } from '../services/portfolio.service';

@Component({
  selector: 'app-case-study',
  standalone: true,
  template: `
    <div class="group border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/20 p-8 rounded hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 shadow-sm dark:shadow-none hover:shadow-lg hover:scale-[1.01]">
      <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
          <h3 class="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {{ data().title }}
          </h3>
          <p class="text-slate-600 dark:text-slate-400 mt-2 text-lg leading-relaxed transition-colors">
            {{ data().summary }}
          </p>
        </div>
        <div class="flex flex-wrap gap-2 md:justify-end md:max-w-xs">
          @for (tech of data().stack; track tech) {
            <span class="text-xs font-mono text-slate-600 dark:text-slate-500 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2 py-1 rounded transition-colors">
              {{ tech }}
            </span>
          }
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 pt-8 border-t border-slate-100 dark:border-slate-800/50 transition-colors">
        
        <!-- The Problem -->
        <div class="space-y-3">
          <h4 class="text-xs font-mono uppercase tracking-wider text-red-600 dark:text-red-400/80 transition-colors">
            [01] The Problem
          </h4>
          <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed transition-colors">
            {{ data().problem }}
          </p>
        </div>

        <!-- The Architecture -->
        <div class="space-y-3">
          <h4 class="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400/80 transition-colors">
            [02] Architecture
          </h4>
          <ul class="list-disc list-inside space-y-2">
            @for (item of data().architecture; track item) {
              <li class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed transition-colors">
                <span class="text-slate-400 dark:text-slate-500 -ml-1 mr-2">::</span>{{ item }}
              </li>
            }
          </ul>
        </div>

        <!-- The Outcome -->
        <div class="space-y-3">
          <h4 class="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400/80 transition-colors">
            [03] Outcome (Metrics)
          </h4>
          <ul class="space-y-2">
            @for (metric of data().outcome; track metric) {
              <li class="flex items-start text-sm text-slate-700 dark:text-slate-300 leading-relaxed transition-colors">
                <svg class="w-4 h-4 text-emerald-600 dark:text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {{ metric }}
              </li>
            }
          </ul>
        </div>
      </div>

      <div class="mt-8 pt-6">
        <a [href]="'https://' + data().link" target="_blank" class="inline-flex items-center text-xs font-mono text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors uppercase tracking-widest">
          <span class="mr-2">View Source</span>
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        </a>
      </div>
    </div>
  `
})
export class CaseStudyComponent {
  data = input.required<CaseStudy>();
}