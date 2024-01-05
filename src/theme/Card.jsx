import React from 'react';
import styles from '../css/custom-styles/Card.module.css';

export const Card = ({ title, content, link }) => (
  <a href={link} className={styles.cardLink}>
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <div className={styles.cardContent}>{content}</div>
    </div>
  </a>
);

export const CardContainer = ({ children }) => (
  <div className={styles.cardContainer}>{children}</div>
);
