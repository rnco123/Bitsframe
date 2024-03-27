'use client';

import useClasses from '../use-classes';
import React, { PropsWithChildren } from 'react';
import { FooterNavigationProps } from '.';
import useScale, { withScale } from '../use-scale';

const FooterNavigation: React.FC<PropsWithChildren<FooterNavigationProps>> = ({ children, title, className, ...props }) => {
  const { SCALER, RESPONSIVE, HIDER } = useScale();
  return (
    <nav className={useClasses('footer-navigation', className, HIDER)} {...props}>
      {title && <div className="footer-navigation-title">{title}</div>}
      <ul className="footer-navigation-group">{children}</ul>
      <style jsx>{`
        .footer-navigation-group {
          display: flex;
          flex-direction: column;
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        .footer-navigation-title {
          font-weight: 500;
        }

        ${RESPONSIVE.margin(0, value => `margin: ${value.top} ${value.right} ${value.bottom} ${value.left};`, undefined, 'footer-navigation-title')}
        ${RESPONSIVE.padding(
          { left: 0, right: 0, top: 0.75, bottom: 0.75 },
          value => `padding: ${value.top} ${value.right} ${value.bottom} ${value.left};`,
          undefined,
          'footer-navigation-title',
        )}
        ${RESPONSIVE.font(0.875, value => `font-size: ${value};`, undefined, 'footer-navigation-title')}
        ${RESPONSIVE.lineHeight(1, value => `line-height: ${value};`, 'normal', 'footer-navigation-title')}
        ${SCALER('footer-navigation')}
      `}</style>
    </nav>
  );
};

export default withScale(FooterNavigation);
