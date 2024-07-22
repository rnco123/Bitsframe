'use client';

import { Link, Text } from 'components';
import React from 'react';

export type HomeCellProps = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const HomeCell: React.FC<HomeCellProps> = ({ title, desc, icon }) => {
  return (
    <div>
      <Link style={{ width: '100%', height: '100%' }}>
        <div className="feature shine-effect">
          <div className="feature__icon">{icon}</div>
          <Text h4 mt={'8px'} mb={'24px'} font={1.5}>
            {title}
          </Text>

          <Text color={`var(--color-foreground-700)`} m={0} font={1} className="feature-desc">
            {desc}
          </Text>

          <div className="shine-effect"></div>
        </div>
        <style jsx>{`
          .feature {
            width: 100%;
            padding: 40px 40px;
            border: 1px solid var(--color-border-1000);
            height: 100%;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
          }

          .feature__icon {
            height: 40px;
            width: 40px;
            border-radius: 2rem;
            background: var(--color-background-900);
            border: 1px solid var(--color-border-1000);
            color: var(--color-background-400);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            padding: 8px;
          }
        `}</style>
      </Link>
    </div>
  );
};

export default HomeCell;
