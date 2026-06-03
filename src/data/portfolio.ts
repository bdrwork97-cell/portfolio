export const personalInfo = {
  name: 'Bodanapalli Devik',
  firstName: 'Devik',
  lastName: 'Bodanapalli',
  title: 'Cloud DevOps Engineer',
  subtitle: 'AWS & Azure Cloud Engineer',
  tagline: 'Terraform | Kubernetes | CI/CD | Cloud Automation',
  location: 'Dallas, TX',
  email: 'Bdrwork97@gmail.com',
  phone: '945-323-4349',
  github: 'https://github.com/your-github',
  linkedin: 'https://linkedin.com/in/your-linkedin',
  resumePath: '/Devik-Cloud-Engineer-Resume.pdf',
  photoPath: '/devik-headshot.png',
  photoAlt: 'Professional headshot of Bodanapalli Devik, Cloud and DevOps Engineer',
};

export const heroContent = {
  headline: 'Building scalable, secure, and automated cloud infrastructure.',
  subheading:
    'I am a Cloud and DevOps Engineer with 5+ years of hands-on experience designing, automating, and managing cloud infrastructure across AWS and Azure. I specialize in Terraform, Kubernetes, CI/CD pipelines, monitoring, security, and cloud reliability.',
};

export const stats = [
  { label: 'Years Experience', value: 5, suffix: '+' },
  { label: 'Cloud Platforms (AWS & Azure)', value: 2, suffix: '' },
  { label: 'Users Supported', value: 200, suffix: 'K+' },
  { label: 'Linux VMs Automated', value: 120, suffix: '+' },
  { label: 'Uptime Supported', value: 99.99, suffix: '%', decimals: 2 },
];

export const aboutContent = {
  paragraphs: [
    'I am a Cloud and DevOps Engineer with experience building reliable, secure, and scalable infrastructure across AWS and Azure. My work focuses on infrastructure automation, Kubernetes orchestration, CI/CD optimization, monitoring, and cloud security.',
    'I have worked on production-grade environments using tools like Terraform, CloudFormation, Bicep, Ansible, Jenkins, Azure DevOps, GitHub Actions, Docker, Kubernetes, Helm, Prometheus, Grafana, CloudWatch, Azure Monitor, and Datadog.',
    'I enjoy solving infrastructure problems, automating manual workflows, improving deployment speed, and helping teams deliver applications faster and more securely.',
  ],
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

export const experiences = [
  {
    company: 'DXC Technology',
    location: 'United States',
    role: 'Cloud DevOps Engineer',
    dates: 'Jan 2024 – Present',
    description:
      'At DXC Technology, I work on AWS cloud infrastructure, automation, Kubernetes, CI/CD pipelines, monitoring, and secure cloud architecture. I support scalable environments and help teams improve deployment speed, reliability, and security.',
    bullets: [
      'Built AWS infrastructure using Terraform and CloudFormation for EC2, S3, VPC, and supporting cloud services.',
      'Designed secure VPC architectures with public and private subnets, route tables, NAT gateways, and security groups.',
      'Managed Kubernetes clusters on Amazon EKS, including Helm deployments, node group scaling, and workload reliability.',
      'Implemented AWS Application Load Balancers and Network Load Balancers to improve availability and fault tolerance.',
      'Developed CI/CD workflows using Jenkins and AWS CodePipeline with automated testing and security scans.',
      'Reduced deployment lead time by more than 60% through automation and pipeline improvements.',
      'Used CloudWatch and other monitoring tools to improve observability and incident response.',
    ],
  },
  {
    company: 'Cybage Software',
    location: 'India',
    role: 'DevOps Engineer',
    dates: 'May 2020 – Aug 2022',
    description:
      'At Cybage Software, I worked on Azure cloud infrastructure, AKS, automation, CI/CD, monitoring, compliance, and Linux administration for enterprise applications.',
    bullets: [
      'Designed and deployed scalable Azure infrastructure using Terraform and Bicep.',
      'Provisioned AKS clusters, VM Scale Sets, VNETs, Azure Key Vault, and supporting Azure services.',
      'Automated CI/CD pipelines using Azure DevOps with security scanning and approval gates.',
      'Managed AKS microservices supporting 200K+ daily users with 99.99% uptime.',
      'Integrated Prometheus with AKS for metrics, alerting, pod health, resource utilization, and latency monitoring.',
      'Implemented Azure Service Bus and Event Hubs for event-driven microservices and real-time data streaming.',
      'Automated patching and hardening for 120+ Linux VMs using Ansible and PowerShell.',
      'Helped achieve STIG compliance and reduced audit findings for ISO 27001 and HIPAA reviews.',
      'Led root cause analysis and postmortems for production incidents.',
    ],
  },
];

export const education = {
  degree: 'Master of Science in Information Systems',
  school: 'Northwest Missouri State University',
  dates: 'Aug 2022 – Dec 2023',
};

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

export const certifications = {
  title: 'Certifications & Learning',
  disclaimer:
    'I continuously build hands-on skills across AWS, Azure, Terraform, Kubernetes, DevOps automation, and cloud security.',
  items: [
    { title: 'AWS Cloud & DevOps Learning Path', icon: 'Cloud' },
    { title: 'Azure Cloud Engineering', icon: 'CloudRain' },
    { title: 'Terraform Infrastructure as Code', icon: 'Code2' },
    { title: 'Kubernetes Administration', icon: 'Container' },
    { title: 'Security & Compliance Practices', icon: 'Shield' },
  ],
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];
