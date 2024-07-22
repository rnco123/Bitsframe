'use client';

import { Seeds } from 'lib/data';
import _ from 'lodash';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
export interface Meta {
  title: string;
}

const toCapitalize = (name: string) => {
  const [first, ...rest] = name;
  return `${first.toUpperCase()}${rest.join('')}`;
};

const TilteInjector = () => {
  const pathName = usePathname();
  const activeRecord = _.findLast(Seeds, df => df.url === pathName);

  const capitalizeTitle = useMemo(() => {
    if (!activeRecord) return undefined;
    if (activeRecord.name.toLowerCase().startsWith('use')) return `${activeRecord.name}`;
    return `${toCapitalize(activeRecord.name)}`;
  }, [activeRecord]);

  const capitalizeTitleGenerated = capitalizeTitle ? `${capitalizeTitle} — Bitsframe` : `Bitsframe — A Saas for Cutting Edge Web Development`;

  return (
    <>
      <title>{capitalizeTitleGenerated}</title>
      <meta
        name="description"
        content="Discover Bitsframe, an exceptional start up for cutting edge web development, offering a wide range of powerful features and seamless integration possibilities."
      />
      <meta name="title" content={'Bitsframe — A Saas for Cutting Edge Web Development'} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={'https://bitsframe.com'} />
      <meta property="og:title" content={'Bitsframe — A Saas for Cutting Edge Web Development'} />
      <meta
        property="og:description"
        content="Discover Bitsframe, an exceptional start up for cutting edge web development, offering a wide range of powerful features and seamless integration possibilities."
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={'https://bitsframe.com'} />
      <meta property="twitter:title" content={'Bitsframe — A Saas for Cutting Edge Web Development'} />
      <meta
        property="twitter:description"
        content="Discover Bitsframe, an exceptional start up for cutting edge web development, offering a wide range of powerful features and seamless integration possibilities."
      />
    </>
  );
};

export default TilteInjector;
