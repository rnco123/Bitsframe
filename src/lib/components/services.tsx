'use client';
import Activity from 'components/icons/activity';
import FeatherIcon from 'components/icons/feather';
import GitHubIcon from 'components/icons/github';
import PackageIcon from 'components/icons/package';
import { motion } from 'framer-motion';

import { Grid, Hero, PageWidth, Text } from 'components';
import { HomeCell } from '.';
export default function Services() {
  return (
    <PageWidth>
      <motion.div
        whileInView={{ opacity: 1, translateY: 0, filter: 'blur(0px)' }}
        initial={{ opacity: 0, translateY: '4rem', filter: 'blur(10px)' }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="header">
          <Hero.Tag background={`var(--color-primary-1000)`} textColor={`var(--color-primary-contrast)`}>
            Techcellence
          </Hero.Tag>
          <Text m={0} mt={'12px'} h4 font={'clamp(24px, 3.1vw, 48px)'} style={{ fontWeight: '700', lineHeight: '1.2' }}>
            Scaling Excellence: UI Components Beyond Limits
          </Text>
          <Text m={0} mt={'24px'} font={'clamp(14px, 1.2vw, 16px)'} style={{ color: `var(--color-background-300)`, fontWeight: 400 }}>
            Unlock unparalleled scalability and performance with our high-scalable UI components, designed to meet the demands of your most ambitious projects.
          </Text>
        </div>
        <Grid.Container gap={2} justify="center">
          <Grid xs={24} md={6}>
            <HomeCell icon={<PackageIcon />} title="Custom Solutions" desc="Tailored services to meet your unique needs." />
          </Grid>
          <Grid xs={24} md={6}>
            <HomeCell icon={<FeatherIcon />} title="Advanced Tech" desc="Cutting-edge technology for innovative and effective solutions." />
          </Grid>
          <Grid xs={24} md={6}>
            <HomeCell icon={<GitHubIcon />} title="Flexible Management" desc="Adaptive project management for timely and efficient results." />
          </Grid>
          <Grid xs={24} md={6}>
            <HomeCell icon={<Activity />} title="Expert Team" desc=" Skilled professionals with deep industry knowledge and expertise" />
          </Grid>
        </Grid.Container>
        <style jsx>{`
          .action-button {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: center;
            padding: 36px 0px;
          }
          .header {
            max-width: 700px;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 auto;
            text-align: center;
            margin-bottom: 64px;
          }
        `}</style>
      </motion.div>
    </PageWidth>
  );
}
