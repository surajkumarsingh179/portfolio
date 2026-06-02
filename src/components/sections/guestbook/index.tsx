'use client';

import { TextScramble } from '@/components/textScramble';
import { Card, CardContent } from '@/components/ui/card';
import Giscus from '@giscus/react';
import type { Mapping } from '@giscus/react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

import { containerVariants, itemVariants } from '../variants';

export default function Guestbook() {
  const giscusTheme =
    process.env.NEXT_PUBLIC_GISCUS_THEME || 'preferred_color_scheme';
  const giscusMappingEnv = process.env.NEXT_PUBLIC_GISCUS_MAPPING as
    | Mapping
    | undefined;
  const giscusTerm = process.env.NEXT_PUBLIC_GISCUS_TERM;
  const giscusMapping: Mapping =
    giscusMappingEnv ||
    (giscusTerm === 'pathname' ||
    giscusTerm === 'url' ||
    giscusTerm === 'title' ||
    giscusTerm === 'og:title'
      ? giscusTerm
      : 'number');
  const requiresTerm =
    giscusMapping === 'specific' || giscusMapping === 'number';

  const missingGiscusConfig =
    !process.env.NEXT_PUBLIC_GISCUS_REPO ||
    !process.env.NEXT_PUBLIC_GISCUS_REPO_ID ||
    !process.env.NEXT_PUBLIC_GISCUS_CATEGORY ||
    !process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID ||
    (requiresTerm && !giscusTerm);

  if (missingGiscusConfig) {
    return (
      <div className="relative flex items-center justify-center overflow-hidden pt-header">
        <div className="container relative mx-auto px-4 py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              margin: '-10%',
              amount: 0.1,
            }}
            variants={containerVariants}
            className="mx-auto max-w-5xl space-y-6"
          >
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <p className="font-mono text-base text-red-500">
                Guestbook is not configured. Please add Giscus environment variables to
                <code className="ml-1 rounded bg-slate-900 px-1 text-sm text-white">
                  .env.local
                </code>
                .
              </p>
              <p className="font-mono text-sm text-gray-400">
                Required variables: NEXT_PUBLIC_GISCUS_REPO, NEXT_PUBLIC_GISCUS_REPO_ID,
                NEXT_PUBLIC_GISCUS_CATEGORY, NEXT_PUBLIC_GISCUS_CATEGORY_ID
                {requiresTerm ? ', NEXT_PUBLIC_GISCUS_TERM.' : '.'}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex items-center justify-center overflow-hidden pt-header">
      <div className="container relative mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            margin: '-10%',
            amount: 0.1,
          }}
          variants={containerVariants}
          className="mx-auto max-w-5xl space-y-6"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4"
          >
            <MessageSquare className="size-8 text-pink-500 dark:text-cyan-500" />
            <TextScramble
              segments={[{ text: '$ cat ./guestbook.txt', duration: 1000 }]}
              className="font-mono text-4xl font-bold after:ml-2 after:animate-cursor after:content-['|']"
              animate="animate"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="font-mono text-base text-gray-600/90 dark:text-gray-400/90">
              <span className="text-pink-500/90 dark:text-cyan-500/90">
                {'>>'}
              </span>{' '}
              Leave a message, share your thoughts, or just say hi!
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="border-pink-300/50 bg-white/10 backdrop-blur-xs dark:border-cyan-900/50 dark:bg-gray-800/10">
              <CardContent className="p-6">
                <Giscus
                  id="comments"
                  repo={
                    process.env
                      .NEXT_PUBLIC_GISCUS_REPO! as `${string}/${string}`
                  }
                  repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID!}
                  category={process.env.NEXT_PUBLIC_GISCUS_CATEGORY!}
                  categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID!}
                  mapping={giscusMapping}
                  term={
                    giscusMapping === 'number' || giscusMapping === 'specific'
                      ? giscusTerm!
                      : undefined
                  }
                  strict="0"
                  reactionsEnabled="1"
                  emitMetadata="0"
                  inputPosition="top"
                  lang="en"
                  loading="lazy"
                  theme={giscusTheme}
                />
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
