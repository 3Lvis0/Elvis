import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Background3D from '../components/Background3D';

const CategoryList = [
  {
    title: 'Introduction DevOps',
    icon: '🚀',
    description: 'Fondamentaux et principes de base DevOps',
    link: '/docs/category/devops',
  },
  {
    title: 'Linux',
    icon: '🐧',
    description: 'Fondamentaux des systèmes Linux',
    link: '/docs/category/linux',
  },
  {
    title: 'Git',
    icon: '📝',
    description: 'Gestion de versions et collaboration',
    link: '/docs/category/git',
  },
  {
    title: 'Jenkins',
    icon: '🔄',
    description: 'Intégration et déploiement continus',
    link: '/docs/category/jenkins',
  },
  {
    title: 'Ansible',
    icon: '⚙️',
    description: 'Automatisation et configuration',
    link: '/docs/category/ansible',
  },
  {
    title: 'Docker',
    icon: '🐳',
    description: 'Conteneurisation des applications',
    link: '/docs/category/docker',
  },
  {
    title: 'Kubernetes',
    icon: '🎮',
    description: 'Orchestration de conteneurs',
    link: '/docs/category/kubernetes',
  },
  {
    title: 'Helm',
    icon: '⛵',
    description: 'Gestion des packages Kubernetes',
    link: '/docs/category/helm',
  },
  {
    title: 'Terraform',
    icon: '🏗️',
    description: 'Infrastructure as Code',
    link: '/docs/category/terraform',
  },
  {
    title: 'GitOps',
    icon: '📦',
    description: 'Gestion des configurations avec Git',
    link: '/docs/category/gitops',
  },
];

function CategoryCard({title, icon, description, link}) {
  return (
    <div className={styles.categoryCard}>
      <Link to={link} className={styles.cardLink}>
        <div className={styles.cardIcon}>{icon}</div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </Link>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Plateforme d'Apprentissage DevOps</h1>
        <p className="hero__subtitle">
          Découvrez les technologies essentielles du DevOps moderne
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Accueil"
      description="Plateforme d'apprentissage DevOps"
      wrapperClassName="homepage">
      <Background3D />
      <HomepageHeader />
      <main>
        <div className={styles.categoryGrid}>
          {CategoryList.map((props, idx) => (
            <CategoryCard key={idx} {...props} />
          ))}
        </div>
      </main>
    </Layout>
  );
} 