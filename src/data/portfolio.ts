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
    skills: ['AWS', 'Azure', 'EC2', 'S3', 'Lambda', 'IAM', 'VPC', 'VNET'],
  },
  {
    title: 'Infrastructure as Code',
    icon: 'Code2',
    skills: ['Terraform', 'Bicep', 'CloudFormation', 'Ansible', 'PowerShell', 'Bash'],
  },
  {
    title: 'Containers & Kubernetes',
    icon: 'Container',
    skills: ['Docker', 'Kubernetes', 'EKS', 'AKS', 'Helm', 'ECR'],
  },
  {
    title: 'CI/CD & GitOps',
    icon: 'GitBranch',
    skills: ['Jenkins', 'Azure DevOps', 'GitHub Actions', 'CodePipeline', 'FluxCD', 'ArgoCD'],
  },
  {
    title: 'Monitoring & Security',
    icon: 'Shield',
    skills: ['Prometheus', 'Grafana', 'CloudWatch', 'ELK Stack', 'WAF', 'Sentinel'],
  },
  {
    title: 'Scripting & Systems',
    icon: 'Terminal',
    skills: ['Python', 'Bash', 'PowerShell', 'Linux', 'Windows Server', 'Git'],
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
      'Built AWS infrastructure with Terraform and CloudFormation for EC2, S3, and VPCs, accelerating new environment provisioning.',
      'Managed EKS clusters with Helm deployments and node group scaling to support large-scale 24/7 applications.',
      'Developed CI/CD workflows with Jenkins and AWS CodePipeline with automated testing and security scans, reducing deployment lead times by over 60%.',
      'Automated OS patching and compliance scans across 100+ EC2 Linux servers using AWS Systems Manager and Ansible, maintaining 100% security baseline adherence.',
      'Deployed Amazon RDS PostgreSQL with Multi-AZ configurations and led on-premises-to-AWS migrations, achieving 99.99% availability and 35% cost optimization.',
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
      'Architected and supported AWS cloud infrastructure using Terraform and CloudFormation for staging and production environments.',
      'Designed VPCs with public/private subnets, NAT gateways, security groups, and Route 53 for highly available application delivery.',
      'Configured Elastic Load Balancers and Auto Scaling Groups for fault-tolerant, cost-efficient production workloads.',
      'Implemented CI/CD pipelines with Jenkins and Git, automating build, test, and release workflows from scratch.',
      'Managed configuration automation with Chef Cookbooks for EC2, S3, ELB, and middleware including Tomcat, Nginx, and WebLogic.',
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
      'Designed and deployed Azure infrastructure with Terraform and Bicep, provisioning AKS, VM Scale Sets, VNETs, and Key Vault, reducing deployment time by 90%.',
      'Automated CI/CD pipelines with Azure DevOps, including security scanning and gated approvals, cutting release cycles by 70%.',
      'Managed AKS microservices supporting 200K+ daily users with 99.99% uptime.',
      'Automated patching and hardening of 120+ Linux VMs using Ansible and PowerShell, achieving 100% STIG compliance.',
      'Integrated Prometheus with AKS for metrics and alerting, improving incident response time by 45%.',
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
