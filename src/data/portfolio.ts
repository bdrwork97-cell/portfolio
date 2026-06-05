export const personalInfo = {
  name: 'Devik Bodanapalli',
  firstName: 'Devik',
  lastName: 'Bodanapalli',
  title: 'Cloud DevOps Engineer',
  subtitle: 'AWS & Azure Cloud Engineer',
  tagline: 'Terraform | Kubernetes | CI/CD | Cloud Automation',
  location: 'Dallas, TX',
  locationBadge: 'Dallas, TX | Open to relocation across the United States',
  relocation: 'Across the United States',
  email: 'Bdrwork97@gmail.com',
  phone: '945-323-4349',
  linkedin: 'https://www.linkedin.com/in/devik-bodanapalli-1742a8367/',
  resumePath: '/Bodanapalli-Devik-Cloud-DevOps-Resume.pdf',
  resumeHtmlPath: '/Devik-Cloud-Engineer-Resume.html',
  resumeDownloadName: 'Bodanapalli-Devik-Cloud-DevOps-Resume.pdf',
  photoPath: '/devik-headshot.png',
  photoAlt: 'Professional headshot of Devik Bodanapalli, Cloud and DevOps Engineer',
};

export const availabilityContent = {
  opportunities:
    'I am open to Cloud Engineer, DevOps Engineer, AWS Engineer, Azure Engineer, and Platform Engineering opportunities across the United States.',
  aboutRelocation:
    'Based in Dallas, TX, I am open to relocation and cloud engineering opportunities across the United States.',
};

export const heroContent = {
  badge: 'Azure · AWS · Kubernetes',
  headline: 'Building scalable, secure, and automated cloud infrastructure.',
  subheading:
    'I am a Cloud and DevOps Engineer with 5+ years of hands-on experience designing, automating, and managing cloud infrastructure across AWS and Azure. I specialize in Terraform, Kubernetes, CI/CD pipelines, monitoring, security, and cloud reliability.',
  mantra: ['Design', 'Automate', 'Scale'],
};

export const sectionContent = {
  about: {
    heading: 'About',
    title: 'Cloud infrastructure, automation, and reliability.',
    paragraphs: [
      'I am a Cloud and DevOps Engineer with 5+ years of hands-on experience designing, automating, and managing infrastructure across AWS and Azure. My work focuses on Infrastructure as Code, Kubernetes orchestration, CI/CD optimization, monitoring, and security.',
      'Based in Dallas, TX, I am open to Cloud Engineer, DevOps Engineer, AWS Engineer, Azure Engineer, and Platform Engineering opportunities across the United States.',
    ],
  },
  skills: {
    heading: 'Skills',
    title: 'Tools I use to build, automate, and secure cloud platforms.',
  },
  experience: {
    heading: 'Experience',
    title: 'Experience across cloud infrastructure and DevOps delivery.',
  },
  projects: {
    heading: 'Projects',
    title: 'Selected Cloud & DevOps Work',
    subtitle:
      'Infrastructure, automation, Kubernetes, CI/CD, monitoring, and security projects built around real engineering outcomes.',
  },
  learning: {
    heading: 'Certifications & Continuous Learning',
    title: 'Certifications & Continuous Learning',
    disclaimer:
      'I continuously build hands-on skills across AWS, Azure, Terraform, Kubernetes, DevOps automation, and cloud security.',
  },
  contact: {
    heading: 'Contact',
    title: "Let's build reliable cloud infrastructure.",
  },
  resume: {
    title: 'Want the full resume?',
    description:
      'Download my Cloud DevOps Engineer resume with detailed AWS, Azure, Terraform, Kubernetes, CI/CD, monitoring, security, and automation experience.',
  },
};

export const stats: { label: string; value: number; suffix: string; decimals?: number }[] = [
  { label: 'Years Experience', value: 5, suffix: '+' },
  { label: 'Cloud Platforms (AWS & Azure)', value: 2, suffix: '' },
  { label: 'Users Supported', value: 200, suffix: 'K+' },
  { label: 'Linux VMs Automated', value: 120, suffix: '+' },
  { label: 'Uptime Supported', value: 99.99, suffix: '%', decimals: 2 },
];

export const aboutContent = {
  paragraphs: sectionContent.about.paragraphs,
};

export const skillCategories = [
  {
    title: 'Cloud Platforms',
    icon: 'Cloud',
    skills: [
      'AWS', 'Azure', 'EKS', 'AKS', 'EC2', 'S3', 'IAM', 'Lambda',
      'CloudWatch', 'CloudFormation', 'Azure DevOps', 'Azure Monitor',
      'Azure Key Vault', 'Azure Policy', 'Azure Synapse Analytics',
    ],
  },
  {
    title: 'Infrastructure as Code',
    icon: 'Code2',
    skills: ['Terraform', 'Bicep', 'CloudFormation', 'Ansible', 'PowerShell', 'Bash'],
  },
  {
    title: 'Containers & Orchestration',
    icon: 'Container',
    skills: ['Docker', 'Kubernetes', 'EKS', 'AKS', 'Helm', 'AWS ECR', 'Azure Container Registry'],
  },
  {
    title: 'CI/CD',
    icon: 'GitBranch',
    skills: ['Jenkins', 'Azure DevOps Pipelines', 'GitHub Actions', 'GitLab CI/CD', 'AWS CodePipeline'],
  },
  {
    title: 'Monitoring & Logging',
    icon: 'Activity',
    skills: ['Prometheus', 'Grafana', 'Azure Monitor', 'Application Insights', 'AWS CloudWatch', 'ELK Stack', 'Datadog'],
  },
  {
    title: 'Security & Compliance',
    icon: 'Shield',
    skills: [
      'AWS IAM', 'Azure Policy', 'Azure Sentinel', 'STIG', 'HIPAA', 'ISO 27001',
      'FedRAMP', 'Encryption', 'Key Management', 'Network Security Groups', 'WAF', 'Azure DDoS Protection',
    ],
  },
  {
    title: 'Networking',
    icon: 'Network',
    skills: [
      'VPC', 'VNET', 'Subnets', 'Route Tables', 'NAT Gateway', 'Transit Gateway',
      'VPN Gateway', 'Load Balancers', 'DNS', 'Firewall Management',
    ],
  },
  {
    title: 'Programming & Scripting',
    icon: 'Terminal',
    skills: ['Python', 'PowerShell', 'Bash', 'Go', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Databases & Storage',
    icon: 'Database',
    skills: ['Amazon RDS', 'Amazon S3', 'Azure Synapse Analytics', 'MySQL', 'Redis', 'NoSQL', 'NetApp Storage'],
  },
  {
    title: 'Operating Systems',
    icon: 'Server',
    skills: ['Linux', 'RedHat', 'Ubuntu', 'Windows Server'],
  },
  {
    title: 'Other Tools',
    icon: 'Wrench',
    skills: [
      'Git', 'GitHub', 'GitLab', 'ArgoCD', 'FluxCD', 'Terraform Cloud', 'Azure Advisor',
      'OPA', 'Gatekeeper', 'Sentinel', 'Blue-Green Deployments', 'Canary Deployments',
    ],
  },
];

export type ExperienceTenure = 'current' | 'recent' | 'past';

export const experiences: {
  company: string;
  location: string;
  role: string;
  dates: string;
  tenure: ExperienceTenure;
  description: string;
  bullets: string[];
}[] = [
  {
    company: 'Duke Energy',
    location: 'United States',
    role: 'Cloud Engineer',
    dates: 'Feb 2026 – Present',
    tenure: 'current',
    description:
      'Architecting and operating AWS cloud infrastructure with Terraform, EKS, CI/CD automation, security controls, and high-availability services for enterprise workloads.',
    bullets: [
      'Built AWS infrastructure using Terraform and CloudFormation to set up EC2 instances, S3 buckets, and VPCs, significantly speeding up new environment setups.',
      'Designed secure and segmented VPC architectures with public/private subnets, route tables, NAT gateways, and security groups, enhancing network security and reducing attack surface.',
      'Managed Kubernetes clusters on EKS, including Helm deployments and node group scaling, to support large-scale applications running 24/7.',
      'Implemented load balancing solutions with AWS Application Load Balancers and Network Load Balancers to ensure high availability and fault tolerance across services.',
      'Developed and maintained CI/CD workflows with Jenkins and AWS CodePipeline, incorporating automated testing and security scans, decreasing deployment lead times by over 60%.',
      'Established robust identity and access controls with fine-grained AWS IAM policies and multi-account governance, minimizing privilege-related security risks.',
      'Integrated AWS Secrets Manager with EC2, Lambda, and ECS for secure dynamic secrets rotation.',
      'Executed automated OS patching and compliance scans across over 100 EC2 Linux servers via AWS Systems Manager and Ansible, maintaining 100% adherence to security baselines.',
      'Led the successful migration of legacy on-premises applications to AWS cloud, optimizing infrastructure costs by 35% while improving scalability through Auto Scaling Groups.',
      'Configured lifecycle policies and cross-region replication for AWS S3 buckets to optimize storage expenses and strengthen disaster recovery capabilities.',
      'Deployed Amazon RDS for PostgreSQL with Multi-AZ deployments, parameter group tuning, and performance insights integration, ensuring 99.99% availability for backend services.',
      'Set up AWS WAF and Shield to improve web application security and reduce exposure to common threats like SQL injection and XSS.',
      'Centralized logging and auditing by integrating AWS CloudTrail with ELK stack and Athena, streamlining forensic investigations and compliance reporting.',
      'Automated serverless processes with AWS Lambda and Step Functions to execute event-driven workflows, boosting operational efficiency by 25%.',
      'Provisioned and optimized MongoDB clusters on Amazon EC2 and EBS-backed storage with CloudWatch metrics, automated S3 backups, replica sets, and sharding.',
      'Established and maintained Multi-AZ Amazon RDS instances with automated backup and failover configurations, achieving recovery point objectives under 5 minutes.',
      'Automated serverless deployment workflows for AWS Lambda using GitHub Actions and AWS CodePipeline.',
      'Conducted chaos engineering experiments using Gremlin in staging clusters to test autoscaling and pod failures.',
      'Built GitOps workflow with FluxCD to manage Helm-based deployments in EKS with multi-env automation.',
      'Created centralized compliance dashboards by integrating CloudTrail logs with Athena and custom Config Rules.',
      'Handled incident escalations as part of the on-call team, and helped document fixes and RCAs to avoid repeat issues.',
    ],
  },
  {
    company: 'DXC Technology',
    location: 'United States',
    role: 'Cloud DevOps Engineer',
    dates: 'Jan 2024 – Jan 2026',
    tenure: 'recent',
    description:
      'Architected, designed, implemented, and supported AWS cloud-based infrastructure and solutions with automation, CI/CD, and configuration management.',
    bullets: [
      'Responsible for architecting, designing, implementing, and supporting cloud-based infrastructure and its solutions.',
      'Managed Amazon Web Services (AWS) infrastructure with automation and orchestration tools such as Chef.',
      'Proficient in AWS services like VPC, EC2, S3, ELB, Auto Scaling Groups (ASG), EBS, RDS, IAM, CloudFormation, Route 53, CloudWatch, CloudFront, and CloudTrail.',
      'Created multiple VPCs and public/private subnets as per requirement and distributed them across various Availability Zones.',
      'Created NAT gateways and instances to allow communication from private instances to the internet through bastion hosts.',
      'Involved in writing Java API for Amazon Lambda to manage some AWS services.',
      'Used security groups, network ACLs, internet gateways, and route tables to ensure a secure zone for the organization in AWS public cloud.',
      'Created and configured Elastic Load Balancers and Auto Scaling Groups to distribute traffic and maintain a cost-efficient, fault-tolerant, and highly available environment.',
      'Created S3 buckets in AWS to store files, including static content required for web applications.',
      'Used AWS Elastic Beanstalk for deploying and scaling web applications and services developed with Java.',
      'Configured S3 buckets with lifecycle policies to archive infrequently accessed data to different storage classes based on requirements.',
      'Created and launched EC2 instances using Linux, Ubuntu, RHEL, and Windows AMIs, and wrote shell scripts to bootstrap instances.',
      'Used IAM to create roles, users, and groups, and implemented MFA to provide additional security to AWS accounts and resources.',
      'Wrote CloudFormation templates in JSON to create custom VPCs, subnets, and NAT configurations for successful deployment of web applications.',
      'Implemented DNS using Route 53 for highly available and scalable applications.',
      'Maintained monitoring and alerting of production and corporate servers using CloudWatch.',
      'Created EBS volumes for storing application files and mounted them to EC2 instances.',
      'Built snapshots to back up volumes and created AMIs to store launch configurations of EC2 instances.',
      'Wrote AWS Infrastructure as Code templates using Terraform to build staging and production environments.',
      'Installed Workstation, Bootstrap Nodes, wrote Recipes and Cookbooks, uploaded them to Chef Server, and managed AWS for EC2, S3, and ELB using Chef Cookbooks.',
      'Wrote Chef Cookbooks for installing Tomcat, JBoss, Nginx, WebLogic, and WebSphere, and for configuring load balancers and failover.',
      'Responsible for Continuous Integration and Continuous Delivery process implementation using Jenkins along with Python and shell scripts to automate routine jobs.',
      'Implemented Continuous Integration using Jenkins and Git from scratch.',
      'Responsible for tasks like branching, tagging, and release activities using version control tools like SVN and Git.',
    ],
  },
  {
    company: 'Cybage Software',
    location: 'India',
    role: 'DevOps Engineer',
    dates: 'May 2020 – Aug 2022',
    tenure: 'past',
    description:
      'Designed and operated Azure cloud infrastructure, AKS microservices, CI/CD pipelines, compliance automation, and disaster recovery for enterprise applications.',
    bullets: [
      'Designed and deployed scalable Azure infrastructure using Terraform and Bicep, provisioning AKS clusters, VM Scale Sets, VNETs, and Key Vault, reducing deployment time by 90%.',
      'Automated end-to-end CI/CD pipelines with Azure DevOps, incorporating security scanning and gated approvals, cutting release cycles by 70%.',
      'Managed Azure Kubernetes Service (AKS) for microservices supporting 200K+ daily users with 99.99% uptime.',
      'Implemented Azure Service Bus and Event Hubs to build reliable, scalable event-driven architectures, enabling seamless microservices decoupling and real-time data streaming.',
      'Integrated Prometheus with Azure Kubernetes Service (AKS) for advanced metrics collection and alerting, improving incident response time by 45%.',
      'Implemented Policy-as-Code and Sentinel to enforce compliance, decreasing audit findings to zero for ISO 27001 and HIPAA reviews.',
      'Automated patching and hardening of 120+ Linux VMs using Ansible and PowerShell, achieving 100% compliance with STIG security standards.',
      'Led root cause analysis and postmortems for major incidents, which helped the team identify patterns and prevent similar outages in the future.',
      'Designed and maintained Azure networking including VNET peering, NSGs, and private endpoints, ensuring secure multi-region connectivity.',
      'Built serverless CI/CD pipelines using GitHub Actions and Azure Functions for event-driven automation across microservices.',
      'Designed GitOps-based deployment strategy using ArgoCD and Helm for AKS, improving rollback capability and audit readiness.',
      'Collaborated cross-functionally with security and compliance teams to implement FedRAMP and NIST controls within cloud environments.',
      'Provisioned Apache Cassandra clusters on Azure VMs using Terraform and Ansible with replication, auto-healing, and Prometheus-based monitoring.',
      'Built reliable backup and disaster recovery workflows for key applications, achieving recovery goals of under 15 minutes RPO and 1 hour RTO.',
    ],
  },
];

export const education = [
  {
    degree: 'Master of Science in Information Systems',
    school: 'Northwest Missouri State University',
    location: 'United States',
    dates: 'Aug 2022 – Dec 2023',
  },
];

export const projects = [
  {
    title: 'AWS Infrastructure Automation with Terraform',
    category: 'AWS | Terraform | IaC',
    description:
      'Designed and automated AWS infrastructure using Terraform and CloudFormation, including VPCs, EC2 instances, S3 buckets, IAM roles, security groups, and networking components.',
    highlights: [
      'Automated repeatable environment provisioning',
      'Improved consistency across deployments',
      'Reduced manual setup effort',
    ],
    techStack: ['AWS', 'Terraform', 'CloudFormation', 'EC2', 'S3', 'IAM', 'VPC'],
    icon: 'CloudCog',
  },
  {
    title: 'Kubernetes Platform on Amazon EKS',
    category: 'Kubernetes | AWS | Helm',
    description:
      'Managed EKS clusters for production workloads, including Helm deployments, node group scaling, workload monitoring, and application availability improvements.',
    highlights: [
      'Supported scalable containerized workloads',
      'Improved deployment reliability',
      'Managed Kubernetes resources and Helm releases',
    ],
    techStack: ['AWS EKS', 'Kubernetes', 'Helm', 'Docker', 'ECR', 'CloudWatch'],
    icon: 'Boxes',
  },
  {
    title: 'Azure AKS Microservices Platform',
    category: 'Azure | AKS | DevOps',
    description:
      'Designed and managed Azure Kubernetes Service environments for microservices supporting 200K+ daily users with high availability and strong monitoring.',
    highlights: [
      'Supported 99.99% uptime',
      'Integrated Prometheus monitoring',
      'Improved incident response time by 45%',
    ],
    techStack: ['Azure', 'AKS', 'Terraform', 'Bicep', 'Prometheus', 'Grafana'],
    icon: 'Layers',
  },
  {
    title: 'CI/CD Pipeline Automation',
    category: 'DevOps | Automation | CI/CD',
    description:
      'Built and optimized CI/CD workflows using Jenkins, Azure DevOps, GitHub Actions, GitLab CI/CD, and AWS CodePipeline with automated testing, approvals, and security scans.',
    highlights: [
      'Reduced deployment lead time by 60%+',
      'Added automated testing and security gates',
      'Improved release consistency',
    ],
    techStack: ['Jenkins', 'Azure DevOps', 'GitHub Actions', 'GitLab CI/CD', 'AWS CodePipeline'],
    icon: 'Workflow',
  },
  {
    title: 'Cloud Monitoring and Incident Response',
    category: 'Observability | Reliability',
    description:
      'Implemented monitoring, logging, and alerting solutions using Azure Monitor, Application Insights, AWS CloudWatch, Prometheus, Grafana, ELK Stack, and Datadog.',
    highlights: [
      'Improved infrastructure visibility',
      'Reduced incident response time',
      'Added application and infrastructure dashboards',
    ],
    techStack: ['CloudWatch', 'Azure Monitor', 'Prometheus', 'Grafana', 'ELK', 'Datadog'],
    icon: 'LineChart',
  },
  {
    title: 'Security, Compliance, and Linux Automation',
    category: 'Security | Compliance | Automation',
    description:
      'Automated patching, hardening, and compliance workflows for Linux environments while supporting STIG, HIPAA, ISO 27001, FedRAMP, encryption, IAM, and network security controls.',
    highlights: [
      'Automated 120+ Linux VMs',
      'Improved compliance readiness',
      'Reduced audit findings',
    ],
    techStack: ['Ansible', 'PowerShell', 'Linux', 'Azure Policy', 'AWS IAM', 'Sentinel', 'STIG'],
    icon: 'ShieldCheck',
  },
];

export type CertificationItem = {
  title: string;
  icon: string;
  subtitle?: string;
  certificateImage?: string;
  certificateAlt?: string;
};

export const certifications = {
  title: 'Certifications & Continuous Learning',
  disclaimer: sectionContent.learning.disclaimer,
  items: [
    { title: 'AWS Cloud & DevOps Learning Path', icon: 'Cloud', subtitle: 'Hands-on learning' },
    {
      title: 'Microsoft Certified: Azure Administrator Associate',
      icon: 'CloudRain',
      subtitle: 'Certified',
      certificateImage: '/certificates/azure-certificate.png',
      certificateAlt: 'Microsoft Certified Azure Administrator Associate certificate for Devik Reddy',
    },
    {
      title: 'Microsoft Certified: Power BI Data Analyst Associate',
      icon: 'BarChart2',
      subtitle: 'Certified',
      certificateImage: '/certificates/power-bi-certificate.png',
      certificateAlt: 'Microsoft Certified Power BI Data Analyst Associate certificate for Devik Reddy',
    },
    { title: 'Terraform Infrastructure as Code', icon: 'Code2', subtitle: 'Hands-on learning' },
    { title: 'Kubernetes Administration', icon: 'Container', subtitle: 'Hands-on learning' },
    { title: 'Security & Compliance Practices', icon: 'Shield', subtitle: 'Hands-on learning' },
  ],
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#learning' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];
