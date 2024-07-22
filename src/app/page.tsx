'use client';

import { Footer, Hero, Section, Text, useConfig } from 'components';
import { motion } from 'framer-motion';
import { Facts, Partners, RunningSlogan, Services } from 'lib/components';
import Image from 'next/image';

export default function Index() {
  const { theme } = useConfig();
  return (
    <>
      <Hero scrollToId="services" style={{ background: theme.type == 'dark' ? '#090909' : '#ffffff' }}>
        <Hero.Tag>BITSFRAME</Hero.Tag>
        <Hero.Title>Empowering Your Tech Vision: Innovative Solutions for Tomorrow</Hero.Title>
        <Hero.Desc>Explore our tailored services and solutions designed to drive success in your tech projects and products.</Hero.Desc>
      </Hero>

      <div id="services">
        <Section>
          <Services></Services>
        </Section>
      </div>

      <motion.div
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Partners></Partners>
      </motion.div>

      {/* <Section>
        <Portfolio></Portfolio>
      </Section> */}

      <Section>
        <Facts></Facts>
      </Section>

      <RunningSlogan></RunningSlogan>

      <Footer.Bottom>
        <Footer.Bottom.Block>
          <div className="logo-footer">
            <Image src="/images/bitsframe-small-logo.png" width={30} height={40} alt="logo"></Image>
          </div>
        </Footer.Bottom.Block>
        <Footer.Bottom.Block>
          <div>Email: hey@bitsframe.com</div>
        </Footer.Bottom.Block>
        <Footer.Bottom.Block>
          <div>Phone: +92 309 2074390</div>
        </Footer.Bottom.Block>
        <Footer.Bottom.Block justify="flex-end">
          <Text span font={'12px'} style={{ color: 'var(--color-foreground-700)' }}>
            © 2024 Bitsframe. All Rights Reserved.
          </Text>
        </Footer.Bottom.Block>
      </Footer.Bottom>

      <style jsx>{`
        .logo-footer {
          color: var(--color-foreground-1000);
        }
        section {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 180px 0px;
        }
      `}</style>
    </>
  );
}
