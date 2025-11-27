import { Component, inject } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-code-showcase',
  standalone: true,
  template: `
    <section class="py-20 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div class="max-w-screen-lg mx-auto px-6">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 class="text-sm font-mono uppercase tracking-widest text-slate-500 mb-2">
              // The Code Factor
            </h2>
            <h3 class="text-3xl font-bold text-slate-900 dark:text-slate-100 transition-colors">
              Clean. Resilient. Testable.
            </h3>
          </div>
          <p class="text-slate-600 dark:text-slate-400 text-sm max-w-md text-right md:text-left transition-colors">
            A snippet from a payment handler implementing the Outbox Pattern and Policy-based resilience logic.
          </p>
        </div>

        <!-- Terminal Window (Always Dark for contrast) -->
        <div class="rounded-lg overflow-hidden border border-slate-800 bg-[#0d1117] shadow-2xl">
          <!-- Window Header -->
          <div class="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
            <div class="flex items-center gap-2">
              <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              <div class="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
            </div>
            <div class="text-xs font-mono text-slate-500">
              PaymentCommandHandler.cs
            </div>
            <div class="w-12"></div> <!-- Spacer for center alignment -->
          </div>

          <!-- Code Content -->
          <div class="p-6 overflow-x-auto">
            <pre class="font-mono text-sm leading-relaxed text-slate-300"><code>{{ portfolioService.codeSnippet() }}</code></pre>
          </div>
        </div>
      </div>
    </section>
  `
})
export class CodeShowcaseComponent {
  portfolioService = inject(PortfolioService);
}