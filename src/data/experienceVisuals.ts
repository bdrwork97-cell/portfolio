import type { ExperienceTenure } from './portfolio';

export type WorkPlatform = 'aws' | 'azure';

export interface ExperienceWorkVisual {
  platform: WorkPlatform;
  headline: string;
  pipeline: {
    branch: string;
    ciTool: string;
    deployTarget: string;
    status: string;
  };
  flowSteps: { label: string; sub: string }[];
  tools: string[];
  orbitTools: string[];
  metrics: { value: string; label: string }[];
  infraNodes: { id: string; label: string; x: number; y: number }[];
  infraLinks: [string, string][];
}

export const experienceWorkVisuals: ExperienceWorkVisual[] = [
  {
    platform: 'aws',
    headline: 'AWS Enterprise Platform',
    pipeline: {
      branch: 'main',
      ciTool: 'Jenkins + CodePipeline',
      deployTarget: 'flux-sync.yml',
      status: 'GitOps · FluxCD',
    },
    flowSteps: [
      { label: 'Terraform', sub: 'VPC · EC2 · IAM' },
      { label: 'CI/CD', sub: 'Scan · Test · Deploy' },
      { label: 'EKS', sub: 'Helm · Auto-scale' },
      { label: 'RDS', sub: 'Multi-AZ · 99.99%' },
    ],
    tools: ['Terraform', 'EKS', 'Lambda', 'WAF', 'CloudTrail'],
    orbitTools: ['EC2', 'ALB', 'SSM', 'Secrets'],
    metrics: [
      { value: '99.99%', label: 'RDS uptime' },
      { value: '100+', label: 'Linux VMs' },
      { value: '60%', label: 'Faster deploys' },
    ],
    infraNodes: [
      { id: 'vpc', label: 'VPC', x: 12, y: 28 },
      { id: 'eks', label: 'EKS', x: 42, y: 18 },
      { id: 'rds', label: 'RDS', x: 72, y: 28 },
      { id: 'lambda', label: 'Lambda', x: 28, y: 62 },
      { id: 'waf', label: 'WAF', x: 58, y: 62 },
    ],
    infraLinks: [
      ['vpc', 'eks'],
      ['eks', 'rds'],
      ['vpc', 'lambda'],
      ['eks', 'waf'],
    ],
  },
  {
    platform: 'aws',
    headline: 'AWS Automation Stack',
    pipeline: {
      branch: 'develop',
      ciTool: 'Jenkins',
      deployTarget: 'cloudformation-deploy',
      status: 'Chef · ASG rollout',
    },
    flowSteps: [
      { label: 'CloudFormation', sub: 'VPC · Subnets' },
      { label: 'Jenkins', sub: 'Build · Release' },
      { label: 'EC2 ASG', sub: 'ELB · Route 53' },
      { label: 'Chef', sub: 'Cookbooks · Config' },
    ],
    tools: ['CloudFormation', 'Chef', 'Jenkins', 'Route 53', 'CloudWatch'],
    orbitTools: ['VPC', 'ELB', 'S3', 'IAM'],
    metrics: [
      { value: 'HA', label: 'Auto Scaling' },
      { value: 'IaC', label: 'Terraform + CFN' },
      { value: '24/7', label: 'Monitoring' },
    ],
    infraNodes: [
      { id: 'vpc', label: 'VPC', x: 14, y: 30 },
      { id: 'elb', label: 'ELB', x: 40, y: 20 },
      { id: 'asg', label: 'ASG', x: 66, y: 30 },
      { id: 'chef', label: 'Chef', x: 24, y: 64 },
      { id: 'r53', label: 'Route53', x: 56, y: 64 },
    ],
    infraLinks: [
      ['vpc', 'elb'],
      ['elb', 'asg'],
      ['vpc', 'chef'],
      ['asg', 'r53'],
    ],
  },
  {
    platform: 'azure',
    headline: 'Azure Microservices Platform',
    pipeline: {
      branch: 'release',
      ciTool: 'Azure DevOps',
      deployTarget: 'aks-rollout.yaml',
      status: 'Gated · Security scan',
    },
    flowSteps: [
      { label: 'Terraform', sub: 'Bicep · AKS' },
      { label: 'Azure DevOps', sub: 'CI/CD · Gates' },
      { label: 'AKS', sub: '200K+ users' },
      { label: 'Monitor', sub: 'Prometheus · DR' },
    ],
    tools: ['AKS', 'Key Vault', 'Ansible', 'Event Hubs', 'Sentinel'],
    orbitTools: ['VNET', 'NSG', 'AKS', 'DevOps'],
    metrics: [
      { value: '200K+', label: 'Daily users' },
      { value: '99.99%', label: 'Uptime' },
      { value: '120+', label: 'VMs patched' },
    ],
    infraNodes: [
      { id: 'vnet', label: 'VNET', x: 12, y: 28 },
      { id: 'aks', label: 'AKS', x: 42, y: 16 },
      { id: 'kv', label: 'Key Vault', x: 72, y: 28 },
      { id: 'bus', label: 'Service Bus', x: 26, y: 62 },
      { id: 'prom', label: 'Prometheus', x: 58, y: 62 },
    ],
    infraLinks: [
      ['vnet', 'aks'],
      ['aks', 'kv'],
      ['vnet', 'bus'],
      ['aks', 'prom'],
    ],
  },
];

export function getExperienceVisual(index: number): ExperienceWorkVisual {
  return experienceWorkVisuals[index % experienceWorkVisuals.length];
}

export function tenureLabel(tenure: ExperienceTenure): string {
  if (tenure === 'current') return 'Live production';
  if (tenure === 'recent') return 'Enterprise scale';
  return 'Foundation build';
}
