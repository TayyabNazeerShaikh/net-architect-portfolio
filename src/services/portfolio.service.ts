import { Injectable, signal } from '@angular/core';

export interface TechItem {
  name: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
}

export interface TechCategory {
  name: string;
  items: TechItem[];
}

export interface CaseStudy {
  id: string;
  title: string;
  summary: string;
  problem: string;
  architecture: string[];
  outcome: string[];
  stack: string[];
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  
  // Tech Stack Data
  readonly techStack = signal<TechCategory[]>([
    {
      name: 'Core & Backend',
      items: [
        { name: '.NET 8 (C#)', level: 'Expert' },
        { name: 'ASP.NET Core', level: 'Expert' },
        { name: 'Microservices', level: 'Expert' },
        { name: 'Entity Framework Core', level: 'Advanced' }
      ]
    },
    {
      name: 'Cloud & Infrastructure',
      items: [
        { name: 'Azure (AKS, Service Bus)', level: 'Advanced' },
        { name: 'Docker & Kubernetes', level: 'Advanced' },
        { name: 'Terraform', level: 'Proficient' },
        { name: 'CI/CD (GitHub Actions)', level: 'Advanced' }
      ]
    },
    {
      name: 'Data & Messaging',
      items: [
        { name: 'PostgreSQL / SQL Server', level: 'Expert' },
        { name: 'Redis', level: 'Advanced' },
        { name: 'RabbitMQ / Kafka', level: 'Proficient' },
        { name: 'Elasticsearch', level: 'Proficient' }
      ]
    }
  ]);

  // Case Studies Data
  readonly caseStudies = signal<CaseStudy[]>([
    {
      id: 'fintech-payments',
      title: 'High-Throughput Payment Gateway',
      summary: 'A resilient payment processing engine handling $50M+ daily transaction volume.',
      problem: 'Legacy monolith was experiencing 40% latency spikes during peak trading hours, leading to timeouts and failed webhooks. Database deadlocks were frequent due to long-running transactions.',
      architecture: [
        'Migrated to Event-Driven Architecture using Azure Service Bus.',
        'Implemented CQRS to separate high-volume reads from transactional writes.',
        'Used Outbox Pattern to guarantee message delivery.',
        'Idempotency keys implemented at API gateway level.'
      ],
      outcome: [
        '99.99% uptime achieved over 12 months.',
        'Reduced p99 latency from 2.5s to 120ms.',
        'Zero data loss during region failover simulation.'
      ],
      stack: ['.NET 8', 'Azure Service Bus', 'CosmosDB', 'Redis'],
      link: 'github.com/username/payment-engine' // Placeholder
    },
    {
      id: 'logistics-iot',
      title: 'Real-Time Logistics Tracker',
      summary: 'Ingesting 5k telemetry points/sec for a global shipping fleet.',
      problem: 'Previous solution crashed under load when fleet size doubled. Relational DB could not handle write throughput of raw telemetry data.',
      architecture: [
        'Switched to TimescaleDB for efficient time-series storage.',
        'Implemented Sharded Ingestion Service in Kubernetes (HPA enabled).',
        'SignalR for real-time dashboard updates to operators.'
      ],
      outcome: [
        'Scaled to 10k concurrent devices with <50% CPU utilization.',
        'Decreased query time for "Last 24h Route" by 90%.',
        'Infrastructure costs reduced by 30% via spot instances.'
      ],
      stack: ['ASP.NET Core', 'TimescaleDB', 'Kubernetes', 'gRPC'],
      link: 'github.com/username/iot-ingestor'
    },
    {
      id: 'auth-service',
      title: 'Federated Identity Provider',
      summary: 'Centralized OAuth2/OIDC service for a suite of 12 enterprise products.',
      problem: 'Inconsistent authentication logic across microservices led to security vulnerabilities and poor UX (multiple logins).',
      architecture: [
        'Implemented Duende IdentityServer with custom grant types.',
        'BFF (Backend for Frontend) pattern for secure cookie handling.',
        'Redis-backed distributed caching for revocation lists.'
      ],
      outcome: [
        'Unified SSO experience across all 12 products.',
        'Passed SOC2 compliance audit with zero critical findings.',
        'Session validation overhead reduced to <2ms.'
      ],
      stack: ['.NET Identity', 'Duende IdentityServer', 'Redis'],
      link: 'github.com/username/sso-provider'
    }
  ]);

  // Code Snippet Data
  readonly codeSnippet = signal<string>(`
public async Task<Result<TransactionId>> Handle(ProcessPaymentCommand command, CancellationToken ct)
{
    // Observability first
    using var activity = _telemetry.StartActivity("ProcessingPayment");
    activity?.SetTag("payment.amount", command.Amount);

    // Resilience policy: Exponential Backoff for transient DB errors
    var policy = Policy.Handle<DbUpdateException>()
        .WaitAndRetryAsync(3, retry => TimeSpan.FromMilliseconds(100 * Math.Pow(2, retry)));

    return await policy.ExecuteAsync(async () => {
        // Domain Logic
        var account = await _repo.GetByIdAsync(command.AccountId, ct);
        
        if (!account.CanDebit(command.Amount)) 
        {
             _logger.LogWarning("Insufficient funds for {AccountId}", command.AccountId);
             return Result.Failure(Errors.InsufficientFunds);
        }
        
        account.Debit(command.Amount);
        
        // Transactional boundary
        await _unitOfWork.SaveChangesAsync(ct);
        
        // Eventual Consistency: Publish integration event
        await _eventBus.PublishAsync(new PaymentProcessed(account.Id, command.Amount), ct);
        
        return Result.Success(new TransactionId(Guid.NewGuid()));
    });
}
  `.trim());
}