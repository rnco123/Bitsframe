'use client';
import { Button, Grid, Hero, Link, PageWidth, Text } from 'components';
import { motion } from 'framer-motion';

export function PortfolioItem({ image, title = '', desc = '', url }: { image?: string; title: string; desc: string; w: number; h: number; url?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: '4rem', filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, translateY: 0, filter: 'blur(0px)' }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="portfolio">
        {image && (
          <div className="portfolio-image">
            {/*
            <ResponsiveImage alt={title} src={image} w={w} h={h} draggable={false} />
            */}
          </div>
        )}
        <Link font={'24px'} style={{ fontWeight: 'bold' }} my={0}>
          {title}
        </Link>
        <Text mt={0} style={{ color: 'var(--color-background-300)' }}>
          {desc}
        </Text>
        {url && (
          <Link target="_blank" href={url}>
            <Button auto>Source code</Button>
          </Link>
        )}

        {!url && (
          <Button disabled auto>
            Coming soon
          </Button>
        )}
        <style jsx>{`
          .img-link {
            width: 100%;
          }
          .portfolio-image {
            width: 100%;
            position: relative;
            border-radius: var(--layout-radius);
            margin-bottom: 12px;
          }

          .portfolio {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            poistion: relative;
            gap: 12px;
          }
        `}</style>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <PageWidth>
      <motion.div
        initial={{ opacity: 0, translateY: '4rem', filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, translateY: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="header">
          <Hero.Tag background={`var(--color-primary-1000)`} textColor={'var(--color-primary-contrast)'}>
            Projects
          </Hero.Tag>
          <Text m={0} mt={'12px'} h4 font={'clamp(24px, 3.1vw, 48px)'} style={{ fontWeight: '700', lineHeight: '1.2' }}>
            Versatile, cutting-edge, and impactful: Discover real-world solutions created with Bitsframe.
          </Text>
          <Text m={0} mt={'24px'} font={'clamp(14px, 1.2vw, 16px)'} style={{ color: `var(--color-background-300)`, fontWeight: 400 }}>
            Our tech solutions include a range of comprehensive demo projects, showcasing real-world applications and a rich library of examples, highlighting
            our extensive capabilities for diverse design and development needs.
          </Text>
        </div>
      </motion.div>
      <Grid.Container gap={5} justify="center">
        <Grid xs={24} md={12}>
          <div className="portfolio-list">
            <PortfolioItem
              image="https://picsum.photos/id/2/578/578"
              w={578}
              h={578}
              title="TurtleTrade"
              desc="TurtleTrade is your free gateway to stock market success, providing cutting-edge forecasting and analysis tools for informed investment decisions."
            />
            <PortfolioItem
              image="https://picsum.photos/id/2/578/750"
              w={578}
              h={750}
              title="Striked"
              desc="Striked is the ultimate social network connecting gamers and game developers, where gaming's pulse beats through a vibrant community of shared passion and innovation."
            />
          </div>
        </Grid>
        <Grid xs={24} md={12}>
          <div className="portfolio-list">
            <PortfolioItem
              image="https://picsum.photos/id/2/578/750"
              w={578}
              h={750}
              title="RedNinjas"
              desc="At RedNinjas, we're the digital agency that thrives on crafting innovative products across diverse industries, fueled by a passion for creativity and excellence."
            />
            <PortfolioItem
              w={578}
              h={578}
              image="/images/himalaya-preview.png"
              title="Himalaya"
              url="https://github.com/red-ninjas/himalaya-ui"
              desc="Himalaya, our open-source library's documentation page, serves as a comprehensive guide, unveiling the majestic peaks of functionality and customization, with clear paths to explore its towering potential."
            />
          </div>
        </Grid>
      </Grid.Container>

      <style jsx>{`
        .action-button {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
          padding: 48px 0px;
        }
        .header {
          max-width: 700px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: flex-start;
          margin-bottom: 64px;
        }

        .portfolio-list {
          display: flex;
          flex-direction: column;
          gap: 60px;
          width: 100%;
        }
      `}</style>
    </PageWidth>
  );
}
