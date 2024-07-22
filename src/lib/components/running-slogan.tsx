'use client';
import { RunningText, Text } from 'components';
import { motion } from 'framer-motion';

export default function RunningSlogan() {
  return (
    <motion.div
      style={{ width: '100%' }}
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <RunningText>
        <Text m={0} stroke={1.5} style={{ fontWeight: 800 }} font={'9vw'}>
          Breakthrough
        </Text>
        <Text m={0} style={{ fontWeight: 800 }} font={'9vw'}>
          Tech
        </Text>

        <Text m={0} stroke={1.5} style={{ fontWeight: 800 }} font={'9vw'}>
          Excellence
        </Text>
      </RunningText>
    </motion.div>
  );
}
